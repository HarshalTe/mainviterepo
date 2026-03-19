import { useEffect, useRef, useState } from "react";

const It = ()=>{
    const t = useRef(0)
    const [d,setd] = useState(1)
      useEffect(()=>{
       t.current = setInterval(()=>{
            setd((p)=>(p + 1))   
            console.log("s")
        },1000)
       return  ()=>{clearInterval(t.current)}
      },[])
    return(
        <div>
            <h1>{d}</h1>
        </div>
    )
} 
export default It;