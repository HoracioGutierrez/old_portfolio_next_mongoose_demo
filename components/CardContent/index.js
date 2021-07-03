import { Collapse } from "@material-ui/core";
import { useSelector } from "react-redux";
import CardContent from '@material-ui/core/CardContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import style from "./CardContent.module.scss"
import { useState } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRouter } from 'next/router'
import { useEffect } from "react";

const Content = ({ children }) => {

    const open = useSelector(({ card_open }) => card_open)
    const new_tab = useSelector(({ new_tab }) => new_tab)
    const [tab, setTab] = useState(0)
    const matches = useMediaQuery("(min-width:800px)")
    const router = useRouter()
    const [rutas] = useState(["/", "/demos"])

    useEffect(() => {
        const ruta = rutas.indexOf(router.pathname)
        setTab(ruta)
    }, [])

    useEffect(()=>{
        if(new_tab.show){
            setTab(new_tab.index)
        }
    },[new_tab.show])

    const handleChange = (e, tab) => {
        setTab(tab)
        const ruta = rutas[tab]
        router.push(ruta)
    }

    return (
        <Collapse in={!open}>
            <Tabs
                value={tab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant={!matches ? "fullWidth" : "standard"}
                className={style.tabsContainer}
            >
                <Tab label="Bio" id="bio" className={style.tabItem} />
                <Tab label="Demos" id="demos" />
                {new_tab.show && <Tab label={new_tab.title}/>}
            </Tabs>
            <CardContent component="main" className={style.cardContent}>
                {children}
            </CardContent>
        </Collapse>
    );
}

export default Content