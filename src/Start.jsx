import { useState } from "react";

const Start = () => {
    const [formdata, setformdata] = useState({
        fname: "",
        lname: "",
        hobbi: [],
        sub: [],
        doc1: [],
        doc2: [],
        gender: ""
    })
    const [show, setshow] = useState([])
    const change = (e) => {
        const { type, name, value, checked, files } = e.target;
        if (type === "text") {
            setformdata({...formdata,[name]:value})
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
            setformdata((prev) => ({ ...prev,[name]: Array.from(files) }))
        }
        if (type === "radio") {
    setformdata((prev) => ({
        ...prev,
        [name]: value
    }));
}
    }
    const add = () => {
        setshow((prev) => ([...prev, formdata]))
    }

    return (
        <div>
            <input type="text" placeholder="first name" name="fname" value={formdata.fname} onChange={change} />
            <br />
            <input type="text" placeholder="last name" name="lname" value={formdata.lname} onChange={change} />
            <br />
            {["coding", "digital-art", "painting"].map((h, hi) => {
                return (
                    <div key={hi}>
                        <label>{h}</label>
                        <input type="checkbox" name="hobbi" checked={formdata.hobbi.includes(h)} value={h} onChange={change} />
                    </div>
                )
            })}
            <br />
            {["cs", "drwing", "creaticity"].map((s, si) => {
                return (
                    <div key={si}>
                        <label>{s}</label>
                        <input type="checkbox" name="sub" checked={formdata.sub.includes(s)} value={s} onChange={change} />
                    </div>
                )
            })}
            <br />
            <input type="file" name="doc1" multiple onChange={change} />
            <br />
            <input type="file" name="doc2" multiple onChange={change} />
            <br />
            {["male", "female", "other"].map((g, gi) => {
                return (
                    <div key={gi}>
                        <label>{g}</label>
                        <input type="radio" name="gender" value={g} onChange={change}   checked={formdata.gender === g} />
                    </div>
                )
            })}
            <button onClick={add}>ADD DATA</button>
            <br />
            <br />
            {show.map((fd, fi) => {

                return (
                    <div key={fi}>
                        <h1>{fd.fname + " " + fd.lname}</h1>
                        <br />
                        {fd.hobbi.map((d1, di1) => {
                            return (
                                <div key={di1}>
                                    <h1>{d1}</h1>
                                </div>
                            )
                        })}
                        <br />
                        <br />
                        {fd.sub.map((d2, di2) => {
                            return (
                                <div key={di2}>
                                    <h1>{d2}</h1>
                                </div>
                            )
                        })}
                        <br />
                        <br />
                        {fd.doc1.map((d3, di3) => {
                            return (
                                <div key={di3}>
                                    <h1>{d3.name}</h1>
                                </div>
                            )
                        })}
                        <br />
                           <br />
                        {fd.doc2.map((d4, di4) => {
                            return (
                                <div key={di4}>
                                    <h1>{d4.name}</h1>
                                </div>
                            )
                        })}
                        <br />
                        <h1>{fd.gender}</h1>

                    </div>
                )


            })}
        </div>
    );
}
export default Start;