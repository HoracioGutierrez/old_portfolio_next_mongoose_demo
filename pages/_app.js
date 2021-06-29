import { wrapper } from '../api/store'
import MainCard from "../components/MainCard"
import MainChat from '../components/MainChat'
import MainNotification from '../components/MainNotification'
import MainFooter from '../components/MainFooter'
import useDark from '../hooks/useDark'
import "./global.scss"
import { useRouter } from 'next/router'

const CustomApp = ({ Component, pageProps }) => {

    const dark = useDark()
    const router = useRouter()

    if(router.pathname.includes("playground")){
        return (
            <Component {...pageProps}/>
        )
    }else{
        return (
            <div id="container" className={`${dark ? "dark" : "light"}`}>
                <MainCard>
                    <Component {...pageProps} />
                </MainCard>
                {/* <MainChat /> */}
                <MainNotification />
                {/* <MainFooter /> */}
            </div>
        )
    }
}

export default wrapper.withRedux(CustomApp);