import "../../styles/Result.css";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Recipe from "../Features/Recipe";

interface Item {
  meals: { strMeal: string; strMealThumb: string; idMeal: string }[];
}

interface ResultProps {
  selectedType?: string;
  selectCountry?: string;
  selectCategory?: string;
  type?: string;
}

function AnyAnswer({ selectedType, type }: ResultProps) {
  const [resultedList, setResultedList] = useState<Item["meals"] | null>(null);

  function homeChoice() {
    if (type === "Country") {
      return "a";
    }
    if (type === "Ingredient") {
      return "i";
    }
    if (type === "Category") {
      return "c";
    }
  }

  const homeSelection = homeChoice();

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${homeSelection}=${selectedType}`,
    )
      .then((response) => response.json())
      .then((data: Item) => {
        setResultedList(data.meals);
      })
      .catch((err) => console.log(err));
  }, [selectedType, homeSelection]);

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
              <button
                type="button"
                onClick={() => handleClick(result.idMeal)}
                className="recipe-btn"
              >
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

export default AnyAnswer;
