import { useState } from "react"

export const useShow = (data = 5)=>{
   const [count,sercount] = useState(data);
   const add = ()=>{
        sercount(count + 5)
   }
   return [add,count,sercount];
}