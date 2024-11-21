import "../styles/nav.css";
import { Link } from "react-router-dom";
import Logo from "../images/Cook'in-logo.png";

function Nav() {
  return (
    <>
      <nav>
        <section className="navbar">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <p>
            <Link to="/about">About</Link>
          </p>
        </section>
      </nav>
    </>
  );
}

export default Nav;
