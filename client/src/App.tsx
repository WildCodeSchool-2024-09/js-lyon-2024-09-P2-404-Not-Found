import "./styles/App.css";
import Nav from "./components/Nav.tsx";
import Question from "./components/Question";
import Result2 from "./components/Result2.tsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Question />
        <Result2 />
      </main>
    </>
  );
}

export default App;
