import "../styles/nav.css";
import { Link } from "react-router-dom";
import Logo from "../images/Cook'in-logo.png";

function Nav() {
  return (
    <section className="navbar">
      <Link to="/" className="about-link">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <p>
        <Link to="/about" className="about-link">
          About
        </Link>
      </p>
      <p>
        {/* ajout à favorite */}
        <Link to="/favorites" className="about-link">
          {" "}
          Favorite
        </Link>
      </p>
    </section>
  );
}

export default Nav;
