import style from "./DemoDetails.module.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Button from '@material-ui/core/Button';
import Link from "next/link"
import Head from 'next/head'
import moment from "moment";
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendLike, sendUnlike } from "../../api/actions";
import axios from "axios";


moment.locale("es", {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_')
})

const DemoDetails = ({ demo }) => {

    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const formatedDate = (date) => {
        return moment(date).format("Do [de] MMMM, YYYY")
    }

    const handleOpenTooptip = () => {
        setOpen(true)
    }

    const handleCloseTooltip = () => {
        setOpen(false)
    }

    const handleLike = () => {
        axios
            .post(`/api/like`,{slug:demo.slug})
            .then(({ data: res }) => {
                console.log(res)
                dispatch(sendLike())
            })
            .catch(error=>{
                console.log(error)
            })

    }

    const handleUnlike = () => {
        dispatch(sendUnlike())
    }

    return (
        <>
            <Head>
                <title>HG - Demos</title>
            </Head>
            <h2 className={style.title}>{demo.title}</h2>
            <h3 className={style.subtitle}>{demo.subtitle}</h3>
            <p className={style.date}>Fecha de creación : {formatedDate(demo.createdAt)}</p>
            <div id="detail-image" className={style.image} style={{ backgroundImage: `url("/${demo.image_url}")` }}></div>
            <nav className={style.nav}>
                <div onMouseEnter={handleOpenTooptip} onMouseLeave={handleCloseTooltip}>
                    <Tooltip title={`Dificultad : ${demo.difficulty}`} open={open}>
                        <Rating value={demo.difficulty} readOnly />
                    </Tooltip>
                </div>
                <Button className={style.button} color="primary" variant="contained">
                    <Link href={`/playground/${demo.slug}`}>
                        ABRIR DEMO
                    </Link>
                </Button>
                <div>
                    <IconButton onClick={handleUnlike}>
                        <Icon>thumb_down</Icon>
                    </IconButton>
                    <span>{demo.vote_data.current_votes.up}</span>
                    <IconButton onClick={handleLike}>
                        <Icon>thumb_up</Icon>
                    </IconButton>
                </div>
            </nav>
            {demo.long_desc.map(desc => {
                if (desc.type == "normal") {
                    return <p className={`${style.detailText} ${style.normal}`}>{desc.text}</p>
                }
                if (desc.type == "code") {
                    return (
                        <SyntaxHighlighter className={`${style.detailText} ${style.code}`} style={anOldHope} showLineNumbers language={desc.syntax}>
                            {desc.text}
                        </SyntaxHighlighter>
                    )
                }
            })}
        </>
    );
}

export default DemoDetails;