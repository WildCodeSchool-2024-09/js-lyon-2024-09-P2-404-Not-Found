import "./styles/App.css";

import About from "./components/About";
import Nav from "./components/Nav.tsx";
import Question from "./components/Question";

function App() {
  return (
    <>
      <Nav />
      <Question />
      <About />
    </>
  );
}

export default App;
