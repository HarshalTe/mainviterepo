import { useState } from "react";

const M2 = () => {

  const [rows, setRows] = useState([
    { firstname: "", lastname: "", clr: "", hobby: [], skills: [] }
  ]);

  const change = (e, index) => {
    const { type, name, value, checked } = e.target;

    const updated = JSON.parse(JSON.stringify(rows));

    if (type === "text" || type === "select-one") {
      updated[index][name] = value;
    }

    if (type === "checkbox") {
      if (checked) {
        updated[index][name].push(value);
      } else {
        updated[index][name] = updated[index][name].filter((d) => d !== value);
      }
    }

    setRows(updated);
  };

  const addRow = () => {

    const lastRow = JSON.parse(JSON.stringify(rows[rows.length - 1]));

    setRows(rows.concat(lastRow));
  };

  return (
    <div>

      {rows.map((r, i) => (
        <div key={i}>

          <input
            name="firstname"
            value={r.firstname}
            onChange={(e) => change(e, i)}
            placeholder="First Name"
            type="text"
          />

          <input
            name="lastname"
            value={r.lastname}
            onChange={(e) => change(e, i)}
            placeholder="Last Name"
            type="text"
          />

          <select name="clr" value={r.clr} onChange={(e) => change(e, i)}>
            <option value="">Choose Color</option>
            {["red", "yellow", "green"].map((d, j) => (
              <option key={j} value={d}>{d}</option>
            ))}
          </select>

          <div>
            {["aa", "vv", "dd"].map((k, ki) => (
              <label key={ki}>
                {k}
                <input
                  type="checkbox"
                  name="hobby"
                  value={k}
                  checked={r.hobby.includes(k)}
                  onChange={(e) => change(e, i)}
                />
              </label>
            ))}
          </div>

          <div>
            {["aa1", "vv2", "dd3"].map((k1, ki1) => (
              <label key={ki1}>
                {k1}
                <input
                  type="checkbox"
                  name="skills"
                  value={k1}
                  checked={r.skills.includes(k1)}
                  onChange={(e) => change(e, i)}
                />
              </label>
            ))}
          </div>

          <hr />

        </div>
      ))}

      <button onClick={addRow}>ADD</button>

    </div>
  );
};

export default M2;



// import { useState } from "react";

// const M2 = () => {

//   const [rows, setRows] = useState([
//     { first: "", last: "", dropdown: "", checkbox1: false, checkbox2: false }
//   ]);


//   const addRow = () => {
//     setRows((prev) => [
//       ...prev,
//       { first: data.firstname, last: data.lastname, dropdown: data.clr, checkbox1: data.hobby, checkbox2: data.skills}
//     ]);
    

  
//   };

//   const [data,setdata] = useState({firstname:"",clr:"",lastname:"",hobby:[],skills:[]})
//   const change = (e)=>{
//      const {type,name,value,checked} = e.target;
//      if(type === "text" || type === "select-one")
//      {
//          setdata(
//             (prev)=>(
//                {
//                  ...prev,[name]:value
//                } 
//             )
//          ) 
//      }   
//      if(type === "checkbox")
//      {
//         setdata(
//             (prev)=>(
//                 {
//                     ...prev,[name]:checked ? [...prev[name],value]:prev[name].filter((d,i)=>{return d !==  value })
//                 }
//             )
//         )
//      } 
       
//   }

//   return (
//     <div>

//       {rows.map((r, i) => (
//         <div key={i}>

//           <input name="firstname" onChange={change} value={data.firstname} placeholder="First Name" type="text" />

//           <input name="lastname" onChange={change} value={data.lastname} placeholder="Last Name" type="text" />

//           <select onChange={change} name="clr" value={data.clr}>
//             <option>Choose Color</option>
//             {["red", "yellow", "green"].map((d, j) => (
//               <option key={j}>{d}</option>
//             ))}
//           </select>

//           <div>
//             {["aa", "vv", "dd"].map((k, ki) => (
//               <label key={ki}>
//                 {k}
//                 <input onChange={change} checked={data.hobby.includes(k)} name="hobby" type="checkbox" value={k} />
//               </label>
//             ))}
//           </div>

//           <div>
//             {["aa1", "vv2", "dd3"].map((k1, ki1) => (
//               <label key={ki1}>
//                 {k1}
//                 <input name="skills" checked={data.skills.includes(k1)} onChange={change} type="checkbox" value={k1} />
//               </label>
//             ))}
//           </div>

//           <hr />

//         </div>
//       ))}

//       <button onClick={addRow}>ADD</button>

//     </div>
//   );
// };

// export default M2;