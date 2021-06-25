import Card from '@material-ui/core/Card';

const MainCard = ({children}) => {
    return (
        <main>
            <Card raised={true} elevation={2}>
                {children}
            </Card>
        </main>
    );
}

export default MainCard;