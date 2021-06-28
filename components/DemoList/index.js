import { useSelector } from "react-redux";
import DemoListItem from "../DemoListItem";

const DemoList = () => {
    
    const {list} = useSelector(({demos})=>demos)

    return (
        <section id="demo-list">
            {list.map(demo=>  <DemoListItem key={demo.id} demo={demo}/> )}
        </section>
    );
}

export default DemoList;