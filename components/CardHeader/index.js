import useDark from "../../hooks/useDark";
import CardAvatar from "../CardAvatar";
import CardTitle from "../CardTitle";
import SocialNavBar from "../SocialNavBar";
import style from "./CardHeader.module.scss";
import Collapse from '@material-ui/core/Collapse';
import { useDispatch, useSelector } from "react-redux";
import { cardToggle } from "../../api/actions";

const CardHeader = () => {

    const dark = useDark()
    const open = useSelector(({card_open})=>card_open)
    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(cardToggle())
    }


    return (
        <header className={style.cardHeader}>
            <div id="overlay" className={`${style.overlay} ${dark ? style.dark : style.light }`}></div>
            <Collapse in={!open}>
                <button onClick={handleToggle} className={`material-icons ${style.button}`}>close</button>
            </Collapse>
            <CardAvatar />
            <CardTitle />
            <SocialNavBar />
            <Collapse in={open}>
                <button id="profile-toggler" onClick={handleToggle} className={style.toggler}>VER PERFIL</button>
            </Collapse>
        </header>
    );
}

export default CardHeader;