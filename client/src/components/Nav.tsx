import "../styles/nav.css";
import Logo from "../images/logofrigo.png";

function Nav() {
  return (
    <>
      <section className="navigation">
        <img src={Logo} alt="logo" />
        <a href="./About.tsx">About</a>
      </section>
    </>
  );
}

export default Nav;
