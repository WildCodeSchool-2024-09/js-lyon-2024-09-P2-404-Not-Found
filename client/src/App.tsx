import "./styles/App.css";

import Nav from "./components/Nav.tsx";
import Question from "./components/Question";
// ajout lea
//import React from "react";
import Result from "./components/Result.tsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Question />
        {/* <About /> */}
      </main>
      <div>
        <h1>recherche recettes </h1>
        {/* test du composant result*/}
        <Result />
      </div>
    </>
  );
}

export default App;
