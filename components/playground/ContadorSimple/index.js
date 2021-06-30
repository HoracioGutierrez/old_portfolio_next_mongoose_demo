import { useState } from "react";
import style from "./ContadorSimple.module.scss"
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const ContadorSimple = () => {

    const [contador,setContador] = useState(0)

    const sumar = () => setContador(contador + 1)
    
    const restar = () => setContador(contador - 1)

    const resetear = () => setContador(0)

    return (
        <main className={style.main}>
            <h1 className={style.titulo}>Contador Simple</h1>
            <p className={style.contador}>Contador Actual : <span>{contador}</span></p>
            <div className={style.buttonContainer}>
                <IconButton onClick={sumar}>
                    <Icon>add</Icon>
                </IconButton>

                <IconButton onClick={resetear}>
                    <Icon>autorenew</Icon>
                </IconButton>

                <IconButton onClick={restar}>
                    <Icon>remove</Icon>
                </IconButton>
            </div>
        </main>
    )
}

export default ContadorSimple;