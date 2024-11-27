import "../styles/Result.css";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Recipe from "./Recipe";

interface ResultProps {
  selectedIngredient?: string;
  selectCountry?: string;
  selectCategory?: string;
}

interface RecipeProps {
  meals: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strIngredient: string;
    strMeasure: string;
    strInstructions: string;
    strArea: string;
  }[];
}

function Result({ selectedIngredient }: ResultProps) {
  const [resultedList, setResultedList] = useState<RecipeProps["meals"] | null>(
    null,
  );
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`,
    )
      .then((response) => response.json())
      .then((data: RecipeProps) => {
        setResultedList(data.meals);
      })
      .catch((err) => console.log(err));
  }, [selectedIngredient]);

  // Ceci pour seulement afficher la recette
  const [popup, setPopup] = useState(false);
  const [choosenRecipe, setChoosenRecipe] = useState<string>("");

  const handleClick = (idOfMeal: string) => {
    setChoosenRecipe(idOfMeal);
    setPopup(true);
  };

  return (
    <div className="result-container">
      {resultedList !== null &&
        resultedList.length > 0 &&
        resultedList.map((result) => (
          <div className="cards-container" key={result.idMeal}>
            <section className="card">
              <button type="button" onClick={() => handleClick(result.idMeal)}>
                <article className="sectionimage">
                  <img
                    src={result.strMealThumb}
                    alt={result.idMeal}
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
  );
}

export default Result;
