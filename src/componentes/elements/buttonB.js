import style from "./ButtonB.module.css"

const ButtonB = ({text, link}) => {
    return (
        <div>
            <a href={link} target="_blank">
            <button className={style.btn}>{text}</button>
            </a>
        </div>
    )
}

export default ButtonB