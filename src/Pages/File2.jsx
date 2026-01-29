import { ReducerType } from "@reduxjs/toolkit";
import { useState } from "react";

const File2 = ()=>{
       const [userdata,setuserdata] = useState({
           hobbies:[],
           clr:[]   
       })
       const [alldata,setalldata] = useState([]);
       const change = (e)=>{
           const {checked,value,name} = e.target;
           if(checked){
               setuserdata({...userdata,[name]:value})
           }
           else{
                   setuserdata(userdata.filter((dd,ddi)=>{
                       return dd !== value
                   }))
           }
       }
       const add = ()=>{
           setalldata([...alldata,{...userdata}]) 
       }
    return(
        <div>
            {["coding","digital-art","drawing"].map((d,di)=>{
                  return(
                    <div key={di}>
                        <label>{d}</label>
                         <input type="checkbox" name="hobbies" checked ={userdata.hobbies.includes(d)} onChange={change}  value={d}/>
                         
                    </div>
                  );
            })}
                 {["red","yellow","green"].map((cd,cdi)=>{
                  return(
                    <div key={cdi}>
                        <label>{cd}</label>
                         <input type="checkbox" name="clr" checked ={userdata.clr.includes(cd)} onChange={change}  value={cd}/>
                         
                    </div>
                  );
            })}
            <button onClick={add}>ADD</button>
            <br/>
         
               
        </div>
    );
}
export default File2;