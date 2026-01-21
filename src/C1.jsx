import { useState } from "react";
import { add,update,del1 } from "./Redux/crudslice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const C1 = () => {
    const data = useSelector((state)=>state.crud.usedata)
    const hobbies = ["digital art","coding","painting"]
    const [show,setshow] = useState(false);
    const dispatch = useDispatch()
    const [userid,setuserid] = useState(null);
    const [info, setinfo] = useState(
        {
            first: "",
            last: "",
            hob:""
        }
    );
    const change = (e) => {
        setinfo({ ...info, [e.target.name]: e.target.value })

    }
    const adddata = (e) => {
       

        dispatch( add(info))
        setinfo({
            first: "",
            last: "",
            hob:""
        })

    }
    const prefield = (d,di)=>{
        setuserid(di)
       setinfo(
           {
               first: d.first,
               last: d.last,
               hob:d.hob
           }
       )
    }
    const save = ()=>{
          dispatch(update({ userid, info }));
          setuserid(null)
    }
    const del = (di)=>{
         dispatch(del1(di))
    }

    return (
        <div>
            <h1>USER INFORMATION</h1>
            <input placeholder="first name" name="first" value={info.first} onChange={change} />
            <br />
            <input placeholder="last name" name="last" value={info.last} onChange={change} />
            <br/>
            {hobbies.map(()=>{
                return(
                    <intput type="checkbox" /> 
                );     
            })}
            <br />
             <select value={info.hob} name="hob" onChange={change}>
                <option>Choose Hobbies</option>
                      {hobbies.map((h,hi)=>{
                          return(
                             <option key={hi} >{h}</option>
                          )
                       })}
             </select>
            <br/>
           { userid !== null  ?<button onClick={save}>UPDATED</button> :<button onClick={adddata}>ADD</button> }
            <br></br>
            {
                data.map((d,di)=>{
                     return(
                        <div key={di}>
                              <h1 >{d.first}</h1>
                               <h1>{d.last}</h1>
                               <h1>{d.hob}</h1>
                               <button onClick={()=>prefield(d,di)}>UPDATE</button>
                               <button onClick={()=>del(di)}>DELETE</button>

                        </div>
                     );
                })
            }
        </div>
    );
}
export default C1;