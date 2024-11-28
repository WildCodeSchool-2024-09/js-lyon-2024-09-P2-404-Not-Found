import "../../styles/Global.css";
import { useEffect, useState } from "react";
import addToFavorites from "../../utils/HandleFavorites";
import Youtube from "./Youtube";

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
          <section className="recipe-introduction">
            <h1>{recipesInfo.strMeal}</h1>
            <section className="recipe-presentation">
              <div className="recipe-view">
                <img
                  src={recipesInfo.strMealThumb}
                  alt={recipesInfo.strMeal}
                  className="recipe-image"
                />
                <div>
                  <h3>Instructions</h3>
                  <p>{recipesInfo.strInstructions}</p>
                </div>
              </div>
              <article className="recipe-description">
                <div className="recipe-origine">
                  <h3>Category: </h3>
                  <p>{recipesInfo.strCategory}</p>
                  <h3>Country: </h3>
                  <p>{recipesInfo.strArea}</p>
                </div>
                <div>
                  <h3>Ingredients:</h3>
                  <ul className="listingd">
                    {ingredients.map((item, index) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      <li key={index}>
                        {item.ingredient} - {item.measure}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </section>
            <div className="btn-links">
              <Youtube recipeName={recipesInfo.strMeal} />
              <button
                type="button"
                className="favorite-btn"
                onClick={() => addToFavorites(recipesInfo)}
              >
                ❤️ Add to favorite
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  ) : null;
}

export default Recipe;
