import { useEffect, useState } from "react";
import "../styles/Recipe.css";

interface RecipeProps {
  trigger: boolean;
  setTrigger: (index: boolean) => void;
  choosenRecipe: string;
}

interface recipesInfoProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
  listIngredients: { name: string; measure: string }[];
}

function Recipe({ trigger, setTrigger, choosenRecipe }: RecipeProps) {
  const [recipesInfo, setRecipesInfo] = useState<
    recipesInfoProps | null | undefined
  >(null);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${choosenRecipe}`,
    )
      .then((response) => response.json())
      .then((data) => {
        const listIngredients = [];
        for (let i = 1; i < 21; i++) {
          const ingredientField = `strIngredient${i}`;
          const measureField = `strMeasure${i}`;
          const itemToPush = {
            name: data.meals[0][ingredientField],
            measure: data.meals[0][measureField],
          };
          if (
            itemToPush.name !== null &&
            itemToPush.measure !== null &&
            itemToPush.name !== "" &&
            itemToPush.measure !== ""
          ) {
            listIngredients.push(itemToPush);
          }
        }
        setRecipesInfo({
          idMeal: data.meals[0].idMeal,
          strMeal: data.meals[0].strMeal,
          strMealThumb: data.meals[0].strMealThumb,
          strInstructions: data.meals[0].strInstructions,
          strArea: data.meals[0].strArea,
          strCategory: data.meals[0].strCategory,
          listIngredients: listIngredients,
        });
      });
  }, [choosenRecipe]);

  //   Attention au scroll sur le popup

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
        <section>
          {recipesInfo !== null && recipesInfo !== undefined && (
            <section>
              <div>
                <h1>{recipesInfo.strMeal}</h1>
                <img
                  src="https://img.cuisineaz.com/660x495/2018/09/18/i142588-gratin-pommes-de-terre-lardons.webp"
                  alt="La pomme de terre"
                  className="recipe-image"
                />
                <h2>Category : {recipesInfo.strCategory}</h2>
              </div>
              <div>
                <h2>Ingredient :</h2>
                {recipesInfo.listIngredients.map((detail) => (
                  <p key={detail.name}>
                    {detail.name} : {detail.measure}
                  </p>
                ))}
              </div>
              <div>
                <h2>Instructions </h2>
                <p>{recipesInfo.strInstructions}</p>
              </div>
            </section>
          )}
        </section>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Recipe;
