import "../../styles/Result2.css";
import { useEffect, useState } from "react";

interface Item {
  meals: { strMeal: string; strMealThumb: string; idMeal: string }[];
}

interface ResultProps {
  selectedIngredient?: string;
  selectCountry?: string;
  selectCategory?: string;
}

function AnyAnswer({ selectedIngredient }: ResultProps) {
  const [resultedList, setResultedList] = useState<Item["meals"] | null>(null);

  // if (selectCountry !=== undefined) {
  //   return `filter.php?a=${selectCountry}`
  // }
  // if (selectCategory !=== undefined) {
  //   return `filter.php?c=${selectCategory}`
  // }

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
              </article>
            </section>
          </div>
        ))}
    </div>
  );
}

export default AnyAnswer;