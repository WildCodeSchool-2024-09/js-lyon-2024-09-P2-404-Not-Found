import "../styles/nav.css";
import { Link } from "react-router-dom";
import Logo from "../images/logofrigo.png";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <p>
          <Link to="/about">About</Link>
        </p>
      </nav>
    </>
  );
}

export default Nav;
