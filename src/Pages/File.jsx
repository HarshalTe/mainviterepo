import { useState } from "react";

const File = ()=>{
    const ob1 = {
        a:"1",
        b:"2",
        c:"3"
    }
        const ob2 = {
        d:"4",
        e:"5",
        f:"6"
    }
    const newob = {...ob1,...ob2}
    const nw = [{...ob1,...ob2}  ]
      console.log("111----------" +JSON.stringify(nw))
    // console.log("-----------" + JSON.stringify(newob))
    const [docs,setdocs] = useState({
           doc1:[],
           doc2:[],
           doc3:[]
    });
    const [show,setshow] = useState([]);
    const ch = (e)=>{
        
         setdocs({...docs,[e.target.name]:Array.from(e.target.files)})
    }
    const add = ()=>{
       setshow([...show,{...docs}]);
        setdocs({
             doc1:[],
           doc2:[],
           doc3:[]  
        })     
    }
    return(
        <div>
            <h1>yyyyy</h1>
            <input type="file" multiple name="doc1" onChange={ch}/>
            <br/>
            <input type="file" multiple name="doc2" onChange={ch}/>
             <br/>
            <input type="file" multiple name="doc3" onChange={ch}/>
            <br/>
            <button onClick={add}>ADD</button>
            <br/>
            {
                show.map((d,di)=>{
                   return(
                    <div key={di}>
                        {
                            d.doc1.map((fd,fi)=>{
                                return(
                                    <div key={fi}>{fd.name}</div>
                                   
                                );  
                            })
                            
                        }
                          {
                            d.doc2.map((fd,fi)=>{
                                return(
                                    <div key={fi}>{fd.name}</div>
                                   
                                );  
                            })
                            
                        }
                          {
                            d.doc3.map((fd,fi)=>{
                                return(
                                    <div key={fi}>{fd.name}</div>
                                   
                                );  
                            })
                            
                        }
                    </div>
                   );
                })
            }
            
        </div>
    );
}
export default File;




// import { useState } from "react";

// const File = () => {
//     const [documents, setdocuments] = useState({
//          txt:"",
//         doc1: [],
//         doc2: [],
//         doc3: [],
//         doc4: [],
//     })
//     const [show, setshow] = useState([])
//     const ch = (e) => {
//   const { name, type, value, files } = e.target;

//   setdocuments((prev) => ({
//     ...prev,
//     [name]: type === "file" ? Array.from(files) : value,
//   }));
// };

//     const add = () => {
//         setshow([...show, { ...documents }])
//         setdocuments({
//             txt:"",
//             doc1: [],
//             doc2: [],
//             doc3: [],
//             doc4: [],
//         })

//     }
//     return (
//         <div>
//             <h1>DOC</h1>
//             <input type="text" name="txt" value={documents.txt}  onChange={ch}/>
//             <br></br>
//             <input type="file" name="doc1" multiple onChange={ch} />
//             <br />
//             <input type="file" name="doc2" multiple onChange={ch} />
//             <br />
//             <input type="file" name="doc3" multiple onChange={ch} />
//             <br />
//             <input type="file" name="doc4" multiple onChange={ch} />
//             <br />
//             <button onClick={add}>ADD</button>
//             {
//                 show.map((d, di) => (
                      
//                     <div key={di}>
//                         <h1>{d.txt}</h1>

//                         <b>Doc1</b>
//                         {d.doc1.map((f, i) => (

//                             <p key={i}>{f.name}</p>
//                         ))}

//                         <b>Doc2</b>
//                         {d.doc2.map((f, i) => (
//                             <p key={i}>{f.name}</p>
//                         ))}

//                         <b>Doc3</b>
//                         {d.doc3.map((f, i) => (
//                             <p key={i}>{f.name}</p>
//                         ))}

//                         <b>Doc4</b>
//                         {d.doc4.map((f, i) => (
//                             <p key={i}>{f.name}</p>
//                         ))}

//                         <hr />
//                     </div>
//                 ))
//             }



//         </div>
//     );
// }
// export default File;