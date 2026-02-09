import { useState } from "react";

const MultiArrayForm = () => {
  const [form, setForm] = useState({
    hobbies: [],
    subjects: [],
    doc1: [],
    doc2: []
  });

  const hobbiesList = ["Cricket", "Music", "Coding", "Travel"];
  const subjectsList = ["Maths", "Science", "English", "History"];
  var a ;
  const handleChange = (e) => {
    const { name, value, checked, files, type } = e.target;

    if (type === "checkbox") {
      setForm(prev => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else if (type === "file") {
      setForm(prev => ({
        ...prev,
        [name]: Array.from(files)
      }));
    }
  };

  return (
    <div>
      <h3>Multi Array Form (Hobbies, Subjects, Files)</h3>

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
      <p><b>Hobbies:</b> {form.hobbies.join(", ") || "None"}</p>
      <p><b>Subjects:</b> {form.subjects.join(", ") || "None"}</p>
      <p>
        <b>Doc1:</b> {form.doc1.map(f => f.name).join(", ") || "None"}
      </p>
      <p>
        <b>Doc2:</b> {form.doc2.map(f => f.name).join(", ") || "None"}
      </p>
    </div>
  );
};

export default MultiArrayForm;
