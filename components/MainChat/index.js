import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { chatChange, chatClose } from '../../api/actions';
import style from "./MainChat.module.scss"

const MainChat = () => {

    const {open,name,email,message} = useSelector(({chat}) => chat);
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(chatClose())
    }

    const handleChange = (e) => {
        const target = e.target.id
        const value = e.target.value
        dispatch(chatChange(target, value))
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle> Enviar Mensaje </DialogTitle>
            <DialogContent>
                <DialogContentText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae veritatis molestias architecto eos doloremque! Assumenda officia sint tempore deserunt?</DialogContentText>
            </DialogContent>
            <div className={style.chatForm}>
                <TextField onChange={handleChange} autoFocus margin="normal" id="name" type="text" label="Nombre" fullWidth value={name}/>

                <TextField onChange={handleChange} autoFocus margin="normal" id="email" type="emai" label="Email" fullWidth value={email}/>

                <TextField onChange={handleChange} autoFocus margin="normal" id="message" type="text" label="Mensaje" fullWidth multiline rows={4} value={message}/>
            </div>
            <DialogActions>
                <Button color="primary" onClick={handleClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default MainChat;