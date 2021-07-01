import style from "./MainFooter.module.scss"

const MainFooter = () => {
    return (
        <footer className={`${style.mainFooter}`}>
            <p>&copy; Copyright 2021 - Horacio Gutierrez</p>
        </footer>
    );
}

export default MainFooter;