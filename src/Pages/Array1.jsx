
import { useState } from "react";

const Array1 = () => {
  const hobby = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const [userdata, setUserdata] = useState([
    { id: "1", name: "harshal", hob: "h1" },
    { id: "2", name: "vivek", hob: "h2" },
    { id: "3", name: "harshal2", hob: "h3" },
    { id: "4", name: "kabir", hob: "h4" },
    { id: "5", name: "sandip", hob: "h5" },
    { id: "6", name: "anshu", hob: "h6" },
  ]);

  // 👇 event yahin receive ho raha hai
  const handleHobbyChange = (e, id) => {
    const value = e.target.value;

    const updated = userdata.map((u) =>
      u.id === id ? { ...u, hob: value } : u
    );

    setUserdata(updated);
  };

  return (
    <div>
      {userdata.map((u) => (
        <div key={u.id}>
          <input type="text" value={u.name} readOnly />

          <select
            value={u.hob}
            onChange={(e) => handleHobbyChange(e, u.id)}
          >
            <option value="">select hobby</option>
            {hobby.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Array1;







// import { useState } from "react";

// const Array1 = () => {
//   const hobby = ["h1", "h2", "h3", "h4", "h5", "h6"];

//   const [userdata, setUserdata] = useState([
//     { id: "1", name: "harshal", hob: "h1" },
//     { id: "2", name: "vivek", hob: "h2" },
//     { id: "3", name: "harshal2", hob: "h3" },
//     { id: "4", name: "kabir", hob: "h4" },
//     { id: "5", name: "sandip", hob: "h5" },
//     { id: "6", name: "anshu", hob: "h6" },
//   ]);

//   const handleHobbyChange = (id, value) => {
//     const updated = userdata.map((u) =>
//       u.id === id ? { ...u, hob: value } : u
//     );
//     setUserdata(updated);
//   };

//   return (
//     <div>
//       {userdata.map((u) => (
//         <div key={u.id}>
//           <input type="text" value={u.name} readOnly />

//           <select
//             value={u.hob}
//             onChange={(e) => handleHobbyChange(u.id, e.target.value)}
//           >
//             <option value="">select hobby</option>
//             {hobby.map((h) => (
//               <option key={h} value={h}>
//                 {h}
//               </option>
//             ))}
//           </select>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Array1;


