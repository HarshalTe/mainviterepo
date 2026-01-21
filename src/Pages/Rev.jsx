import { useState } from "react";

const Rev = ()=>{
    const [field,setfield] = useState({
        username:"",
        hobbies:[],
        doc:[],
        gender:["male","sdsss"]
    });
    const [alldata,setalldata] = useState([]);
    const handlechange = (e)=>{
     const {type,name,value,files,checked,} = e.target;
     if(type === "text"){
         setfield({...field,[name]:value})  
     }

    }
   return(
     <div>
         <input type="text" placeholder="Username" name="username" value={field.username} onChange={handlechange}/>
         <br/>
         {["coding","digital-art","panting"].map((d,di)=>{
            return(
                <div key={di}>
                       <input type="checkbox" name="hobbies" checked={field.hobbies.includes(d)} value={d} onChange={handlechange}/>
                       {d}
               </div>
            )
         })}
        <br/>
         <input type="file" multiple name="doc" value={field.doc} onChange={handlechange}/>
          <br/>
          {field.gender.map((gd,gdi)=>{
              return(
                 <div key={gdi}>
                      <input type="radio" name="gender" checked={field.gender === gd} value={gd} onChange={handlechange}/>
                      {gd}
                 </div>
              );
          })}
      
     </div>
   );    
}
export default Rev;