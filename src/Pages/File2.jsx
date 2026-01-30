import { useState } from "react";

const File2 = ()=>{
       const [userdata,setuserdata] = useState(
        {
            file1:[],
            file2:[],
            hobbies:[],
            clr:[]
        }
       );
       const chnage = (e)=>{

       }
    return(
        <div>
            <input type="file" name="file1" onChange={chnage}/>
            <br/>
            <input type="file" name="file2"  onChange={chnage}/>
            <br/>
            {["coding","digital-art","drawing"].map((h,hi)=>{
                 return(
                    <div key={hi}>
                        <label>{h}</label>
                        <input type="checkbox" checked={userdata.includes(h)} name="hobbies" value={userdata.hobbies} onChange={chnage}/>
                    </div>
                 );
            })}
            <br/>
               {["red","yellow","green"].map((c,ci)=>{
                 return(
                    <div key={ci}>
                        <label>{c}</label>
                        <input type="checkbox" checked={userdata.includes(c)} name="clr" value={userdata.clr} onChange={chnage}/>
                    </div>
                 );
            })}



        </div>
    );
}
export default File2