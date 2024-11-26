import "../styles/nav.css";
import { Link } from "react-router-dom";
import Logo from "../images/logofrigo.png";

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
        </section>
      </nav>
    </>
  );
}

export default Nav;
