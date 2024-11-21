import "./styles/App.css";

import { Outlet } from "react-router-dom"; //2/importer le outlet dans app
import Category from "./components/Category.tsx";
import Country from "./components/Country.tsx";
import Ingredient from "./components/Ingredients.tsx";
import Nav from "./components/Nav.tsx";

// import { Router } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
        <Ingredient />
        <Country />
        <Category />
        {/* 3) outlet posé la va chercher les enfants de app déclarés dans le router */}
      </main>
    </>
  );
}

export default App;
