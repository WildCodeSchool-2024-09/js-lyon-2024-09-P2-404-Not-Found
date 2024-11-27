import "../styles/Nav.css";
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
            {/* ajout à favorite */}
            <Link to="/favorites"> Favorite</Link>
          </p>

          <div>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div>
            <p>
              <Link to="/about" className="about-link">
                About
              </Link>
            </p>
          </div>
        </section>
      </nav>
    </>
  );
}

export default Nav;
