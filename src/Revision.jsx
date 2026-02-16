import { useState } from "react";

const Revision = () => {
    const [all, setall] = useState({
        hobbi: [],
        sub: [],
        doc1: [],
        doc2: [],
        first: "",
        second: ""
    })
    const [list, setlist] = useState([])
    const [index, setindex] = useState(null)
    const handlechange = (e) => {
        const { type, value, name, checked, files } = e.target;
        if (type === "checkbox") {
            setall((prev) => ({
                ...prev, [name]: checked ? [...prev[name], value] : prev[name].filter((pd, pi) => { return pd !== value })
            }))
        }
        if (type === "file") {
            setall((prev) => (
                {
                    ...prev, [name]: Array.from(files)
                }
            ))
        }
        if (type === "text") {
            setall((prev) => ({
                ...prev, [name]: value
            }))
        }
    }
    const add = () => {
        setlist((prev) => (
            [
                ...prev, all
            ]
        ))  
        setall(
            {

                hobbi: [],
                sub: [],
                doc1: [],
                doc2: [],
                first: "",
                second: ""

            }
        )
    }
    const prefield = (d, i) => {
        setall(
            {
                hobbi: d.hobbi,
                sub: d.sub,
                doc1: d.doc1,
                doc2: d.doc2,
                first: d.first,
                second: d.second
            }
        )
        setindex(i)
    }

    const update = () => {
        const updated = [...list]
        updated[index] = all;
        setlist(updated)
        setindex(null)
        setall(
            {

                hobbi: [],
                sub: [],
                doc1: [],
                doc2: [],
                first: "",
                second: ""

            }
        )

    }
    return (
        <div>
            <h1>ALL DATA</h1>
            <br />
            {["coding", "digital-art", "creativity"].map((h, i1) => {
                return (
                    <div key={i1}>
                        <label><b>{h}</b></label>
                        <input type="checkbox" name="hobbi" value={h} checked={all.hobbi.includes(h)} onChange={handlechange} />
                    </div>
                );
            })}
            <br />
            {["eng", "marathi", "hindi"].map((s, i2) => {
                return (
                    <div key={i2}>
                        <label><b>{s}</b></label>
                        <input type="checkbox" name="sub" value={s} checked={all.sub.includes(s)} onChange={handlechange} />
                    </div>
                );
            })}
            <br />
            <input multiple name="doc1" type="file" onChange={handlechange} />
            <br />
            <input multiple name="doc2" type="file" onChange={handlechange} />
            <br />
            <br />
            <input type="text" name="first" value={all.first} placeholder="Firstname" onChange={handlechange} />
            <br />
            <br />
            <input type="text" name="second" value={all.second} placeholder="Lastname" onChange={handlechange} />
            <br />
            {index !== null ? <button onClick={update}>SAVE</button> : <button onClick={add}>ADD DATA</button>}
            <br />
            {list.map((d, i) => {
                return (
                    <div key={i}>
                        {d.hobbi.map((d1, i2) => {
                            return (
                                <div key={i2}>
                                    {d1}
                                </div>
                            )
                        })}
                        <br />
                        <br />
                        {d.sub.map((d3, i3) => {
                            return (
                                <div key={i3}>
                                    {d3}
                                </div>
                            )
                        })}
                        <br />
                        <br />
                        {d.doc1.map((d4, i4) => {
                            return (
                                <div key={i4}>
                                    {d4.name}
                                </div>
                            )
                        })}
                        <br />
                        <br />
                        {d.doc2.map((d5, i5) => {
                            return (
                                <div key={i5}>
                                    {d5.name}
                                </div>
                            )
                        })}
                        <br />
                        <br />
                        <div>{d.first}</div>
                        <br />
                        <br />
                        <div>{d.second}</div>
                        <br />
                        <br />
                        <button onClick={() => prefield(d, i)}>UPDATE DATA</button>

                    </div>
                )
            })}
        </div>
    )
}
export default Revision;