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
        <ToastContainer position="bottom-right" />
        {/* <ToastContainer /> gère l'affichage des toast et doit être present une fois dans le composant racine ou dans le composant qui affiche les toasts.  */}
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
