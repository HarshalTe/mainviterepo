import { useState } from "react";

const File9  = ()=>{
    const [list,setlist] = useState([])
    const [docuents,setdocuments] = useState(
        {
            doc1:[],
             doc2:[]   
        }
    )
     const change = (e)=>{
        setdocuments({...docuents,[e.target.name]:Array.from(e.target.files)})
     }
      const Add = ()=>{
          setlist([...list,{...docuents}])
      }

      return(
        <div>
            <input type="file" name="doc1" onChange={change}  multiple/>
            <br/>
            <input type="file" name="doc2" multiple  onChange={change}/>
             <br/>
             <button onClick={Add}>ADD</button>
             <br/>
             {list.map((doc,i)=>{
                return(
                    <div key={i}>
                       {doc.doc1.map((d1,di1)=><div>{d1.name}</div>)}
                       <br></br>
                       {doc.doc2.map((d2,di2)=><div>{d2.name}</div>)}
                    </div>
                );
             })}
        </div>
      );
}
export default File9;