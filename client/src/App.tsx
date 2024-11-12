import "./styles/App.css";

import About from "./components/About";
import Nav from "./components/Nav.tsx";
import Question from "./components/Question";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Question />
        <About />
      </main>
    </>
  );
}

export default App;
