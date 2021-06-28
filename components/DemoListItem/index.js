import { Button } from "@material-ui/core";
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { demoSetCurrent } from "../../api/actions";
import style from "./DemoListItem.module.scss"

const DemoListItem = ({demo}) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(demoSetCurrent(demo))
    }

    return (
        <article className={style.demoItem}>
            <div className={style.demoItemThumbnail} style={{backgroundImage:`url("${demo.thumbnail_url}")`}}></div>
            <div className={style.demoItemDetails}>
                <h2>{demo.title}</h2>
                <p className={style.demoItemSubtitle}>{demo.subtitle}</p>
                <p className={style.demoItemDesc}>{demo.short_desc}</p>
                <Button color="primary"  onClick={handleClick} className={style.demoItemButton}>
                    <Link href={`/demos/${demo.slug}`}>VER DETALLE</Link>
                </Button> 
            </div>
        </article>
    );
}

export default DemoListItem;