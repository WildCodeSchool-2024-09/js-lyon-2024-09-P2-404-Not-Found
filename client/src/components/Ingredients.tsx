import "../styles/Ingredient.css";
import "../images/ingredient-alimentaire.jpg";
// import { useState } from "react";

function Ingredient() {
  //   const [search, setSearch] = useState("");
  return (
    <>
      <section className="Questioncontainer">
        <img src="../images/ingredient-alimentaire.jpg" alt="ingredients" />
        <section>
          <article className="title">
            <h2>Is there anything in your fridge that you want to cook ?</h2>
          </article>
          <article className="anwser">
            <input type="text" />
          </article>
        </section>
      </section>
    </>
  );
}

export default Ingredient;
