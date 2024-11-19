import "./styles/App.css";
import Nav from "./components/Nav.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
