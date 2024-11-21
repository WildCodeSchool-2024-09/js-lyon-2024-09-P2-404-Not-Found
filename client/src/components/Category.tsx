import { useEffect, useState } from "react";
import Chef from "../images/logo-chef.png";

import "../styles/question.css";

interface categoryProps {
  meals: {
    strCategory: string;
  }[];
}

function Category() {
  const [category, setCategory] = useState<categoryProps["meals"] | null>(null);
  const [selectCategory, setSelectCategory] = useState("");
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => response.json())
      .then((data: categoryProps) => {
        setCategory(data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="Questioncontainer">
      <div className="inside-question">
        <div className="outside">
          <img src={Chef} alt="chef" className="image" />
        </div>
        <section>
          <article>
            <h2>Choose a category</h2>
          </article>
          <article className="anwser">
            <select
              className="choice"
              name="category"
              id="category"
              value={selectCategory}
              onChange={(e) => setSelectCategory(e.target.value)}
            >
              <option value="" disabled>
                Please choose your Category 🎯
              </option>
              {/* fin */}
              {category !== null &&
                category.length > 0 &&
                category.map((element) => (
                  <option value={element.strCategory} key={element.strCategory}>
                    {element.strCategory}
                  </option>
                ))}
            </select>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Category;
