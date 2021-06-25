import Card from '@material-ui/core/Card';
import CardHeader from '../CardHeader';
import CardContent from '../CardContent';
import CardFooter from '../CardFooter';
import style from "./MainCard.module.scss"

const MainCard = ({children}) => {
    return (
        <Card raised={true} elevation={2} component="main" className={style.mainCard}>
            <CardHeader/>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter/>
        </Card>
    );
}

export default MainCard;