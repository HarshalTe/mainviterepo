import { useState } from "react";
import { Usememo } from "./Usememo";

const Valpass = ()=>{
    const [count,setcount] = useState(0)
    const  [val] = Usememo(10,count);
    return(
        <div> 
            <h1>{val}</h1>
            <br/>
            <button  onClick={() => setcount(prev => prev + 1)}>UPDATE</button>
         
        </div>
    )
}
export default Valpass; 