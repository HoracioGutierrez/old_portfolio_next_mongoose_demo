import style from "./DemoDetails.module.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Button from '@material-ui/core/Button';
import Link from "next/link"
import Head from 'next/head'
import moment from "moment";

moment.locale("es",{
    months : 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_')
})

const DemoDetails = ({ demo }) => {

    const formatedDate = (date) => {
        return moment(date).format("Do [de] MMMM, YYYY")
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
                <Button className={style.button} color="primary" variant="contained">
                    <Link href={`/playground/${demo.slug}`}>
                        ABRIR DEMO
                    </Link>
                </Button>
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