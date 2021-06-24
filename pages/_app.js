import { wrapper } from '../api/store'
import MainCard from "../components/MainCard"
import MainChat from '../components/MainChat'
import MainFooter from '../components/MainFooter'
import "./global.scss"

const CustomApp = ({Component,pageProps}) => {

    return ( 
        <>
            <MainCard>
                <Component {...pageProps}/>
            </MainCard>
            <MainChat/>
            <MainFooter/>
        </>
    )
}
 
export default wrapper.withRedux(CustomApp);