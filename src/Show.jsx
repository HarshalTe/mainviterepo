import { useContext } from "react";
import { create } from "./CONTEXT/Createcontext";

const Show111 = ()=>{
    const {d} = useContext(create);
     
    return(
        <div>
            <h1>show data</h1>
             <h1>{d}</h1>
        </div>
    );
}
export default Show111;