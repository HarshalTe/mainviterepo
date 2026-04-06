import { useState } from "react";
import { Url } from "./Url";

const Api2 = () => {

  const [fields, setFields] = useState([]);
   const MAX_FIELDS = 7; // ✅ limit


  const [formData, setFormData] = useState({});

  // ADD FIELD
  const add = () => {
       if (fields.length >= MAX_FIELDS) return;

    const newField = `d${fields.length + 1}`;

    setFields((prev) => [...prev, newField]);

    setFormData((prev) => ({
      ...prev,
      [newField]: ""
    }));
  };

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const postdata = async()=>{
    try{
           const res = await  fetch(Url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
           })
           const data = await res.json()

    }
    catch(err){
        console.log(err)
    }
  }

  return (
    <div>
      <h1>FORM DATA</h1>

      {fields.map((field) => (
        <div key={field}>
          <input
            type="text"
            name={field}             
            placeholder={field}
            value={formData[field] || ""}
            onChange={handleChange} 
          />
        </div>
      ))}

      <button onClick={add}>ADD</button>
      <button onClick={postdata}>SUBMIT</button>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default Api2;