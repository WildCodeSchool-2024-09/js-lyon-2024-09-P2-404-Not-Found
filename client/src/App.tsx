import "./styles/App.css";
import Category from "./components/Category.tsx";
import Country from "./components/Country.tsx";
import Ingredients from "./components/Ingredients.tsx";
import Nav from "./components/Nav.tsx";
import Result2 from "./components/Result2.tsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Category />
        <Country />
        <Ingredients />
        <Result2 />
      </main>
    </>
  );
}

export default App;
