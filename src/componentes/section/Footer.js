import style from "./Footer.module.css"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.footer}>
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
      <p>@gmail.com</p>
      <p> Nathan De Souza © 2024</p>
    </div>
  );
};

export default Footer;
