import React from "react";
import { useFormik } from "formik";

const FormikLearning = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      skills: [],
      resume: null,
    },

    onSubmit: (values) => {
      console.log("FINAL DATA 👉", values);
    },
  });

  // ✅ CUSTOM HANDLER (ONLY WHERE NEEDED)
  const customChange = (e) => {
    const { name, value, checked, type, files } = e.target;

    // checkbox array logic
    if (type === "checkbox") {
      const arr = formik.values[name];

      if (checked) {
        formik.setFieldValue(name, [...arr, value]);
      } else {
        formik.setFieldValue(
          name,
          arr.filter((v) => v !== value)
        );
      }
    }

    // file input logic
    if (type === "file") {
      formik.setFieldValue(name, files[0]);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Formik HandleChange Learning</h2>

      <form onSubmit={formik.handleSubmit}>

        {/* ✅ 1. NORMAL INPUT → Formik handleChange */}
        <h4>✅ Use formik.handleChange (Simple Input)</h4>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <hr />

        {/* ✅ 2. CHECKBOX ARRAY → CUSTOM HANDLER */}
        <h4>✅ Use customChange (Checkbox Array)</h4>

        {["React", "Node", "AI"].map((skill) => (
          <div key={skill}>
            <label>{skill}</label>
            <input
              type="checkbox"
              name="skills"
              value={skill}
              checked={formik.values.skills.includes(skill)}
              onChange={customChange}
            />
          </div>
        ))}

        <hr />

        {/* ✅ 3. FILE INPUT → CUSTOM HANDLER */}
        <h4>✅ Use customChange (File Input)</h4>

        <input
          type="file"
          name="resume"
          onChange={customChange}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      <h3>Live Formik Values 👇</h3>
      <pre>{JSON.stringify(formik.values, null, 2)}</pre>
    </div>
  );
};

export default FormikLearning;