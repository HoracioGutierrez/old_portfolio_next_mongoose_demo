import { Collapse } from "@material-ui/core";
import { useSelector } from "react-redux";

const CardContent = ({children}) => {

    const open = useSelector(({card_open})=>card_open)

    return (
        <Collapse in={!open}>
            <main>
                {children}
            </main>
        </Collapse>
    );
}

export default CardContent;