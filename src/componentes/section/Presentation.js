import style from "./Presentation.module.css";
import ButtonW from "../elements/ButtonW";
import ButtonG from "../elements/ButtonG";

const Presentation = () => {
  return (
    <div className={style.presentation} id="Presentation">
      <h4>
        <strong>Welcome to my Portfolio</strong>
      </h4>
      <h1>Hello, I'm Nathan De Souza</h1>
      <p>
        I was born on July 29, 2003 in Sao Paulo, Brazil. I'm a Junior Full
        Stack programmer with a passion for technology. <br />
        I have experience in webdevelopment with a variety of programming
        languages, frameworks, and design, including, <br />
        but not limited to, JavaScript, CSS, Python, React, and Node.js.
        <br />
        <br />
        I love solving complex problems and am always looking for new challenges
        to expand my skills. I believe that technology <br />
        has the power to change the world, and I am committed to being a part of
        that change. <br />
        <br />
        In addition, I have a B1 level in English, which allows me to
        communicate effectively in an international environment.
        <br />
        One of my dreams is to work abroad, as I believe it will provide me with
        valuable exposure to different cultures and working practices,
        <br />
        as well as allow me to contribute a diverse perspective. <br />
        <br />I look forward to the opportunity to discuss how I can contribute
        to your team or company Sincerely, Nathan
      </p>
      <br />

      <h2>Contact me</h2>
      <div className={style.Bu}>
        <ButtonW
          text="WhatsApp"
          link="https://wa.me/+5511983287480?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20você."
        />
        ㅤ ㅤ ㅤ
        <ButtonG
          text="Gmail"
          link="mailto:descontraindolive@gmail.com?subject=Assunto do Email&body=Corpo do Email"
        />
      </div>
    </div>
  );
};

export default Presentation;
