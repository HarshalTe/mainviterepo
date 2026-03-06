import { useState } from "react";

const M = () => {
    const [indexid,setindexid] = useState(null)
    const [formdata, setformdata] = useState(
        {
            first: "",
            last: "",
            hobby: [],
            skills: [],
            doc1: [],
            doc2: [],
            clr:""
        }
    );
    const [list, setlist] = useState([])
    const change = (e) => {
        const { type, name, value, checked, files } = e.target;
        if (type === "text" || type === "select-one") {
            setformdata(
                (prev) => ({ ...prev, [name]: value })
            )
        }
        if (type === "checkbox") {
            setformdata(
                (prev) => (
                    {
                        ...prev, [name]: checked ? [...prev[name], value] : prev[name].filter((d, i) => { return d !== value })
                    }
                )
            )
        }
        if (type === "file") {
            setformdata(
                (prev) => ({
                    ...prev, [name]: Array.from(files)
                })
            )
        }
    }
    const add = (e) => {
        setlist((prev) => ([
            ...prev, formdata
        ]))
        setformdata({
              first: "",
            last: "",
            hobby: [],
            skills: [],
            doc1: [],
            doc2: [],
            clr:""   
        })
    }
    const prefield = (d, i)=>{
        setformdata({
             first: d.first,
            last: d.last,
            hobby:d.hobby,
            skills:d.skills,
            doc1: d.doc1,
            doc2: d.doc2,
            clr:d.clr    
        })
        setindexid(i)

    }
    const save = ()=>{
        const updated = [...list]
        updated[indexid] = formdata;
        setlist(updated)
         setindexid(null)
         setformdata({
              first: "",
            last: "",
            hobby: [],
            skills: [],
            doc1: [],
            doc2: [],
            clr:""   
        })
    }
 
    return (

        <div>
            <h1>ALL DATA</h1>
            <br />
            <input type="text" name="first" value={formdata.first} onChange={change} />
            <br />
            <input type="text" name="last" value={formdata.last} onChange={change} />
            <br />
            {["coding", "digital-art", "creativity"].map((d, i) => {
                return (
                    <div key={i}>
                        <label>{d}</label>
                        <input type="checkbox" name="hobby" checked={formdata.hobby.includes(d)} value={d} onChange={change} />
                    </div>
                )
            })}
            <br />
            {["code-art", "creativity-art", "securtity"].map((d, i) => {
                return (
                    <div key={i}>
                        <label>{d}</label>
                        <input type="checkbox" name="skills" checked={formdata.skills.includes(d)} value={d} onChange={change} />
                    </div>
                )
            })}
            <br />
            <input type="file" multiple name="doc1" onChange={change} />
            <br />
            <input type="file" multiple name="doc2" onChange={change} />
            <br></br>
            <br></br>
            <select  name="clr"   value={formdata.clr} onChange={change} >
                <option>Select Color</option>
                {["red", "yellow", "green"].map((d3,d8) => {
                     return(
                        
                          <div key={d8}>
                               <option value={d3}>{d3}</option>
                          </div>
                     )
                })}
            </select>
            <br/>
            {indexid !== null?<button onClick={save}>SAVE</button> :<button onClick={add}>ADD</button>}
            <br/>
            {list.map((d, i) => {
                return (
                    <div key={i}>
                        <h1>{d.first}</h1>
                        <br />
                        <h1>{d.last}</h1>
                        <br />
                        {d.hobby.map((h, i1) => {
                            return (
                                <div key={i1}>
                                    <h1>{h}</h1>
                                </div>
                            )
                        })}
                        <br />
                        {
                            d.skills.map((s, i2) => {
                                return (
                                    <div key={i2}>
                                        <h1>{s}</h1>
                                    </div>
                                )
                            })
                        }
                        <br />
                        {d.doc1.map((f1, i3) => {
                            return (
                                <div key={i3}>
                                    <h1>{f1.name}</h1>
                                </div>
                            )
                        })}
                        <br />
                        {d.doc2.map((f2, i3) => {
                            return (
                                <div key={i3}>
                                    <h1>{f2.name}</h1>
                                </div>
                            )
                        })}
                        <br></br>
                          <h1>{d.clr}</h1>
                          <br/>
                          <button onClick={()=>prefield(d, i)}>UPDATE</button>

                    </div>
                )
            })}



        </div>
    )
}
export default M;