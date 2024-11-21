import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav.tsx";
import Result2 from "./components/Result2.tsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
        <Result2 />
      </main>
    </>
  );
}

export default App;
