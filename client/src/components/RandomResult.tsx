import { useEffect, useState } from "react";
import "../styles/Result2.css";
import "../styles/RandomResult.css";
import Chef from "../images/logo-chef.png";

// Typage
type Meal = {
  idMeal: string; // identifiant unique
  strMeal: string; // nom de la recette
  strMealThumb: string; // lien de l'image
};

function Result() {
  const [recipes, setRecipes] = useState<Meal[]>([]); // Initialiser meal comme tableau vide

  useEffect(() => {
    const getRecipes = () => {
      //definition de la fonction qui va contenir les recettes
      const recipePromises = []; //Crée un tableau de resultats vide qui contient promesses
      for (let i = 0; i < 4; i++) {
        // créer une boucle effectuant 4 appels à l'API ( exécutée 4 fois, i=0, i=1, i=2, i=3--> affiche 4 plats)
        // Faire 3 appels pour obtenir 3 recettes
        recipePromises.push(
          // pousse dans un tableau de resultat recipesPromise les 4 appel fetchs= 4 promesses= 4 tours de boucle
          fetch("https://www.themealdb.com/api/json/v1/1/random.php") // fetch retourne une promesse
            .then((response) => response.json()) //convertir la réponse en json
            .then((data) => data.meals[0]), // Récupérer seulement la premiere re cette du tableau meal
        );
      }

      // Attendre que toutes les promesses soient résolues et mettre à jour `recipes`
      // prend en entée un tableau de promesse meals ( 4 promesses) et ne renvoit en sortie que une promesse lorsque toutes les promesses requêtes sont résolues.

      // si une des promesses echoue alors on affiche le message d'erreur et promise all est rejetté.
      //promiseall : -lancer des appels a api en parrallèle, attendre que tous les appels soient réussis avant de continuer, obtenir un seul tableau à partir des plusieurs appels.
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
  //   explications:la fonction generateurlyoutube...  a en paramètre le nom d'un plat, typé string.
  //   -https://www.youtube.com/results?search_query= --> base d'url pour recherche youtube
  // -${encodeURIComponent(mealName)} --> fonction qui transforme le nom du plat en une chaine de caractères, sans espaces ou caractères spéciaux : ex:convertit les espaces en + ( spagetti carbo=> spagetti+carbo)
  // -concatène recipe pour chercher des recettes spécifiques sur youtube

  //   console.log(recipes);
  // return (
  //   <>
  //     <section className="containerRandom">
  //       <h2> Random dishes </h2>
  //       <article className="containerimg">
  //         <img className="image" src={Chef} alt="Chef Icon" />
  //       </article>
  //     </section>
  //     <div className="recipes-container">
  //       <div className="recipe-cards">
  //         {recipes.map((recipe) => (
  //           <div className="recipe-card" key={recipe.idMeal}>
  //             <img
  //               src={recipe.strMealThumb}
  //               alt={recipe.strMeal}
  //               className="recipe-image"
  //             />
  //             <h3>{recipe.strMeal}</h3>
  //             {/* button reliant vers une video youtube  */}
  //             {recipe.strMeal && (
  //             <a
  //               href={`https://www.youtube.com/results?search_query=${encodeURIComponent(recipe.strMeal)+recipe`}
  //               target="_blank"
  //               rel='noopener noreferrer"
  //               className="recipe-boutton"
  //             >
  //             Seach on youtube
  //              </a>
  //               )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </>
  // );
  //               }

  return (
    <>
      <section className="containerRandom">
        <h2> Random dishes </h2>
        <article className="containerimg">
          <img className="image" src={Chef} alt="Chef Icon" />
        </article>
      </section>
      <div className="recipes-container">
        <section>
          <div className="recipe-cards">
            {recipes.map((recipe) => (
              <div className="cards-container" key={recipe.idMeal}>
                <section className="card">
                  <div className="sectionimage">
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="card-image"
                    />
                  </div>
                  <article className="sectiontexte">
                    <h3>{recipe.strMeal}</h3>
                  </article>
                  <a
                    href={generateYouTubeSearchUrl(recipe.strMeal)}
                    //   boutton recherche youtube explications : appelle la fonction qui
                    // genere l'url en lui donnant à manger le nom du plat.
                    target="_blank" //ouvre un nouvel onglet dans le navigateur
                    rel="noopener noreferrer" //pour la sécurité
                    className="recipe-button"
                  >
                    ▶️𝚈𝚘𝚞𝚝𝚞𝚋𝚎
                  </a>
                  {/* boutton de rechercher vers youtube à afficher à chaque card 
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                  recipe.strMeal,
                )}+recipe`}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-button"
              >
                Search on YouTube
              </a> */}
                </section>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Result;
