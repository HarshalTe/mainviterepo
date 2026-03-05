import { BrowserRouter, Route, Routes } from "react-router-dom"
import Showid from "./Showid";
import Click from "./Click";

const Mainroute = ()=>{
    return(
        <div>
              <BrowserRouter>
    <Routes>
         {/* <Route path="/" element={<Click/>}/> */}
        <Route path="show/:id" element={<Showid/>}/>
       
    </Routes>
  </BrowserRouter>
        </div>
    )
}
export default Mainroute;
