import "../styles/Result.css";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Chef from "../images/logo-chef.png";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addToFavorites from "../utils/HandleFavorites";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

function Result() {
  const [results, setresults] = useState<Meal[]>([]);

  useEffect(() => {
    const getresults = () => {
      const resultPromises = [];
      for (let i = 0; i < 4; i++) {
        resultPromises.push(
          fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((response) => response.json())
            .then((data) => data.meals[0]),
        );
      }
      // si une des promesses echoue alors on affiche le message d'erreur et promise all est rejetté.
      //promiseall : -lancer des appels a api en parrallèle, attendre que tous les appels soient réussis avant de continuer, obtenir un seul tableau à partir des plusieurs appels.
      Promise.all(resultPromises) //promesses resolues--> promiseall retourne une promesse unique pour toutes sous forme d'un tableau de résultat
        //quand toutes les promesses du tableau result promesses sont terminées.
        .then((meals) => setresults(meals))

        .catch((error) => {
          console.error("Erreur de récupération des données recettes:", error);
        });
    };

    getresults();
  }, []);

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
      <ToastContainer position="bottom-right" />
      {/* <ToastContainer /> gère l'affichage des toast et doit être present une fois dans le composant racine ou dans le composant qui affiche les toasts.  */}
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
                {/* boutton favorite */}
                <button type="button" onClick={() => addToFavorites(result)}>
                  ❤️ Add to favorite
                </button>
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
