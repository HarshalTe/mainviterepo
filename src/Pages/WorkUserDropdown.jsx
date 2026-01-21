import { useState } from "react";

const WorkUserDropdown = () => {
  const works = ["Design", "Development", "Testing"];
  const usersList = ["Harshal", "Amit", "Rahul", "Sneha"];

  const [form, setForm] = useState({
    work: "",
    users: []
  });

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  // work select (optional)
  const handleWorkChange = (e) => {
    setForm({ ...form, work: e.target.value });
  };

  // toggle users
  const toggleUser = (user) => {
    const updatedUsers = form.users.includes(user)
      ? form.users.filter((u) => u !== user)
      : [...form.users, user];
  
    setForm({ ...form, users: updatedUsers });
  };

  // CREATE (work optional)
  const handleCreate = () => {
    if (form.users.length === 0) {
      alert("At least ek user select karo");
      return;
    }

    setData([...data, form]);
  };

  return (
    <div style={{ padding: 20, width: 300 }}>
      <h3>Create Work & Assign Users</h3>

      {/* Work Dropdown (OPTIONAL) */}
      <select value={form.work} onChange={handleWorkChange}>
        <option value="">Select Work (Optional)</option>
        {works.map((work) => (
          <option key={work}>{work}</option>
        ))}
      </select>

      <br /><br />

      {/* Users Dropdown */}
      <div style={{ position: "relative" }}>
        <div
          onClick={() => setOpen(!open)}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            cursor: "pointer",
            background: "#fff"
          }}
        >
          {form.users.length === 0
            ? "Select Users"
            : `${form.users.length} user selected`}
        </div>

        {open && (
          <div
            style={{
              border: "1px solid #ccc",
              position: "absolute",
              width: "100%",
              background: "#fff",
              zIndex: 1
            }}
          >
            {usersList.map((user) => (
              <label key={user} style={{ display: "block", padding: "5px" }}>
                <input
                  type="checkbox"
                  checked={form.users.includes(user)}
                  onChange={() => toggleUser(user)}
                />{" "}
                {user}
              </label>
            ))}
          </div>
        )}
      </div>

      <br />

      <button onClick={handleCreate}>Create</button>

      <hr />

      {/* Show Created Data */}
      {data.map((item, index) => (
        <div key={index}>
          <b>{item.work || "No Work Selected"}</b> →{" "}
          {item.users.join(", ")}
        </div>
      ))}
    </div>
  );
};

export default WorkUserDropdown;





// import { useState } from "react";

// const WorkUserDropdown = () => {
//   const works = ["Design", "Development", "Testing"];
//   const usersList = ["Harshal", "Amit", "Rahul", "Sneha"];
//   const [indexid,setindexid] = useState(null)

//   // SINGLE STATE
//   const [form, setForm] = useState({
//     work: "",
//     users: []
//   });

//   const [data, setData] = useState([]);
//   const [open, setOpen] = useState(false); // dropdown open/close

//   // work select
//   const handleWorkChange = (e) => {
//     setForm({ ...form, work: e.target.value });
//   };

// //    const toggleUser = (user) => {
// //   setForm((form) => ({
// //     ...form,
// //     users: form.users.includes(user)
// //       ? form.users.filter((u) => u !== user) // remove
// //       : [...form.users, user] // add
// //   }));
// // };


// const toggleUser = (user) => {
//   let updatedUsers;

//   if (form.users.includes(user)) {
//     // remove
//     updatedUsers = form.users.filter((u) => u !== user);
//   } else {         
//     // add
//     updatedUsers = [...form.users, user];
//   }

//   setForm({
//     ...form,
//     users: updatedUsers
//   });
// };


//   // remove selected user
//   const removeUser = (user) => {
//     setForm({
//       ...form,
//       users: form.users.filter((u) => u !== user)
//     });
//   };

//   // create
//   const handleCreate = () => {
//     if (!form.work || form.users.length === 0) {
//       alert("Work aur Users select karo");
//       return;
//     }

//     setData([...data, form]);

//     setForm({ work: "", users: [] });
//     setOpen(false);
//   };

// const prefield = (item, index) => {
//   setForm({
//     work: item.work,
//     users: item.users
//   });

//   setindexid(index);
// };


// const handleUpdate = () => {
//   const updatedData = data.map((item, i) =>
//     i === indexid ? form : item
//   );

//   setData(updatedData);

//   // reset
//   setForm({ work: "", users: [] });
//   setindexid(null);
//   setOpen(false);
  
// };


// const del = (index)=>{
//      const dt = data.filter((_,di)=>{
//        return di !== index
//      })
//      setData(dt);
//    }


// // const handleUpdate = () => {
// //   const updatedData = [...data];   // array copy
// //   updatedData[indexid] = form;     // direct replace by index

// //   setData(updatedData);

// //   // reset
// //   setForm({ work: "", users: [] });
// //   setindexid(null);
// //   setOpen(false);
// // };



//   return (
//     <div style={{ padding: 20, width: 300 }}>
//       <h3>Create Work & Assign Users</h3>

//       {/* Work Dropdown */}
//       <select value={form.work} onChange={handleWorkChange}>
//         <option value="">Select Work</option>
//         {works.map((work) => (
//           <option key={work}>{work}</option>
//         ))}
//       </select>

//       <br /><br />

//       {/* Custom Multi Select */}
//       <div style={{ position: "relative" }}>
//         <div
//           onClick={() => setOpen(!open)}
//           style={{
//             border: "1px solid #ccc",
//             padding: "8px",
//             cursor: "pointer",
//             background: "#fff"
//           }}
//         >
//           {form.users.length === 0
//             ? "Select Users"
//             : `${form.users.length} user selected`}
//         </div>

//         {open && (
//           <div
//             style={{
//               border: "1px solid #ccc",
//               position: "absolute",
//               width: "100%",
//               background: "#fff",
//               zIndex: 1
//             }}
//           >
//             {usersList.map((user) => (
//               <label
//                 key={user}
//                 style={{ display: "block", padding: "5px" }}
//               >
//                 <input
//                   type="checkbox"
//                   checked={form.users.includes(user)}
//                   onChange={() => toggleUser(user)}
//                 />{" "}
//                 {user}
//               </label>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Selected users with remove */}
//       <div style={{ marginTop: 10 }}>
//         {form.users.map((user) => (
//           <span
//             key={user}
//             style={{
//               padding: "4px 8px",
//               margin: 4,
//               background: "#e0e0e0",
//               display: "inline-block"
//             }}
//           >
//             {user}
//             <button
//               onClick={() => removeUser(user)}
//               style={{ marginLeft: 5 }}
//             >
//               ×
//             </button>  
//           </span>
//         ))}
//       </div>

//       <br />

//      {indexid !== null ? (
//   <button onClick={handleUpdate}>SAVE</button>
// ) : (
//   <button onClick={handleCreate}>Create</button>
// )}

//       <hr />

//       {/* Show Data */}
//       {data.map((item, index) => (
//         <div key={index}>
//           <b>{item.work}</b> → {item.users.join(", ")}
//           <button onClick={()=>prefield(item,index)}>UPDATE</button>
//           <button onClick={()=>del(index)}>DELETE</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default WorkUserDropdown;
