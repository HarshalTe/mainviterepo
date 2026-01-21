import { Outlet, useNavigate } from "react-router-dom";

const Users = ()=>{
    const nevigate = useNavigate();
    const i1 = 1
    const i2 = 2
    const u1 = ()=>{
       nevigate(`user1/${i1}`)

    }
    const u2 = ()=>{
       nevigate(`user2/${i2}`)
     
    }
    return(
        <div>
             <h1>User Componant</h1>  
              <button onClick={u1}>User1</button> 
              <button onClick={u2}>User2</button> 
             <Outlet/>
        </div>
    );
}
export default Users;