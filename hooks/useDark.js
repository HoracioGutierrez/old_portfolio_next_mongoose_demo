import { useSelector } from "react-redux";

const useDark = () => {     
    return useSelector(({ dark }) => dark)
}
 
export default useDark;     