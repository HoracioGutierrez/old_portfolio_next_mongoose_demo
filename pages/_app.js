import { wrapper } from '../api/store'
import MainCard from "../components/MainCard"

const CustomApp = ({Component,pageProps}) => {

    return ( 
        <>
            <MainCard>
                <Component {...pageProps}/>
            </MainCard>
        </>
    )
}
 
export default wrapper.withRedux(CustomApp);