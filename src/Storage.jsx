import Cookies from "js-cookie";
import { useState } from "react";

const Storage = () => {

  const [token, setToken] = useState("");

  const click = () => {

    // random token generate
    const randomToken = Math.random().toString(36).substring(2);

    // store in cookie
    Cookies.set("token", randomToken, { expires: 7 });
    localStorage.setItem("token2",randomToken)

    // get cookie
    const getToken = Cookies.get("token");
    const getToken2 = localStorage.getItem("token2");

    setToken(getToken);
     setToken(getToken2);
  };

  return (
    <div>
      <h1>Random Token</h1>

      <button onClick={click}>Generate Token</button>

      <h3>Token: {token}</h3>
    </div>
  );
};

export default Storage;