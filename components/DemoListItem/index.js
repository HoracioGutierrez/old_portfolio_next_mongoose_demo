import { Button } from "@material-ui/core";
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { demoSetCurrent } from "../../api/actions";
import style from "./DemoListItem.module.scss";
import moment from "moment";


moment.locale("es",{
    months : 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_')
})


const DemoListItem = ({demo}) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(demoSetCurrent(demo))
    }

    const formatedDate = (date) => {
        return moment(date).format("Do [de] MMMM, YYYY")
    }

    return (
        <article className={style.demoItem}>
            <div className={style.demoItemThumbnail} style={{backgroundImage:`url("${demo.thumbnail_url}")`}}></div>
            <div className={style.demoItemDetails}>
                <h2>{demo.title}</h2>
                <p className={style.demoItemSubtitle}>{demo.subtitle}</p>
                <p className={style.demoItemDate}>Fecha de creación : {formatedDate(demo.createdAt)}</p>
                <p className={style.demoItemDesc}>{demo.short_desc}</p>
                <Button color="primary"  onClick={handleClick} className={style.demoItemButton}>
                    <Link href={`/demos/${demo.slug}`} as={`/demos/${demo.slug}`}>VER DETALLE</Link>
                </Button> 
            </div>
        </article>
    );
}

export default DemoListItem;