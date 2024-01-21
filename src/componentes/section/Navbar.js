import style from "./Navbar.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/nav";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      {/* NAVBAR */}
      <ul>
        <li>
          <Nav.Link href="#Presentation">Presentation</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Skills">Skills</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Projects">Projects</Nav.Link>
        </li>
      </ul>

      {/* ICONS */}
      <ul>
        {/* INSTAGRAM PROFILE */}
        <li className={style.insta}>
          <a href="https://www.instagram.com/mano.ragnar/" target="_blank">
            <FaInstagram size={40} />
          </a>

          {/* GITHUB PROFILE */}
        </li>
        <li>
          <a href="https://github.com/NathanDeSouzaBrito" target="_blank">
            <FaGithub size={40} />
          </a>

          {/* LINKEDIN PROFILE */}
        </li>
        <li className={style.linkedin}>
          <a
            href="https://www.linkedin.com/in/nathan-de-souza-684126287/"
            target="_blank"
          >
            <FaLinkedin size={40} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
