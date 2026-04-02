import { useRef } from "react";

const Master2 = ()=>{
    const ref1 = useRef("#fff");
    const chnageclr = ()=>{
    //    ref1.current.style.backgroundColor = "#fff" ? ref1.current.style.backgroundColor = "red" : ref1.current.style.backgroundColor = "#fff"  
        if(ref1.current.style.backgroundColor = "red")
        {
            ref1.current.style.backgroundColor = "red"  
            if(ref1.current.style.backgroundColor = "red" ){
                 ref1.current.style.backgroundColor = "#fff"
            }
        }
    }
    return(
        <div>
               <button ref={ref1} onClick={chnageclr}>.........CHANGE COLOUR............</button>
        </div>
    )
}
export default Master2;