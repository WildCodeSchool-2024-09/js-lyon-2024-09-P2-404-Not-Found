import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
        <ToastContainer position="bottom-right" />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
