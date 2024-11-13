import "./styles/App.css";
import Ingredients from "./components/Ingredients";
import Nav from "./components/Nav.tsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Ingredients />
      </main>
    </>
  );
}

export default App;
