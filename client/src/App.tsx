import "./styles/App.css";
import Nav from "./components/Nav.tsx";
import Ingredients from "./components/Ingredients.tsx";
import Result2 from "./components/Result2.tsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Ingredients />
        <Result2 />
      </main>
    </>
  );
}

export default App;
