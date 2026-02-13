import { useState } from "react";

const Re = () => {
    const [id,setid] = useState(null);
    const [userdata, setusedata] = useState({
        hobbi: [],
        sub: []
    });

    const [show, setshow] = useState([]);


    const change = (e) => {
        setusedata(
            (prev) => (
                {
                    ...prev,
                    [e.target.name]: e.target.checked ?
                        [...prev[e.target.name], e.target.value] :
                        prev[e.target.name].filter((d) => {
                            return d !== e.target.value
                        })

                }

            )
        )
    }


    const add = () => {
        setshow(
            (prev) => ([
                ...prev,
                userdata
            ])
        )

        setusedata({
            hobbi: [],
            sub: []
        })
    }

    const prefield = (data,index)=>{
        setid(index)
        setusedata({
             hobbi: data.hobbi,
             sub: data.sub  
        })
    }


//    const  update = ()=>{
//         const updated = [...show]
//        updated[id] = {
//                hobbi:userdata.hobbi ,
//              sub:userdata.sub   
//        }
//        setshow(updated);
//        setid(null);
//        setusedata(
//            {
//                hobbi: [],
//                sub: []
//            }
//        )
//    }


// const update = () => {
//     const newdata = [...show];

//     newdata[id] = userdata;

//     setshow(newdata);
//     setid(null);

//     setusedata({
//         hobbi: [],
//         sub: []
//     });
// };

const update = () => {
    setshow(prev =>
        prev.map((item, index) =>
            index === id ? userdata : item
        )
    );

    setid(null);
    setusedata({ hobbi: [], sub: [] });
};




    return (
        <div>
            <h1>USEDATA</h1>
            {["coding", "digitalart", "drawing"].map((d, i) => {
                return (
                    <div key={i}>
                        <label>{d}</label>
                        <input type="checkbox" name="hobbi" value={d} checked={userdata.hobbi.includes(d)} onChange={change} />
                    </div>
                );
            })}
            <br />
            {["marathi", "english", "hindi"].map((s, si) => {
                return (
                    <div key={si}>
                        <label>{s}</label>
                        <input type="checkbox" name="sub" value={s} checked={userdata.sub.includes(s)} onChange={change} />
                    </div>
                );
            })}
            <br />
            {id !== null ?  <button onClick={update}>SAVE</button> : <button onClick={add}>ADD</button>}
            <br></br>
            {
                show.map((data, index) => {

                    return (
                        <div key={index}>
                            <h2>Hobbies:</h2>

                            {data.hobbi.map((item, i) => {
                                return <h4 key={i}>{item}</h4>;
                            })}

                            <h2>Subjects:</h2>

                            {data.sub.map((item, i) => {
                                return <h4 key={i}>{item}</h4>;
                            })}
                            <br/>
                            <button onClick={()=>prefield(data,index)}>UPDATE</button>
                        </div>
                    );



                })
            }


        </div>
    );
}
export default Re;