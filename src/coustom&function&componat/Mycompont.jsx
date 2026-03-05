
import { useMyhook } from "./useMyhook";

const Mycompont =()=>{
   const [add,inc,setnc] = useMyhook(5)
          
   return(
    <div>
        
        <h1>{inc}</h1>
        <br></br>
   
        <br/>
        <button onClick={add}>ADD</button>
      
     
        

    </div>
   ) 
}
export default Mycompont;