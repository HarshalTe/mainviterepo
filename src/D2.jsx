import { useState } from "react";

const D2 = () => {
    const [formdata, setformdata] = useState({
        first: "",
        last: "",
        hobbies: [],
        skills: [],
    })
    const [list, setlist] = useState([]);
    const handlechange = (e) => {
        const {type,name,value,checked} = e.target;
        if(type === "text")
        {
            setformdata((prev)=>({...prev,[name]:value}));
        }
        if(type === "checkbox")
        {
            setformdata((prev)=>({...prev,[name]:checked ? [...prev[name],value]:prev[name].filter((d,i)=>{return d !== value})}));
        }
    }
    const add = ()=>{
        setlist((prev)=>([...prev,formdata])) 
        setformdata({ first: "",
        last: "",
        hobbies: [],
        skills: [],
   })
    }
    const prefeild = (d,i)=>{
        setformdata(list[i])
    }
    return (
        <div>
            <input type="text" name="first" placeholder="First Name" value={formdata.first} onChange={handlechange} />
            <br />
            <input type="text" name="last" placeholder="Last Name" value={formdata.last} onChange={handlechange} />
            <br />
            {
                ["coding", "digitalart", "creativity"].map((h, hi) => {
                    return (
                        <div key={hi}>
                            <label>{h}</label>
                            <input type="checkbox" name="hobbies" checked={formdata.hobbies.includes(h)} value={h} onChange={handlechange} />
                        </div>
                    )
                })
            }
            <br />
            {
                ["marathi", "hindi", "english"].map((s, si) => {
                    return (
                        <div key={si}>
                            <label>{s}</label>
                            <input type="checkbox" name="skills" checked={formdata.skills.includes(s)} value={s} onChange={handlechange} />
                        </div>
                    )
                })
            }
            <br/>
            <button onClick={add}>ADD</button>
            {
                list.map((d,i)=>{
                    return(
                        <div key={i}>
                              <input type="text" name="first" placeholder="First Name" value={d.first} readOnly/>
            <br />
            <input type="text" name="last" placeholder="Last Name" value={d.last} readOnly />
            <br />
            {
                d.hobbies.map((h, hi) => {
                    return (
                        <div key={hi}>
                            <label>{h}</label>
                            <input type="checkbox" name="hobbies" checked={formdata.hobbies.includes(h)} value={h} readOnly />
                        </div>
                    )
                })
            }
            <br />
            {
                d.skills.map((s, si) => {
                    return (
                        <div key={si}>
                            <label>{s}</label>
                            <input type="checkbox" name="skills" checked={formdata.skills.includes(s)} value={s} readOnly />
                        </div>
                    )
                })
            }
            <button onClick={()=>prefeild(d,i)} >UPDATE</button>

                    <br/>
                    

                        </div>
                    )
                })
            }

        </div>
    )
}
export default D2;