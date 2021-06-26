import axios from 'axios'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { demoRequestError, demoRequestPending, demoRequestSuccess, showNotification } from '../api/actions'
import DemoList from '../components/DemoList'

const Demos = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(demoRequestPending())
        dispatch(showNotification("Obteniendo demos...","info",2000))
        axios
            .get("/api/demos")
            .then(({ data: res }) => {
                const { data: demos } = res
                dispatch(demoRequestSuccess(demos))
            })
            .catch(error=>{
                dispatch(showNotification("No se pudieron obtener los demos. Por favor vuelva a intentarlo"))
                dispatch(demoRequestError(error))
            })
    }, [])

    return (
        <>
            <Head>
                <title>HG - Demos</title>
            </Head>
            <DemoList/>
        </>
    )
}

export default Demos