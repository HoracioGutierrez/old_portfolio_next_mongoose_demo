import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import axios from "axios";
import { demoDetailRequestError, demoDetailRequestPending, demoDetailRequestSuccess, showNotification } from "../../api/actions";
import CircularProgress from '@material-ui/core/CircularProgress';
import DemoDetails from "../../components/DemoDetails"

const DemoDetail = () => {

    const dispatch = useDispatch()
    const current_demo = useSelector(({ demos: { current } }) => current)
    const router = useRouter()
    let url = `/api/demos/${router.query.slug}`

    useEffect(() => {

        if (router.query.slug) {

            url += current_demo.requested ? "?type=short" : "?type=full"
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