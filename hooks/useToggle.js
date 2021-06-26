import { useSelector } from "react-redux";

const useToggle = () => {     
    return useSelector(({ card_open }) => card_open)
}
 
export default useToggle;     