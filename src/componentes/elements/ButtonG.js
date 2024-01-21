import style from "./ButtonW.module.css";
import { SiGmail } from "react-icons/si";

const ButtonG = ({text,link }) => {
  return (
    <div>
      <a href={link} target="_blank">
        <button className={style.btn}>
          {text} <SiGmail size={20} />
        </button>
      </a>
    </div>
  );
};

export default ButtonG;
