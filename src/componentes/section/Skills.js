import style from "./Skills.module.css"
import javascript from "../image/skills/javascript.svg"
import react from "../image/skills/react.svg"
import css from "../image/skills/css.svg"
import html from "../image/skills/html.svg"

const Skills = () => {
  return (
    <div className={style.skill} id="Skills">
      <h1> Skills</h1>
      <p>Get to know one of my skills</p>
      <div>
        <img className={style.html} src={html} />
        <img className={style.css} src={css} />
        <img className={style.js} src={javascript} />
        <img className={style.react} src={react} />
      </div>
    </div>
  );
};

export default Skills;
