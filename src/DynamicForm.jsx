import React, { useState } from "react";

const DynamicForm = () => {

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    role: "",
    file1: "",
    file2: ""
  });

  const [rows, setRows] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // For update mode

  const roles = ["Developer","Designer","Tester"];

  // Single change handler
  const change = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setForm({ ...form, [name]: files[0]?.name || "" }); // Store file name
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Add new row
  const addRow = () => {
    setRows([...rows, form]);
    resetForm();
  };

  // Edit row
  const editRow = (index) => {
    setForm(rows[index]);
    setEditIndex(index);
  };

  // Update row
  const updateRow = () => {
    const updatedRows = [...rows];
    updatedRows[editIndex] = form;
    setRows(updatedRows);
    setEditIndex(null);
    resetForm();
  };

  // Delete row
  const deleteRow = (index) => {
    const filtered = rows.filter((_, i) => i !== index);
    setRows(filtered);
    if (editIndex === index) {
      setEditIndex(null);
      resetForm();
    }
  };

  // Reset top form
  const resetForm = () => {
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      role: "",
      file1: "",
      file2: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>{editIndex !== null ? "Update Data" : "Add Data"}</h3>

      <input
        name="first_name"
        placeholder="First Name"
        value={form.first_name}
        onChange={change}
      />

      <input
        name="last_name"
        placeholder="Last Name"
        value={form.last_name}
        onChange={change}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={change}
      />

      <input
        name="mobile"
        placeholder="Mobile"
        value={form.mobile}
        onChange={change}
      />

      <select name="role" value={form.role} onChange={change}>
        <option value="">Select Role</option>
        {roles.map(r => <option key={r}>{r}</option>)}
      </select>

      <div>
        <label>File 1: </label>
        <input type="file" name="file1" onChange={change} />
      </div>

      <div>
        <label>File 2: </label>
        <input type="file" name="file2" onChange={change} />
      </div>

      {editIndex !== null ? (
        <button onClick={updateRow} style={{ marginTop: "10px" }}>Update</button>
      ) : (
        <button onClick={addRow} style={{ marginTop: "10px" }}>Add</button>
      )}

      <hr/>

      <h3>Rows</h3>

      {rows.map((item,index)=>(
        <div key={index} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>

          <input value={item.first_name} readOnly placeholder="First Name" />
          <input value={item.last_name} readOnly placeholder="Last Name" />
          <input value={item.email} readOnly placeholder="Email" />
          <input value={item.mobile} readOnly placeholder="Mobile" />
          <input value={item.role} readOnly placeholder="Role" />
          <input value={item.file1} readOnly placeholder="File 1" />
          <input value={item.file2} readOnly placeholder="File 2" />

          <div style={{marginTop:"5px"}}>
            <button onClick={()=>editRow(index)}>Edit</button>
            <button onClick={()=>deleteRow(index)} style={{marginLeft:"5px"}}>Delete</button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default DynamicForm;