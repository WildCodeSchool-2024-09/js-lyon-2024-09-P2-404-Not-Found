// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

function Home() {
  // const [search, setSearch] = useState("");

  return (
    <div>
      {/* Redirection temporaire, il faudrait mettre le selecteur ici avec la redirection sur les pages concernées en servant de UseNavigate */}
      <label htmlFor="research-select">choose a search type</label>

      <select name="search type" id="search-select">
        <option value="">Please choose search type</option>
        <option value="Category">Category</option>
        <option value="Country">Country</option>
        <option value="Ingredient">Ingredient</option>
        <option value="Random">Random</option>
      </select>
    </div>
  );
}

export default Home;
