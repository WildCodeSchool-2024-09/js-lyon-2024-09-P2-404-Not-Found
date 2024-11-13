import { useEffect, useState } from "react";
import "../styles/Result.css";

// Typage
type Meal = {
  idMeal: string; // identifiant unique
  strMeal: string; // nom de la recette
  strMealThumb: string; // lien de l'image
};

function Result() {
  const [recipes, setRecipes] = useState<Meal[]>([]); // Initialiser recipes comme tableau vide

  useEffect(() => {
    const getRecipes = () => {
      const recipePromises = [];
      for (let i = 0; i < 3; i++) {
        // Faire 3 appels pour obtenir 3 recettes
        recipePromises.push(
          fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((response) => response.json())
            .then((data) => data.meals[0]), // Récupérer seulement l'objet de la recette
        );
      }

      // Attendre que toutes les promesses soient résolues et mettre à jour `recipes`
      Promise.all(recipePromises)
        .then((meals) => setRecipes(meals))
        .catch((error) => {
          console.error("Erreur de récupération des données recettes:", error);
        });
    };

    getRecipes();
  }, []);

  return (
    <div className="recipes-container">
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.idMeal}>
            <h2>Idea for a dish to cook 💡</h2>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="recipe-image"
            />
            <h3>{recipe.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
