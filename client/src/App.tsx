import "./styles/App.css";
import Nav from "./components/Nav.tsx";
import PageIngredients from "./pages/PageIngredients.tsx";

function App() {
  return (
    <>
      <Nav />
      <main>
        <PageIngredients />
      </main>
    </>
  );
}

export default App;
