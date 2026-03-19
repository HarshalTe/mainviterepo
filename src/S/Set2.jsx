import { useEffect, useState } from "react";

const Set2 = () => {
  const [count, setcount] = useState(0);
  const [show, setshow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setcount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setshow(true)}>
        Show Set3
      </button>

      {show && <Set3 p={count} />}
    </div>
  );
};

const Set3 = ({ p }) => {
  const [t, sett] = useState(0);

  useEffect(() => {
    const time = setTimeout(() => {
      sett((pre) => pre + p);
    }, 1000);

    return () => clearTimeout(time);
  }, [p]);

  return (
    <div>
      <h1>{t}</h1>
    </div>
  );
};

export default Set2;
export { Set3 };
