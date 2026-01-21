import { useParams } from "react-router-dom";

const Shirts = ()=>{
    const {id} = useParams();
   return(
    <div>
          <h1>All Shirts......{id}</h1>
    </div>
   );
}
export default Shirts;