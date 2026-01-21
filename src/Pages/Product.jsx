import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Product  = ()=>{
       const [first,setfirst] = useState(1)
        const [second,setsecond] = useState(2)
    return(
        <div>
               <h1>Product Componant</h1> 
                <Link to={`shirt/${first}`}>Shirt</Link>
                  <br/>
                <Link  to={`tshirt/${second}`}>Tshirt</Link>
                <br/>
                <Outlet/>

        </div>
    )
}
export default Product;