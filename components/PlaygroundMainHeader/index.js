import Link from "next/link"
import { useRouter } from "next/router";
import style from "./PlaygroundMainHeader.module.scss"

const PlaygroundMainContainer = () => {

    const router = useRouter()
    const slug = router.query.slug

    return ( 
        <header className={style.header}>
            <Link href="/">home</Link>
            <Link href={`/demos/${slug}`}>volver al demo</Link>
        </header>
     );
}
 
export default PlaygroundMainContainer;