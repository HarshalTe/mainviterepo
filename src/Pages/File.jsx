import { useState } from "react";

const File = () => {
    const [documents, setdocuments] = useState({
        doc1: [],
        doc2: [],
        doc3: [],
        doc4: [],
    })
    const [show, setshow] = useState([])
    const ch = (e) => {
        const alldoc = Array.from(e.target.files);
        setdocuments({ ...documents, [e.target.name]: alldoc })

    }
    const add = () => {
        setshow([...show, { ...documents }])
        setdocuments({
            doc1: [],
            doc2: [],
            doc3: [],
            doc4: [],
        })

    }
    return (
        <div>
            <h1>DOC</h1>
            <input type="file" name="doc1" multiple onChange={ch} />
            <br />
            <input type="file" name="doc2" multiple onChange={ch} />
            <br />
            <input type="file" name="doc3" multiple onChange={ch} />
            <br />
            <input type="file" name="doc4" multiple onChange={ch} />
            <br />
            <button onClick={add}>ADD</button>
            {
                show.map((d, di) => (
                    <div key={di}>


                        <b>Doc1</b>
                        {d.doc1.map((f, i) => (

                            <p key={i}>{f.name}</p>
                        ))}

                        <b>Doc2</b>
                        {d.doc2.map((f, i) => (
                            <p key={i}>{f.name}</p>
                        ))}

                        <b>Doc3</b>
                        {d.doc3.map((f, i) => (
                            <p key={i}>{f.name}</p>
                        ))}

                        <b>Doc4</b>
                        {d.doc4.map((f, i) => (
                            <p key={i}>{f.name}</p>
                        ))}

                        <hr />
                    </div>
                ))
            }



        </div>
    );
}
export default File;