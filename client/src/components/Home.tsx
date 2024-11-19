import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  if (search === "Category") {
    navigate("/PageCategory");
  } else if (search === "Country") {
    navigate("/PageCountry");
  } else if (search === "Ingredient") {
    navigate("/PageIngredient");
  } else if (search === "Random") {
    navigate("/PageRandom");
  }

  return (
    <section className="Questioncontainer">
      <label htmlFor="research-select">Please choose a search type</label>
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
    </section>
  );
}

export default Home;
