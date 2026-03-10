import { useState } from "react";

const Mult = () => {

  const [mult, setmult] = useState({});
  const [list, setlist] = useState([1]);
  const [show, setshow] = useState([]);

  const change = (e) => {
    setmult(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const add = () => {
    setlist(prev => [...prev, prev.length + 1]);
  };

  const showdata = () => {
    setshow(prev => [...prev, mult]);
  };

  return (
    <div>

      {list.map((d, i) => (
        <div key={i}>
          <input
            type="text"
            name={`h${i + 1}`}
            value={mult[`h${i + 1}`] || ""}
            onChange={change}
          />
        </div>
      ))}

      <button onClick={add}>ADD</button>
      <button onClick={showdata}>Submit</button>

      {show.map((d, i) => (
        <div key={i}>
          {JSON.stringify(d)}
        </div>
      ))}

    </div>
  );
};

export default Mult;