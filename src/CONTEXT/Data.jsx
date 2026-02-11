import { useContext, useEffect } from "react";
import { create } from "./Createcontext";

const Data = ()=>{
   const {d,setd}  = useContext(create);
   useEffect(()=>{setd("data from data")},[])
    return(
        <div>

        </div>
    );
}
export default Data;