import style from "./Projects.module.css"
import ButtonB from "../elements/buttonB"
import Card  from "../elements/Cards";
import QuizB from "../image/projects/QuizB.svg";

const Projects = () => {
  return (
    <div className={style.projects} id="Projects">
      {/* CARDS */}
      <h1> These are my Projects</h1>

      {/* =======Card of Bible Quiz======= */}
      <Card
        img={QuizB}
        title="Bible Quiz"
        tech="HTML, CSS AND JS"
        description="Website of a Bible quiz (not 100% ready, but it is working)"
        repositori="https://github.com/NathanDeSouzaBrito/Quiz-b-blico"
        site="https://nathandesouzabrito.github.io/Quiz-b-blico/"
      />

      {/* 
      <Card />


      <Card /> */}

      <ButtonB
        text="Go to My Repository"
        link="https://github.com/NathanDeSouzaBrito?tab=repositories"
      />
    </div>
  );
};

export default Projects;