import { wrapper } from '../api/store'
import MainCard from "../components/MainCard"
import MainChat from '../components/MainChat'
import MainNotification from '../components/MainNotification'
import MainFooter from '../components/MainFooter'
import useDark from '../hooks/useDark'
import "./global.scss"

const CustomApp = ({ Component, pageProps }) => {

    const dark = useDark()

    return (
        <div id="container" className={`${dark ? "dark" : "light"}`}>
            <MainCard>
                <Component {...pageProps} />
            </MainCard>
            <MainChat />
            <MainNotification />
            <MainFooter />
        </div>
    )
}

export default wrapper.withRedux(CustomApp);