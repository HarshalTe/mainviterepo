import { useState } from "react";

const CRUD = () => {
    const [datalist, setdatalist] = useState([]);
    const [updateid, setupdateid] = useState(null);

    const roles = ["coder", "digital artist", "animator"];
    const hobbiesdata = ["music", "sports", "coding", "drawing"];

    const [user, setuser] = useState({
        first_name: "",
        last_name: "",
        role: "",
        hobbies: []
    });

    // 🔥 SINGLE SELECT BUT MULTIPLE ADD / REMOVE
    const change = (e) => {
        const { name, value } = e.target;

        if (name === "hobbies") {
            setuser((prev) => {
                const exists = prev.hobbies.includes(value);

                return {
                    ...prev,
                    hobbies: exists
                        ? prev.hobbies.filter(h => h !== value) // ❌ remove
                        : [...prev.hobbies, value]              // ✅ add
                };
            });
        } else {
            setuser({ ...user, [name]: value });
        }
    };

    const submit = (e) => {
        e.preventDefault();
        setdatalist([...datalist, user]);
        resetForm();
    };

    const up = (d, di) => {
        setupdateid(di);
        setuser(d);
    };

    const updated = (e) => {
        e.preventDefault();
        const newdata = [...datalist];
        newdata[updateid] = user;
        setdatalist(newdata);
        setupdateid(null);
        resetForm();
    };

    const del = (di) => {
        setdatalist(datalist.filter((_, index) => index !== di));
    };

    const resetForm = () => {
        setuser({
            first_name: "",
            last_name: "",
            role: "",
            hobbies: []
        });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>CRUD – Single Select Multiple Hobbies</h2>

            <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={user.first_name}
                onChange={change}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={user.last_name}
                onChange={change}
            />
            <br /><br />

            {/* ✅ SINGLE SELECT */}
            <select name="hobbies" onChange={change}>
                <option value="">Select Hobby</option>
                {hobbiesdata.map((h, i) => (
                    <option key={i} value={h}>{h}</option>
                ))}
            </select>

            {/* ✅ SELECTED HOBBIES */}
            <p>
                <b>Selected Hobbies:</b>{" "}
                {user.hobbies.map((h, i) => (
                    <span key={i} style={{ marginRight: "8px" }}>
                        {h} ❌
                    </span>
                ))}
            </p>

            <select name="role" value={user.role} onChange={change}>
                <option value="">Select Role</option>
                {roles.map((r, i) => (
                    <option key={i} value={r}>{r}</option>
                ))}
            </select>

            <br /><br />

            {updateid !== null ? (
                <button onClick={updated}>SAVE</button>
            ) : (
                <button onClick={submit}>SUBMIT</button>
            )}

            <hr />

            {datalist.map((d, di) => (
                <div key={di} style={{ border: "1px solid gray", marginBottom: "10px", padding: "10px" }}>
                    <p><b>Name:</b> {d.first_name} {d.last_name}</p>
                    <p><b>Role:</b> {d.role}</p>
                    <p><b>Hobbies:</b> {d.hobbies.join(", ")}</p>

                    <button onClick={() => up(d, di)}>UPDATE</button>
                    <button onClick={() => del(di)} style={{ marginLeft: "10px" }}>
                        DELETE
                    </button>
                </div>
            ))}
        </div>
    );
};

export default CRUD;








// import { useState } from "react";
// const CRUD = () => {
//     const [datalist, setdatalist] = useState([]);
//     const [updateid, setupdateid] = useState(null)
//     const roles = ["coder", "digital artist", "animator"]
//     const hobbiesdata = ["coder", "digital artist", "animator"]
//     const [user, setuser] = useState(
//         {
//             first_name: "",
//             last_name: "",
//             role: "",
//             hobbies:[]
//         }
//     )
//     const change = (e) => {
//         setuser({ ...user, [e.target.name]: e.target.value })
//     }
//     const submit = (e) => {
//         e.preventDefault();
//         setdatalist([...datalist, user])
//         setuser(
//             {
//                 first_name: "",
//                 last_name: "",
//                 role: ""
//             }
//         )
//     }
//     const up = (d, di) => {

//         setupdateid(di)
//         setuser({
//             first_name: d.first_name,
//             last_name: d.last_name,
//             role: d.role
//         })

//     }
//     const updated = (e) => {
//         e.preventDefault();
//         const newdata = [...datalist]
//         newdata[updateid] = user;
//         setdatalist(newdata);
//         setupdateid(null);
//         setuser(
//             {
//                 first_name: "",
//                 last_name: "",
//                 role: ""
//             }
//         )
//     }
//     const del = (di) => {


//         setdatalist(datalist.filter((d, index) => {
//             return di !== index
//         }))

//     }


//     return (
//         <div>
          

//             <h1>CRUD OPRATION</h1>
//             <br></br>
//             <input type="text" placeholder="First Name" name="first_name" value={user.first_name} onChange={change} />
//             <br></br>
//             <input type="text" placeholder="Last Name" name="last_name" value={user.last_name} onChange={change} />
//             <br></br>
//                    <select onChange={change} name="hobbies" value={user.hobbies}>
//                 <option value="">Select hobbies</option>
//                 {
//                     hobbiesdata.map((h, hi) => {
//                         return (
//                             <div key={hi}>
//                                 <option value={h}>{h}</option>
//                             </div>
//                         )
//                     })
//                 }
//             </select>
//             <br></br>
//             <select onChange={change} name="role" value={user.role}>
//                 <option value="">Select Role</option>
//                 {
//                     roles.map((r, ri) => {
//                         return (
//                             <div key={ri}>
//                                 <option value={r}>{r}</option>
//                             </div>
//                         )
//                     })
//                 }
//             </select>
//             <br></br>
//             {updateid !== null ? <button onClick={updated}>SAVE</button> : <button onClick={submit}>SUBMIT</button>}
//             <br></br>
//             {datalist.map((d, di) => {
//                 return (
//                     <div key={di}>

//                         <h1>{d.first_name}</h1>
//                         <br />
//                         <h1>{d.last_name}</h1>
//                         <br />
//                         <h1>{d.role}</h1>
//                         <br />
//                         <br />
//                         <button onClick={() => up(d, di)}>UPDATE</button>
//                         <br></br>

//                         <br />
//                         <button onClick={() => del(di)}>DELETE</button>
//                     </div>
//                 );
//             })}


//         </div>
//     );
// }
// export default CRUD;