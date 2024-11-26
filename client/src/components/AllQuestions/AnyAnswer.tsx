import "../../styles/Result2.css";
import { useEffect, useState } from "react";

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
