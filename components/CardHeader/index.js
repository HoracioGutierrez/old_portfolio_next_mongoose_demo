import useDark from "../../hooks/useDark";
import CardAvatar from "../CardAvatar";
import CardTitle from "../CardTitle";
import SocialNavBar from "../SocialNavBar";
import style from "./CardHeader.module.scss"

const CardHeader = () => {

    const dark = useDark()

    return (
        <header className={style.cardHeader}>
            <div id="overlay" className={`${style.overlay} ${dark ? style.dark : style.light }`}></div>
            <button className={`material-icons ${style.button}`}>close</button>
            <CardAvatar />
            <CardTitle />
            <SocialNavBar />
        </header>
    );
}

export default CardHeader;