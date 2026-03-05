import React, { useState } from "react";
import { useFormik, FormikProvider, FieldArray } from "formik";

function App2() {
  const [savedUsers, setSavedUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formik = useFormik({
    initialValues: {
      users: [
        {
          name: "",
          email: ""
        }
      ]
    },
    onSubmit: (values, { resetForm }) => {
      if (editIndex !== null) {
        // UPDATE
        const updated = [...savedUsers];
        updated[editIndex] = values.users[0];
        setSavedUsers(updated);
        setEditIndex(null);
      } else {
        // ADD
        setSavedUsers([...savedUsers, values.users[0]]);
      }

      resetForm();
    }
  });

  const handleEdit = (index) => {
    formik.setFieldValue("users", [savedUsers[index]]);
    setEditIndex(index);
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <FieldArray name="users">
          {({ push, remove }) => (
            <div>
              {formik.values.users.map((user, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  
                  <input
                    type="text"
                    name={`users.${index}.name`}
                    placeholder="Name"
                    value={user.name}
                    onChange={formik.handleChange}
                  />

                  <input
                    type="email"
                    name={`users.${index}.email`}
                    placeholder="Email"
                    value={user.email}
                    onChange={formik.handleChange}
                  />

                  {formik.values.users.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}

              {editIndex === null && (
                <button
                  type="button"
                  onClick={() => push({ name: "", email: "" })}
                >
                  Add More
                </button>
              )}
            </div>
          )}
        </FieldArray>

        <br />
        <button type="submit">
          {editIndex !== null ? "Update User" : "Add User"}
        </button>
      </form>

      <hr />

      <h3>Saved Users</h3>

      {savedUsers.map((user, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            margin: "5px",
            padding: "5px"
          }}
        >
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>

          <button onClick={() => handleEdit(index)}>
            Edit
          </button>
        </div>
      ))}
    </FormikProvider>
  );
}

export default App2;