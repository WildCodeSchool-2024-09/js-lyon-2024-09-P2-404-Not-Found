import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../styles/question.css";
import "../styles/Ingredient.css";
import Chef from "../images/logo-chef.png";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  if (search === "Category") {
    navigate("/PageCategory");
  } else if (search === "Country") {
    navigate("/PageCountry");
  } else if (search === "Ingredient") {
    navigate("/PageIngredients");
  } else if (search === "Random") {
    navigate("/RandomResult");
  }

  return (
    <section className="Questioncontainer">
      <div className="inside-question">
        <div className="back-chef">
          <img src={Chef} alt="chef" className="image" />
        </div>
        <div>
          <h1>What are we eating today?</h1>
          <select
            onChange={(event) => setSearch(event.target.value)}
            name="search-type"
            id="search-select"
          >
            <option value="">Please choose search type</option>
            <option value="Category">Category</option>
            <option value="Country">Country</option>
            <option value="Ingredient">Ingredient</option>
            <option value="Random">Random</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Home;
