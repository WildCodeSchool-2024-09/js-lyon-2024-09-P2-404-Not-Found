// import Ingredient from "../components/Ingredients";
// import Result2 from "../components/Result2";
import "../styles/Ingredient.css";
import "../styles/question.css";
import { useEffect, useState } from "react";
import Chef from "../images/logo-chef.png";
import "../styles/Result2.css";

interface dataProps {
  meals: {
    idIngredient: number;
    strIngredient: string;
    strDescription: string;
    strType: string;
  }[];
}

interface Item {
  meals: { strMeal: string; strMealThumb: string; idMeal: string }[];
}

function PageIngredients() {
  const [listIngredients, setListIngredients] = useState<
    dataProps["meals"] | null
  >(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((response) => response.json())
      .then((data: dataProps) => {
        setListIngredients(data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  //   Début = A garder sur cette page
  // A passer en props a Result2.
  const [selectedIngredient, setSelectedIngredient] = useState<string>();

  // A passer en props a Ingredients.
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIngredient(event.target.value);
  };
  //   Fin = A garder sur cette page

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

  //   console.log(resultedList);
  return (
    <>
      <section className="Questioncontainer">
        <div className="inside-question">
          <div className="outside">
            <img src={Chef} alt="chef" className="image" />
          </div>
          <section>
            <article>
              <h2>Choose your main ingredient to cook :</h2>
            </article>
            <article>
              <select
                name="chooseIngredients"
                className="choice"
                value={selectedIngredient}
                onChange={handleChange}
              >
                {listIngredients !== null &&
                  listIngredients.length > 0 &&
                  listIngredients.map((ingredient) => (
                    <option
                      key={ingredient.idIngredient}
                      value={ingredient.strIngredient}
                    >
                      {ingredient.strIngredient}
                    </option>
                  ))}
              </select>
            </article>
          </section>
        </div>
      </section>
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
    </>
  );
}

export default PageIngredients;
