import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import style from "./CardFooter.module.scss"
import { useDispatch } from 'react-redux';
import { showNotification } from '../../api/actions';

const CardFooter = () => {

    const dispatch = useDispatch()

    const handleCopyUrl = () => {
        try {
            const el = document.createElement("textarea")
            el.value = location.href
            document.body.appendChild(el)
            el.select()
            document.execCommand("copy")
            document.body.removeChild(el)
            dispatch(showNotification("Se copio la url!"))
        } catch (error) {
            dispatch(showNotification("No se pudo copiar la url, vuelva a intentarlo!","error"))
        }
    }

    return (
        <footer className={style.cardFooter}>
            <CardActions className={style.cardFooterContainer}>
                <div className={style.cardFooterDivider}>
                    <IconButton className={style.cardFooterButton}>
                        <Icon>send</Icon>
                    </IconButton>
                    <IconButton onClick={handleCopyUrl} className={style.cardFooterButton}>
                        <Icon>share</Icon>
                    </IconButton>
                </div>
                <IconButton className={style.cardFooterButton}>
                    <Icon>more_vert</Icon>
                </IconButton>
            </CardActions>
        </footer>
    );
}

export default CardFooter;