import "../styles/Ingredient.css";
import "../styles/question.css";
import { useEffect, useState } from "react";
import Chef from "../images/logo-chef.png";

interface dataProps {
  meals: {
    idIngredient: number;
    strIngredient: string;
    strDescription: string;
    strType: string;
  }[];
}

function Ingredient() {
  const [selectedIngredient, setSelectedIngredient] = useState("");
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

  return (
    <>
      <section className="Questioncontainer">
        <div className="inside-question">
          <div className="outside">
            <img src={Chef} alt="chef" className="image" />
          </div>
          <section>
            <article className="title">
              <h2>Choose your main ingredient to cook :</h2>
            </article>
            <article className="anwser">
              {/* ternaire pour listIngredients=0 */}
              <select
                name="chooseIngredients"
                className="choice"
                value={selectedIngredient}
                onChange={(e) => setSelectedIngredient(e.target.value)}
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
    </>
  );
}

export default Ingredient;
