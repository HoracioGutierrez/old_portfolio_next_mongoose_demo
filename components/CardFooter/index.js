import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import style from "./CardFooter.module.scss"

const CardFooter = () => {
    return (
        <footer className={style.cardFooter}>
            <CardActions className={style.cardFooterContainer}>
                <div className={style.cardFooterDivider}>
                    <IconButton className={style.cardFooterButton}>
                        <Icon>send</Icon>
                    </IconButton>
                    <IconButton className={style.cardFooterButton}>
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