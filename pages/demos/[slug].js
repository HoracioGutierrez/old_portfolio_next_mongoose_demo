import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import axios from "axios";
import { demoDetailRequestError, demoDetailRequestPending, demoDetailRequestSuccess, showNotification } from "../../api/actions";
import CircularProgress from '@material-ui/core/CircularProgress';
import DemoDetails from "../../components/DemoDetails"

/* export async function getStaticPaths(test){
    //const res = await fetch("http://localhost:3000/api/demos")
    const res = await fetch(`https://localhost/api/demos`)
    const demos = await res.json()
    const paths = demos.data.map(demo=>({params : {slug:demo.slug}}))

    return {paths,fallback:false}

}

export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:3000/api/demos/${params.slug}`)
    const demo = await res.json()
    return {props:{demo}}
} */

/* export async function getServerSideProps(ctx){
    const host = ctx.req.headers.host
    const protocolo = ctx.req.connection.encrypted ? "https" : "http"
    const slug = ctx.params.slug
    const res = await fetch(`${protocolo}://${host}/api/demos/${slug}`)
    const demo = await res.json()
    return {
        props : {demo : demo.data}
    }
} */

const DemoDetail = () => {

    const dispatch = useDispatch()
    const current_demo = useSelector(({ demos: { current } }) => current)
    const router = useRouter()
    let url = `/api/demos/details?slug=${router.query.slug}`

    useEffect(() => {

        if (router.query.slug) {

            url += current_demo.requested ? "&type=short" : "&type=full"
            dispatch(demoDetailRequestPending())
            axios
                .get(url)
                .then(({ data: res }) => {
                    const { data: demo } = res
                    dispatch(demoDetailRequestSuccess(demo))
                })
                .catch(error => {
                    dispatch(showNotification("No se pudo obtener el detalle del demo. Por favor vuelva a intentarlo"))
                    dispatch(demoDetailRequestError(error))
                })

        }

    }, [router.query.slug])

    return (
        <>
            {current_demo.full
                ? <DemoDetails demo={current_demo} />
                : <CircularProgress color="primary" />
            }
        </>
    );
}

export default DemoDetail;