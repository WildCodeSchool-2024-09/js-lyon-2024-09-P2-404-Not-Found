import "../styles/Recipe.css";
import { useEffect, useState } from "react";

interface RecipeProps {
  trigger: boolean;
  setTrigger: (index: boolean) => void;
  choosenRecipe: string;
}

interface recipesInfoProps {
  meals: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    strArea: string;
    strCategory: string;
    [key: string]: string | undefined; // Add this to allow dynamic keys
  };
}

function Recipe({ trigger, setTrigger, choosenRecipe }: RecipeProps) {
  const [recipesInfo, setRecipesInfo] = useState<
    recipesInfoProps["meals"] | null
  >(null);
  const [ingredients, setIngredients] = useState<
    { ingredient: string; measure: string }[]
  >([]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${choosenRecipe}`,
    )
      .then((response) => response.json())
      .then((data) => {
        const recipe = data.meals[0];
        setRecipesInfo(recipe);

        // Extract ingredients and measures dynamically
        const extractedIngredients: { ingredient: string; measure: string }[] =
          [];

        for (let i = 1; i <= 20; i++) {
          const ingredient = recipe[`strIngredient${i}`];
          const measure = recipe[`strMeasure${i}`];

          if (
            ingredient &&
            ingredient.trim() !== "" &&
            measure &&
            measure.trim() !== ""
          ) {
            extractedIngredients.push({ ingredient, measure });
          }
        }

        setIngredients(extractedIngredients);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [choosenRecipe]);

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          type="button"
          className="close-btn"
          onClick={() => setTrigger(false)}
        >
          X
        </button>
        {recipesInfo && (
          <section>
            <h1>{recipesInfo.strMeal}</h1>
            <img
              src={recipesInfo.strMealThumb}
              alt={recipesInfo.strMeal}
              className="recipe-image"
            />
            <h2>Category: {recipesInfo.strCategory}</h2>

            <div>
              <h2>Ingredients:</h2>
              <ul className="listingd">
                {ingredients.map((item, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <li key={index}>
                    {item.ingredient} - {item.measure}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Instructions</h2>
              <p className="text-instr">{recipesInfo.strInstructions}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  ) : null;
}

export default Recipe;
