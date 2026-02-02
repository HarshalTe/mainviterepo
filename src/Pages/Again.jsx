import { useState } from "react";

const Again = ()=>{
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
      
      <h1>{JSON.stringify(formdata, null, 2)}</h1>
         

        </div>
     );
}
export default Again;