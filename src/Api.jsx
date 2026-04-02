import { useEffect, useState } from "react";
import { Url } from "./Url";

const Api = () => {
    const [formdata, setformdata] = useState({
        firstname: "",
        lastname: "",
        hobbies: [],
        subject: [],
        doc1: [],
        doc2: [],

    })
    const [list, setlist] = useState([])
    const handlechange = (e) => {
        const { name, value, checked, type, files } = e.target;
        if (type === "text") {
            setformdata((prev) => ({ ...prev, [name]: value }))
        }
        if (type === "checkbox") {
            setformdata((pre) => ({ ...pre, [name]: checked ? [...pre[name], value] : pre[name].filter((d,fi) => { return d !== value }) }))
        }
        if (type === "file") {
            // setformdata((prev) = ({ [name]: Array.from(files) }))
                setformdata(prev => ({
            ...prev,
            [name]: Array.from(files).map(f => f.name)
        }));
        }
    }
    const fetchuser = async () => {
        try {
            const res = await fetch(Url)
            const data = await res.json()
            setlist(data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{fetchuser()},[])
    const add = async () => {
        try {
            const res = await fetch(Url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formdata)
            })
            const data = await res.json()
            setlist([...list, data])

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <input type="text" placeholder="First Name" name="firstname" value={formdata.firstname} onChange={handlechange} />
            <br />
            <input type="text" placeholder="Last Name" name="lastname" value={formdata.lastname} onChange={handlechange} />
            <br />
            {["coding", "creativity", "digital-art"].map((h, hi) => {
                return (
                    <div key={hi}>
                        <label>{h}</label>
                        <input type="checkbox" checked={formdata.hobbies.includes(h)} name="hobbies" value={h} onChange={handlechange} />
                    </div>
                )
            })}
            <br />
            {["drawing", "painting", "computer-science"].map((s, si) => {
                return (
                    <div key={si}>
                        <label>{s}</label>
                        <input type="checkbox" checked={formdata.subject.includes(s)} name="subject" value={s} onChange={handlechange} />
                    </div>
                )
            })}
            <br />
            <input type="file" multiple name="doc1" onChange={handlechange} />
            <br />
            <input type="file" multiple name="doc2" onChange={handlechange} />
            <br />
            <button onClick={add}>ADD</button>
            <br />
            <br />
            {
                list.map((d)=>{
                   return(
                      <div key={d.id}>
                           <h1>{d.firstname}</h1>
                           <br/>
                           <h1>{d.lastname}</h1>
                           <br/>
                           {d.hobbies.map((d2,d2i)=>{
                                return(
                                    <div key={d2i}>
                                        <h1>{d2}</h1>
                                    </div>
                                )
                           })}
                           <br/>
                           {d.subject.map((d3,d3i)=>{
                               return(
                                   <div key={d3i}>
                                        <h1>{d3}</h1>
                                   </div>
                               )
                           })}
                           <br></br>
                           {
                            d.doc1.map((d4,d4i)=>{
                                   return(
                                    <div key={d4i}>
                                         <h1>{d4}</h1> 
                                    </div>
                                   )
                            })
                           }
                           <br/>
                             <br></br>
                           {
                            d.doc2.map((d5,d5i)=>{
                                   return(
                                    <div key={d5i}>
                                         <h1>{d5}</h1> 
                                    </div>
                                   )
                            })
                           }

                      </div>
                   ) 
                })
            }

        </div>
    )
}
export default Api;