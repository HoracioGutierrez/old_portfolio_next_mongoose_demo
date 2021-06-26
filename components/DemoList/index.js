import { useSelector } from "react-redux";

const DemoList = () => {
    
    const demos = useSelector(({demos})=>demos)

    return (
        <ul>
            Demos
        </ul>
    );
}

export default DemoList;