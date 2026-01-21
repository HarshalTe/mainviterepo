import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const User2 = ()=>{
    const {id} = useParams();
   // const nav = useNavigate();
   //    const d = localStorage.getItem('valid')
   //    const {id} = useParams();
   //    useEffect(()=>{
   //          if(!d){
   //                nav('*')  
   //          }
   //    },[d])
   return(

      <div>
            <h1>User2 details.......{id}</h1>
      </div>
   );
}
export default User2;