import style from "./ButtonW.module.css";
import { FaWhatsapp } from "react-icons/fa";

const ButtonW = ({text,link }) => {
  return (
    <div>
      <a href={link} target="_blank">
        <button className={style.btn}>
          {text}<FaWhatsapp size={20} />
        </button>
      </a>
    </div>
  );
};

export default ButtonW;
