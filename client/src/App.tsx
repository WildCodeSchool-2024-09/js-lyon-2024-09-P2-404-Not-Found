import "./styles/App.css";
import Category from "./components/Category.tsx";
import Country from "./components/Country.tsx";
import Nav from "./components/Nav.tsx";
import PageIngredients from "./pages/PageIngredients.tsx";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Category />
        <Country />
        <PageIngredients />
      </main>
    </>
  );
}

export default App;
