import "../styles/Result.css";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Chef from "../images/logo-chef.png";

// Typage
type Meal = {
  idMeal: string; // identifiant unique
  strMeal: string; // nom de la recette
  strMealThumb: string; // lien de l'image
};

function Result() {
  const [results, setresults] = useState<Meal[]>([]); // Initialiser meal comme tableau vide

  useEffect(() => {
    const getresults = () => {
      //definition de la fonction qui va contenir les recettes
      const resultPromises = []; //Crée un tableau de resultats vide qui contient promesses
      for (let i = 0; i < 4; i++) {
        // créer une boucle effectuant 4 appels à l'API ( exécutée 4 fois, i=0, i=1, i=2, i=3--> affiche 4 plats)
        // Faire 3 appels pour obtenir 3 recettes
        resultPromises.push(
          // pousse dans un tableau de resultat resultsPromise les 4 appel fetchs= 4 promesses= 4 tours de boucle
          fetch("https://www.themealdb.com/api/json/v1/1/random.php") // fetch retourne une promesse
            .then((response) => response.json()) //convertir la réponse en json
            .then((data) => data.meals[0]), // Récupérer seulement la premiere re cette du tableau meal
        );
      }

      // Attendre que toutes les promesses soient résolues et mettre à jour `results`
      // prend en entée un tableau de promesse meals ( 4 promesses) et ne renvoit en sortie que une promesse lorsque toutes les promesses requêtes sont résolues.

      // si une des promesses echoue alors on affiche le message d'erreur et promise all est rejetté.
      //promiseall : -lancer des appels a api en parrallèle, attendre que tous les appels soient réussis avant de continuer, obtenir un seul tableau à partir des plusieurs appels.
      Promise.all(resultPromises) //promesses resolues--> promiseall retourne une promesse unique pour toutes sous forme d'un tableau de résultat
        //quand toutes les promesses du tableau result promesses sont terminées.
        .then((meals) => setresults(meals)) //// renvoit ce tableau nommé meals contenant le resultat de chaque promesses. resultats =  chque appel à l'api( recettes ),
        // tableau meals passé à setresult pour actualiser l'ajout des recettes.
        .catch((error) => {
          console.error("Erreur de récupération des données recettes:", error); // si un appel à l'api echoue, promise.all est rejetté, on affiche un msg d'erreur.
        });
    };

    getresults();
  }, []);
  // fonction pour chercher la recette sur youtube

  // function generateYouTubeSearchUrl(mealName: string): string {
  //   return `https://www.youtube.com/results?search_query=${encodeURIComponent(mealName)}+result`;
  // }
  //   explications:la fonction generateurlyoutube...  a en paramètre le nom d'un plat, typé string.
  //   -https://www.youtube.com/results?search_query= --> base d'url pour recherche youtube
  // -${encodeURIComponent(mealName)} --> fonction qui transforme le nom du plat en une chaine de caractères, sans espaces ou caractères spéciaux : ex:convertit les espaces en + ( spagetti carbo=> spagetti+carbo)
  // -concatène result pour chercher des recettes spécifiques sur youtube

  return (
    <>
      <section className="Questioncontainer">
        <div className="inside-question">
          <div className="outside">
            <img className="image" src={Chef} alt="Chef Icon" />
          </div>
          <article>
            <h2> Random dishes </h2>
          </article>
        </div>
      </section>
      <div className="result-container">
        {results.map((result) => (
          <div className="cards-container" key={result.idMeal}>
            <section className="card">
              <article className="sectionimage">
                <img
                  src={result.strMealThumb}
                  alt={result.strMeal}
                  className="card-image"
                />
              </article>
              <article className="sectiontexte">
                <h3>{result.strMeal}</h3>
                <Rating fillColor="#FFA500" emptyColor="#ffffffcf" />
              </article>
            </section>
          </div>
        ))}
      </div>
    </>
  );
}

export default Result;
