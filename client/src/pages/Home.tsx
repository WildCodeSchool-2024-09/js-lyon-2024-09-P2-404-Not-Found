import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../styles/question.css";
import "../styles/Ingredient.css";
import Chef from "../images/logo-chef.png";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  if (search === "Category") {
    navigate("/PreferedChoice/:type");
  } else if (search === "Country") {
    navigate("/PreferedChoice/:type");
  } else if (search === "Ingredient") {
    navigate("/PreferedChoice/:type");
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
            <option value="Category">
              <Link to="/PreferedChoice/:type">Category</Link>
            </option>
            <option value="Country">
              <Link to="/PreferedChoice/:type">Country</Link>
            </option>
            <option value="Ingredient">
              <Link to="/PreferedChoice/:type">Ingredient</Link>
            </option>
            <option value="Random">
              <Link to="/PreferedChoice/:type">Random</Link>
            </option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Home;
