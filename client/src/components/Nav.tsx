import "../styles/nav.css";
import { Link } from "react-router-dom";
import Logo from "../images/logofrigo.png";

function Nav() {
  return (
    <>
      <section className="navigation">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <p>
          <Link to="/about">About</Link>
        </p>
      </section>
    </>
  );
}

export default Nav;
