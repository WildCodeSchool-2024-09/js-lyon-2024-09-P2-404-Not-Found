import "./styles/App.css";
import Nav from "./components/Nav.tsx";
import Question from "./components/Question.tsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Question />
      </main>
    </>
  );
}

export default App;
