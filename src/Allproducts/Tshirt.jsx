import { useParams } from "react-router-dom";
const Tshirt = ()=>{
      const {id} = useParams();
    return(
        <div>
            <h1>All Tshirts......{id}</h1>
        </div>
    );
}
export default Tshirt;