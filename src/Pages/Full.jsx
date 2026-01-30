import { useState } from "react";

const Full = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    hobbies: [],
    subjects: [],
    doc1: [],
    doc2: [],
    gender: "" // radio button
  });

  const hobbiesList = ["Cricket", "Music", "Coding", "Travel"];
  const subjectsList = ["Maths", "Science", "English", "History"];
  const genders = ["Male", "Female"]; // radio options

  const handleChange = (e) => {
    const { name, value, checked, files, type } = e.target;

    if (type === "checkbox") {
      setForm(prev => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else if (type === "radio") {
      setForm(prev => ({
        ...prev,
        [name]: value
      }));
    } else if (type === "file") {
      setForm(prev => ({
        ...prev,
        [name]: Array.from(files)
      }));
    } else {
      // text inputs
      setForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div>
      <h3>Multi Array Form (Text, Hobbies, Subjects, Files, Gender)</h3>

      {/* TEXT FIELDS */}
      <h4>Text Inputs</h4>
      <div>
        <label>First Name: </label>
        <input
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name: </label>
        <input
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
        />
      </div>

      <hr />

      {/* HOBBIES */}
      <h4>Hobbies</h4>
      {hobbiesList.map(hobby => (
        <label key={hobby} style={{ display: "block" }}>
          <input
            type="checkbox"
            name="hobbies"
            value={hobby}
            checked={form.hobbies.includes(hobby)}
            onChange={handleChange}
          />
          {hobby}
        </label>
      ))}

      <hr />

      {/* SUBJECTS */}
      <h4>Subjects</h4>
      {subjectsList.map(sub => (
        <label key={sub} style={{ display: "block" }}>
          <input
            type="checkbox"
            name="subjects"
            value={sub}
            checked={form.subjects.includes(sub)}
            onChange={handleChange}
          />
          {sub}
        </label>
      ))}

      <hr />

      {/* GENDER (Radio Button) */}
      <h4>Gender</h4>
      {genders.map(g => (
        <label key={g} style={{ display: "block" }}>
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

      <hr />

      {/* FILES */}
      <h4>Files</h4>
      <div>
        <label>Doc1: </label>
        <input
          type="file"
          name="doc1"
          multiple
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Doc2: </label>
        <input
          type="file"
          name="doc2"
          multiple
          onChange={handleChange}
        />
      </div>

      <hr />

      {/* SHOW DATA */}
      <h4>Selected Data</h4>
      <p><b>First Name:</b> {form.firstname || "None"}</p>
      <p><b>Last Name:</b> {form.lastname || "None"}</p>
      <p><b>Hobbies:</b> {form.hobbies.join(", ") || "None"}</p>
      <p><b>Subjects:</b> {form.subjects.join(", ") || "None"}</p>
      <p><b>Gender:</b> {form.gender || "None"}</p>
      <p><b>Doc1:</b> {form.doc1.map(f => f.name).join(", ") || "None"}</p>
      <p><b>Doc2:</b> {form.doc2.map(f => f.name).join(", ") || "None"}</p>
    </div>
  );
};

export default Full;
