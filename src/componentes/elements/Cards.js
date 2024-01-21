import style from "./Card.module.css"
import QuizB from "../image/projects/QuizB.svg"
import ButtonB from "../elements/buttonB"

const Card = ({img, title, tech, description, repositori, site}) => {
    return (
      <div className={style.card}>
        <a href={site}target="_blank">
          <img src={img} alt="image from website"  />
        </a>

        <section>
          <h3>{title}</h3>
          <p>
            <strong>Technology</strong> {tech}
          </p>
          <p> {description}</p>
          <ButtonB text="Acesse" link={repositori} />
        </section>
      </div>
    );
}

export default Card