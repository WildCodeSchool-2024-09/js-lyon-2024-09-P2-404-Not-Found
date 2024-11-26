import "./styles/App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>

      <main>
        <ToastContainer position="bottom-right" />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
