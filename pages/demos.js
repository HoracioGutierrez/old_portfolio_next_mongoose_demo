import axios from 'axios'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { demoRequestError, demoRequestPending, demoRequestSuccess, hideNotification, showNotification } from '../api/actions'
import DemoList from '../components/DemoList'

const Demos = () => {

    const dispatch = useDispatch()
    const {list,filtered,request} = useSelector(({demos})=>demos)
    const {pending,requested,full} = request

    useEffect(() => {

        if(!full){
            dispatch(demoRequestPending())
            dispatch(showNotification("Obteniendo demos...","info",2000))
            axios
                .get("/api/demos")
                .then(({ data: res }) => {
                    const { data: demos } = res
                    dispatch(demoRequestSuccess(demos))
                    dispatch(hideNotification())
                })
                .catch(error=>{
                    dispatch(showNotification("No se pudieron obtener los demos. Por favor vuelva a intentarlo"))
                    dispatch(demoRequestError(error))
                })
        }
    }, [])

    return (
        <>
            <Head>
                <title>HG - Demos</title>
            </Head>
            <DemoList list={list}/>
        </>
    )
}

export default Demos