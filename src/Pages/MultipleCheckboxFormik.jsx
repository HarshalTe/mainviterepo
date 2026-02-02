import { useState } from "react";
import { Formik, Form } from "formik";

const MultipleCheckboxFormik = () => {
  const users = ["Harshal", "Amit", "Rahul"];
  const [data, setData] = useState([]); // created data

  return (
    <Formik
      initialValues={{
        selected: []
      }}
      onSubmit={(values, { resetForm }) => {
        if (values.selected.length === 0) {
          alert("At least ek user select karo");
          return;
        }

        setData([...data, values.selected]);
        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          {users.map((user) => (
            <label key={user} style={{ display: "block" }}>
              <input
                type="checkbox"
                name="selected"
                value={user}
                checked={values.selected.includes(user)}
                onChange={handleChange}
              />
              {user}
            </label>
          ))}

          <br />

          <button type="submit">Create</button>

          <hr />

          {/* Show Created Data */}
          {data.map((item, index) => (
            <div key={index}>
              {index + 1}. {item.join(", ")}
            </div>
          ))}
        </Form>
      )}
    </Formik>
  );
};

export default MultipleCheckboxFormik;
