import { useState } from "react";

const Again = ()=>{
   const  [i,seti] = useState();
    const [formdata,setformdata] = useState({
        hobbies:[], 
        subjects:[]     
    })
    const [colect,setcolect] = useState([]);
    const change = (e)=>{
        const {name,value,checked} = e.target;
        setformdata(
          {
            ...formdata,[name] : checked ? [...formdata[name],value] : formdata[name].filter((d,di)=>{return d !== value})
          }
        )
    }
    const add = ()=>{
        setcolect([...colect,formdata])
        setformdata({ hobbies:[], 
        subjects:[] })
    } 
    const pre = (idx,itm,e)=>{
         const {name,value,checked} = e.target;
  
         seti(idx);
    
          setformdata({
    hobbies: itm.hobbies,
    subjects: itm.subjects

  })
    }
     return(
        <div>
         {["coding","digital-art","drawing"].map((d,i)=>{
            return(
                
               <div key={i}>
                     <label>{d}</label>
                    <input type="checkbox" checked={formdata.hobbies.includes(d)} name="hobbies" onChange={change}  value={d}/>
               </div>
            )
         })}
         <br/>
           {["english","marathi","hindi"].map((dd,ii)=>{
            return(
                
               <div key={ii}>
                     <label>{dd}</label>
                    <input type="checkbox" checked={formdata.subjects.includes(dd)} name="subjects" onChange={change}  value={dd}/>
               </div>
            )
         })}
        
      <hr />
      <button onClick={add}>ADD</button>
      <br></br>
      {colect.map((itm,idx)=>{
           return(
            <div key={idx}>
                 <h1>{itm.hobbies + "  "   }</h1>
                 <h1>{itm.subjects + " "}</h1>
                 <button onClick={()=>pre(idx,itm)}>UPDATE</button>
            </div>
           )
      })}
      <h1>{JSON.stringify(formdata, null, 2)}</h1>
         

        </div>
     );
}
export default Again;