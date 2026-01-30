import { useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { add,updated,dt} from "../Redux/Newcrudslice";

const Newcrud = () => {
    const dispatch = useDispatch();
    const [uid,setuid] = useState(null);
    const [userdata,setuserdata] = useState({first:"",last:""});
    const getdata = useSelector((state)=>state.newcrud.userdatalist);

    const chnage = (e)=>{
      setuserdata({...userdata,[e.target.name]:e.target.value})
    }
    const create = (e)=>{
        
      dispatch(add(userdata))
      setuserdata({first:"",last:""})
    }
    const prefield = (g,gi)=>{
        setuid(gi);
       setuserdata({
          first:g.first,
          last:g.last
       }) 
    }
    const save = ()=>{
        dispatch(updated({uid,userdata}))
          setuserdata({first:"",last:""})
           setuid(null);
    }
    const del = (gi)=>{
         dispatch(dt(gi))
    }

    return (
        <div>
            <h1>USERDATA</h1>
            <input placeholder="Username" name="first" value={userdata.first} onChange={chnage} />
            <br />
            <input placeholder="Last Name" name="last" value={userdata.last} onChange={chnage} />
            <br />
           {uid !== null?<button onClick={save}>submit</button> :<button onClick={create}>Create</button>}
            <br/>
            {
                getdata.map((g,gi)=>{
                     return(
                        <div key={gi}>
                               <h1>{g.first}</h1>
                               <br></br>
                               <h1>{g.last}</h1>
                               <br></br>
                               <button onClick={()=>prefield(g,gi)}>UPDATE</button>
                               <br></br>
                               <button onClick={()=>del(gi)}>DELETE</button>   
                        </div>
                     )
                })
            }
        </div>
    );
}
export default Newcrud;