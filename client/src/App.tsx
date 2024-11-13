import "./styles/App.css";

import Nav from "./components/Nav.tsx";
import Question from "./components/Question";
import Country from "./components/Country.tsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Question />
        <Country />
      </main>
    </>
  );
}

export default App;
