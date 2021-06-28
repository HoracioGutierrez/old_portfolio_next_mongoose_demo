import { useEffect } from "react";
import { useSelector } from "react-redux";

const DemoDetail = () => {

    const current_demo = useSelector(({demos:{current}})=>current)

    useEffect(()=>{

        const demo_length = Object.keys(current_demo).length

        if( demo_length === 0){
            console.log("No hay demo actual guardado")
        }else{
            if(demo_length === 8){
                console.log("Hay demo corto")
            }else{
                console.log("Ya hay demo")
            }
        }
        
    },[current_demo])

    return (
        <>
            <h2></h2>
        </>
    );
}

export default DemoDetail;