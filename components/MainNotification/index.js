import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../../api/actions';

const MainNotification = () => {

    const {open,text,type,time} = useSelector(({notification})=>notification)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(hideNotification())
    }

    return (
        <Snackbar open={open} autoHideDuration={time} onClose={handleClose}>
            <Alert severity={type}>{text}</Alert>
        </Snackbar>
    );
}

export default MainNotification;