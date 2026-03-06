import { useState } from "react";

const M2 = () => {

  const [rows, setRows] = useState([
    { first: "", last: "", dropdown: "", checkbox1: false, checkbox2: false }
  ]);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      { first: "", last: "", dropdown: "", checkbox1: false, checkbox2: false }
    ]);
  };

  return (
    <div>

      {rows.map((r, i) => (
        <div key={i}>

          <input placeholder="First Name" type="text" />

          <input placeholder="Last Name" type="text" />

          <select>
            <option>Choose Color</option>
            {["red", "yellow", "green"].map((d, j) => (
              <option key={j}>{d}</option>
            ))}
          </select>

          <div>
            {["aa", "vv", "dd"].map((k, ki) => (
              <label key={ki}>
                {k}
                <input type="checkbox" />
              </label>
            ))}
          </div>

          <div>
            {["aa1", "vv2", "dd3"].map((k1, ki1) => (
              <label key={ki1}>
                {k1}
                <input type="checkbox" />
              </label>
            ))}
          </div>

          <hr />

        </div>
      ))}

      <button onClick={addRow}>ADD</button>

    </div>
  );
};

export default M2;