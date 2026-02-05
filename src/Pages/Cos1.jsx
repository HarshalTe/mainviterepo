
import { useRef, useState } from "react";

const Cos1 = ()=>{
      const [count,setcount] = useState(1);
      const myref = useRef()
       const changecolour = ()=>{
           myref.current.style.backgroundColor = "red"
       }
       const incriment = ()=>{
            setcount(count + 1)
       }

         const decriment = ()=>{
            setcount(count - 1)
       }

       return [count,incriment,decriment,myref,changecolour]
}
export default Cos1;