import { useParams } from "react-router-dom";

const User1 = ()=>{
   const {id} = useParams();
   return(
      <div>
            <h1>User1 details.......{id}</h1>
      </div>
   );
}
export default User1;