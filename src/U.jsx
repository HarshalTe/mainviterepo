import { useRef } from "react";

const U = () => {
  const b = useRef(null);

  const clr = {
    height: "300px",
    width: "300px",
    border: "2px solid red"
  };

  const ch = () => {
    Object.assign(b.current.style, clr);
  };

  return (
    <div>
      <h1>aefs</h1>

      <div ref={b}></div>

      <button onClick={ch}>CHANGE</button>
    </div>
  );
};

export default U;