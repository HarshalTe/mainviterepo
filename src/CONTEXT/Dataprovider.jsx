import { useState } from "react";
import { create } from "./Createcontext"
const Dataprovider = ({ children }) => {
    const [d, setd] = useState();
    return (


        <create.Provider value={{ d, setd }}>
            {children}
        </create.Provider>
    );
}
export default Dataprovider;  