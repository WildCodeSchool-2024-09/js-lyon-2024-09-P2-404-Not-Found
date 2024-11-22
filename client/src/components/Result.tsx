import "../styles/Result2.css";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

interface Item {
  meals: { strMeal: string; strMealThumb: string; idMeal: string }[];
}

interface ResultProps {
  selectedIngredient?: string;
  selectCountry?: string;
  selectCategory?: string;
}

function Result2({ selectedIngredient }: ResultProps) {
  const [resultedList, setResultedList] = useState<Item["meals"] | null>(null);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`,
    )
      .then((response) => response.json())
      .then((data: Item) => {
        setResultedList(data.meals);
      })
      .catch((err) => console.log(err));
  }, [selectedIngredient]);

  return (
    <div>
      {resultedList !== null &&
        resultedList.length > 0 &&
        resultedList.map((result) => (
          <div className="cards-container" key={result.idMeal}>
            <section className="card">
              <article className="sectionimage">
                <img
                  src={result.strMealThumb}
                  alt={result.idMeal}
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
  );
}

export default Result2;
