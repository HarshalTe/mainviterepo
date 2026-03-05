import { useState } from "react"

export const useMyhook = (data = 0)=>{
    const [inc,setnc,] = useState(data);
    const add = ()=>{
      return setnc(inc + 5) 
    }    
    return [add,inc,setnc];  
}