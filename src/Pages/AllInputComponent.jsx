import { useState } from "react";

const AllInputComponent = () => {
  const [users] = useState(["Harshal", "Amit", "Rahul"]);

  const [form, setForm] = useState({
    name: "",        // text
    gender: "",      // radio
    hobbies: [],     // checkbox
    files: [],       // file
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((item) => item !== value),
      }));
    } 
    else if (type === "file") {
      setForm((prev) => ({
        ...prev,
        files: Array.from(files),
      }));
    } 
    else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCreate = () => {
    setData([...data, form]);

    setForm({
      name: "",
      gender: "",
      hobbies: [],
      files: [],
    });
  };

  return (
    <div>
      <h3>All Inputs in One Component</h3>

      {/* TEXT */}
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <br />

      {/* RADIO */}
      <div>
        <label>Gender:</label>
        {["Male", "Female"].map((g) => (
          <label key={g} style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={form.gender === g}
              onChange={handleChange}
            />
            {g}
          </label>
        ))}
      </div>

      <br />

      {/* CHECKBOX */}
      <div>
        <label>Hobbies:</label>
        {users.map((u) => (
          <label key={u} style={{ marginLeft: "10px" }}>
            <input
              type="checkbox"
              name="hobbies"
              value={u}
              checked={form.hobbies.includes(u)}
              onChange={handleChange}
            />
            {u}
          </label>
        ))}
      </div>

      <br />

      {/* FILE */}
      <div>
        <label>Files:</label>
        <input
          type="file"
          name="files"
          multiple
          onChange={handleChange}
        />
      </div>

      <br />

      <button onClick={handleCreate}>Create</button>

      <hr />

      {/* SHOW DATA */}
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <b>{index + 1}</b>
          <div>Name: {item.name}</div>
          <div>Gender: {item.gender}</div>
          <div>Hobbies: {item.hobbies.join(", ")}</div>
          <div>
            Files: {item.files.map((f) => f.name).join(", ")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllInputComponent;
  