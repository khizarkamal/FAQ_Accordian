import {accordianData} from "./data";
import AccordianItem from "./AccordianItem"

const Accordian = () => {
    return accordianData.map((item)=>{
        return <AccordianItem key={item.id} item={item}></AccordianItem>
    })
}

export default Accordian;