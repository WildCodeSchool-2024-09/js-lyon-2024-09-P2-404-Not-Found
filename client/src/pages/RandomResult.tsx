import "../styles/Result.css";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Recipe from "../components/Features/Recipe";
import Chef from "../images/logo-chef.png";

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

  // Ceci pour seulement afficher la recette
  const [popup, setPopup] = useState(false);
  const [choosenRecipe, setChoosenRecipe] = useState<string>("");

  const handleClick = (idOfMeal: string) => {
    setChoosenRecipe(idOfMeal);
    setPopup(true);
  };

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
              <button
                type="button"
                onClick={() => handleClick(result.idMeal)}
                className="recipe-btn"
              >
                <article className="sectionimage">
                  <img
                    src={result.strMealThumb}
                    alt={result.strMeal}
                    className="card-image"
                  />
                </article>
              </button>
              <article className="sectiontexte">
                <h3>{result.strMeal}</h3>
                <Rating fillColor="#FFA500" emptyColor="#ffffffcf" />
              </article>
            </section>
          </div>
        ))}
        {popup === true && (
          <Recipe
            trigger={popup}
            setTrigger={setPopup}
            choosenRecipe={choosenRecipe}
          />
        )}
      </div>
    </>
  );
}

export default Result;
