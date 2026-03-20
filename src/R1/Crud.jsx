import { useState } from "react"
import { useDispatch,useSelector } from "react-redux";
import { add,up} from "../Redux/taskslice";


const Crud = ()=>{
    const [task,settask] = useState("");
    const {tasklist} = useSelector((state)=>state.task)
    const [id,setid] = useState(null)
    const change = (e)=>{
      settask(e.target.value);
    }
    const dispatch = useDispatch();
    const add1 = ()=>{
         dispatch(add(task))
         settask("")
    }
    const update = (d,i)=>{
        settask(tasklist[i])
        setid(i)

    }
    const save = ()=>{
       dispatch(up({task,id}))
        settask("")
       setid(null)
    }
    return(
        <div>
            <input type="text" placeholder="add task" onChange={change} value={task}/>   
            <br/>   
         {id !== null ? <button onClick={save}>SAVE</button> : <button onClick={add1}>ADD</button>}
            <br/>
            {
                tasklist.map((d,i)=>{
                    return(
                        <div key={i}>

                         <h1>{d}</h1>
                         <button onClick={()=>update(d,i)} >UPDATE</button>   
                            
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Crud; 