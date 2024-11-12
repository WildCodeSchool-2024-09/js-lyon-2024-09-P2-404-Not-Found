import "../styles/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <section>
        <Link to="/">
          <img
            src="https://static.vecteezy.com/ti/vecteur-libre/p1/5461906-mignon-ours-endormi-logo-design-gratuit-vectoriel.jpg"
            alt="logo"
          />
        </Link>

        <p>
          <Link to="/about">About</Link>
        </p>
      </section>
    </>
  );
}

export default Nav;
