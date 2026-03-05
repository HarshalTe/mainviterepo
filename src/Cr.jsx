import { useState } from "react";

const Crx = ()=>{
    const [formdata,setformdata] = useState({
         fitst:"" ,
         last:"",
         hobbies:[],
         skills:[],
         doc1:[],
         doc2:[],
    })
    const [show,setshow] = useState([]);
    const handelechange = (e)=>{
        const {name,checked,value,file,type} = e.target;
        if(type === "text")
        {
            setformdata(
                            (prev)=>({...prev,[name] : value})
                       )
        }
        if(type = "checkbox")
        {
            setformdata((prev)=>({
               ...prev,[name]: [...prev[name]]
            }))   
        }        
    }
    
    return(
        <div>
            <input type="text" placeholder="name" value={formdata.fitst} name="first" onChange={handelechange}/>
            <br/>
                <input type="text" placeholder="last" value={formdata.last} name="last" onChange={handelechange}/>
            <br/>
            {["coding","digital-art","creativity"].map((h,hi)=>{
                return( 
                        
                         <div key={h1}>
                               <label>{h}</label>
                              <input type="checkbox" name="hobbies" checked={hobbies.includes(h)} value={h} onChange={handelechange}/>
                         </div>
                )
            })}
              <br/>
            {["coding","design","drawing"].map((s,si)=>{
                return(
                         <div key={si}>
                              <label>{s}</label>
                              <input type="checkbox" name="hobbies" checked={hobbies.includes(s)} value={s} onChange={handelechange}/>
                         </div>
                )
            })}
            <br/>
            <input type="file" multiple name="doc1" onChange={handelechange}/>
            <br/>
            <input type="file" multiple name="doc2" onChange={handelechange}/>
            

        </div>
    )

}
export default Crx;