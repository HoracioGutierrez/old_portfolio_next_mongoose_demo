import style from "./CardTitle.module.scss"

const CardTitle = () => {
    return (
        <div id="card-container-title" className={style.cardTitle}>
            <h1>Horacio Gutierrez</h1>
            <h2>Programador Web</h2>
        </div>
    )
}

export default CardTitle