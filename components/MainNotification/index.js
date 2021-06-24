import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const MainNotification = () => {
    return (
        <Snackbar open={false}>
            <Alert severity="info">Test Mensaje</Alert>
        </Snackbar>
    );
}

export default MainNotification;