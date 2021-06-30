import style from "./DemoDetails.module.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Button from '@material-ui/core/Button';
import Link from "next/link"


const DemoDetails = ({ demo }) => {


    return (
        <>
            <h2 className={style.title}>{demo.title}</h2>
            <h3 className={style.subtitle}>{demo.subtitle}</h3>
            <div id="detail-image" className={style.image} style={{ backgroundImage: `url("/${demo.image_url}")` }}></div>
            <Button color="primary" variant="contained">
                <Link href={`/playground/${demo.slug}`}>
                    ABRIR DEMO
                </Link>
            </Button>
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