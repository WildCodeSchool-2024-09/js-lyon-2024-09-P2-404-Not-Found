import "./styles/App.css";
import Category from "./components/Category.tsx";
import Nav from "./components/Nav.tsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Category />
      </main>
    </>
  );
}

export default App;
