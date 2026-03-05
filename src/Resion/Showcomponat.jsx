import { Normalfun,Multiply } from "./Normalfun";
import { useShow } from "./useShow";

const Showcomponant = ()=>{
   const [add,count,sercount] = useShow(10);
 
       
    return(
        <div>
            <h1>{count}</h1>
         <br/>
        <button onClick={add}>ADD</button>
        <button onClick={()=>Normalfun(count,sercount)}>MIN</button>
        <button onClick={()=>Multiply(count,sercount)}>mult</button>
        </div>
    );
}
export default Showcomponant;