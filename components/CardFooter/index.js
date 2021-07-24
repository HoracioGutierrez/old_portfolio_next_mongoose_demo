import { useState } from "react"
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Menu from "@material-ui/core/Menu"
import MenuItem from '@material-ui/core/MenuItem'
import style from "./CardFooter.module.scss"
import { useDispatch } from 'react-redux';
import { chatOpen, darkToggle, showNotification } from '../../api/actions';
import useDark from "../../hooks/useDark";

const CardFooter = () => {

    const dispatch = useDispatch()
    const [anchorEl,setAnchorEl] = useState(null) 
    const dark = useDark()

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
            dispatch(showNotification("No se pudo copiar la url, vuelva a intentarlo!", "error"))
        }
    }

    const handleOpen = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleToggleDark = () => {
        dispatch(darkToggle())
        handleClose()
    }

    const handleOpenChat = () => {
        dispatch(chatOpen())
    }

    return (
        <footer className={`${style.cardFooter} ${dark ? style.dark : style.light }`}>
            <CardActions className={style.cardFooterContainer}>
                <div className={style.cardFooterDivider}>
                    <IconButton onClick={handleOpenChat} className={style.cardFooterButton}>
                        <Icon>send</Icon>
                    </IconButton>
                    <IconButton onClick={handleCopyUrl} className={style.cardFooterButton}>
                        <Icon>share</Icon>
                    </IconButton>
                </div>
                <Menu
                    keepMounted 
                    id="dark-menu"
                    getContentAnchorEl={null}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    transformOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                    <MenuItem onClick={handleToggleDark}>Modo Dark</MenuItem>
                </Menu>
                <IconButton onClick={handleOpen} className={style.cardFooterButton}>
                    <Icon>more_vert</Icon>
                </IconButton>
            </CardActions>
        </footer>
    );
}

export default CardFooter;