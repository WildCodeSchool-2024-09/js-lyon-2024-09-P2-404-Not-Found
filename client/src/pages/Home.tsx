import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Global.css";
import Chef from "../images/logo-chef.png";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  if (search === "Category") {
    navigate("/PreferedChoice/Category");
  } else if (search === "Country") {
    navigate("/PreferedChoice/Country");
  } else if (search === "Ingredient") {
    navigate("/PreferedChoice/Ingredient");
  } else if (search === "Random") {
    navigate("/RandomResult");
  }

  return (
    <section className="Questioncontainer">
      <div className="inside-question">
        <div className="back-chef">
          <img src={Chef} alt="chef" className="chef-img" />
        </div>
        <div>
          <h1>What are we eating today?</h1>
          <select
            onChange={(event) => setSearch(event.target.value)}
            name="search-type"
            className="search-select"
          >
            <option value="" key="Home">
              Please choose search type
            </option>
            <option value="Category" key="Category">
              Category
            </option>
            <option value="Country" key="Country">
              Country
            </option>
            <option value="Ingredient" key="Ingredient">
              Ingredient
            </option>
            <option value="Random">Random</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Home;
