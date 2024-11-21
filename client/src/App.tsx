import "./styles/App.css";
import { Outlet } from "react-router-dom"; //2/importer le outlet dans app
import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
        {/* 3) outlet posé la va chercher les enfants de app déclarés dans le router */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
