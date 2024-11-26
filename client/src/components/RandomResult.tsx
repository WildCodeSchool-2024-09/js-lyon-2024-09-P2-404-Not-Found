import { useEffect, useState } from "react";
import "../styles/RandomResult.css";
import Chef from "../images/logo-chef.png";
import "../styles/Ingredient.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addToFavorites from "../utils/HandleFavorites";
// Typage
type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

function Result() {
  const [recipes, setRecipes] = useState<Meal[]>([]);

  useEffect(() => {
    const getRecipes = () => {
      const recipePromises = [];
      for (let i = 0; i < 4; i++) {
        recipePromises.push(
          fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((response) => response.json())
            .then((data) => data.meals[0]),
        );
      }

      Promise.all(recipePromises) //promesses resolues--> promiseall retourne une promesse unique pour toutes sous forme d'un tableau de résultat
        //quand toutes les promesses du tableau recipe promesses sont terminées.
        .then((meals) => setRecipes(meals)) //// renvoit ce tableau nommé meals contenant le resultat de chaque promesses. resultats =  chque appel à l'api( recettes ),
        // tableau meals passé à setrecipe pour actualiser l'ajout des recettes.
        .catch((error) => {
          console.error("Erreur de récupération des données recettes:", error); // si un appel à l'api echoue, promise.all est rejetté, on affiche un msg d'erreur.
        });
    };

    getRecipes();
  }, []);
  // fonction pour chercher la recette sur youtube
  function generateYouTubeSearchUrl(mealName: string): string {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(mealName)}+recipe`;
  }

  return (
    <>
      <section className="containerRandom">
        <h2> Random dishes </h2>
        <article className="containerimg">
          <img className="image" src={Chef} alt="Chef Icon" />
        </article>
      </section>
      <ToastContainer position="bottom-right" />
      {/* <ToastContainer /> gère l'affichage des toast et doit être present une fois dans le composant racine ou dans le composant qui affiche les toasts.  */}
      <div className="recipes-container">
        <div className="recipe-cards">
          {recipes.map((recipe) => (
            <div className="recipe-card" key={recipe.idMeal}>
              {/* affiche image de la recette  */}
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="recipe-image"
              />
              {/* affiche le nom de la recette  */}
              <h3>{recipe.strMeal}</h3>
              {/* boutton favorite */}
              <button type="button" onClick={() => addToFavorites(recipe)}>
                ❤️ Add to favorite
              </button>
              <a
                href={generateYouTubeSearchUrl(recipe.strMeal)}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-button"
              >
                ▶️𝚈𝚘𝚞𝚝𝚞𝚋𝚎
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Result;
