import { useState } from "react";

const MultipleCheckbox = () => {
  const users = ["Harshal", "Amit", "Rahul"];

  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]); // created data

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    console.log(value, checked);

    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  const handleCreate = () => {
    if (selected.length === 0) {
      alert("At least ek user select karo");
      return;
    }

    console.log(selected);

    setData([...data, selected]);
    setSelected([]);
  };

  return (
    <div>
      {users.map((user) => (
        <label key={user} style={{ display: "block" }}>
          <input
            type="checkbox"
            value={user}
            checked={selected.includes(user)}
            onChange={handleChange}
          />
          {user}
        </label>
      ))}

      <br />

      <button onClick={handleCreate}>Create</button>

      <hr />

      {/* Show Created Data */}
      {data.map((item, index) => (
        <div key={index}>
          {index + 1}. {item.join(", ")}
        </div>
      ))}
    </div>
  );
};

export default MultipleCheckbox;







// import { useState } from "react";

// const MultipleCheckbox = () => {
//   const users = ["Harshal", "Amit", "Rahul"];
//   const [selected, setSelected] = useState([]);
//   const [data, setData] = useState([]); // created data

//   const handleChange = (value) => {
//     console.log(value + "------------------------  ---")
//     if (selected.includes(value)) {
//       setSelected(selected.filter((item) => item !== value));  
//     } else {
//       setSelected([...selected, value]);
//     }
//   };

//   const handleCreate = () => {
//     if (selected.length === 0) {
//       alert("At least ek user select karo");
//       return;
//     }

//     console.log(selected)

//     setData([...data, selected]);
//     setSelected([]);
  
//   };

//   return (
//     <div>
//       {users.map((user) => (
//         <label key={user}>
//           <input
//             type="checkbox"
//             checked={selected.includes(user)}
//             onChange={() => handleChange(user)}
//           />
//           {user}
//         </label>
//       ))}

//       <br />

//       <button onClick={handleCreate}>Create</button>

//       <hr />

//       {/* Show Created Data */}
//       {data.map((item, index) => (
//         <div key={index}>
//           {index + 1}. {item.join(", ")}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MultipleCheckbox;
  



