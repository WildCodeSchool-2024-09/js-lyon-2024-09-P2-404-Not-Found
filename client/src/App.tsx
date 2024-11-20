import "./styles/App.css";
import Nav from "./components/Nav.tsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
