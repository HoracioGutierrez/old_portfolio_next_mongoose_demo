import { Collapse } from "@material-ui/core";
import { useSelector } from "react-redux";
import CardContent from '@material-ui/core/CardContent';
import style from "./CardContent.module.scss"

export default  ({children}) => {

    const open = useSelector(({card_open})=>card_open)

    return (
        <Collapse in={!open}>
            <CardContent component="main" className={style.cardContent}>
                {children}
            </CardContent>
        </Collapse>
    );
}