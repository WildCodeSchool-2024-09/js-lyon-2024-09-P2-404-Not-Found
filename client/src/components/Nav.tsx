import "../styles/Nav.css";
import { Link } from "react-router-dom";
import Logo from "../images/Cook'in-logo.png";

function Nav() {
  return (
    <section className="navbar">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        {/* ajout à favorite */}
        <Link to="/favorites"> Favorite</Link>
      </p>
    </section>
  );
}

export default Nav;
