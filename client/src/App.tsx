import "./styles/App.css";
import { Outlet } from "react-router-dom";
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
