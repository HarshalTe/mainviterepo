import Cos1 from "./Cos1"

const Cos2 = ()=>{
  const  [count,incriment,decriment,myref,changecolour]  =  Cos1()
    return(
        <div>
               

            <h1>{count}</h1>
            <br></br>  
            <button onClick={incriment}>+</button>
                 <br></br>
            <button onClick={decriment}>-</button>
            <br></br>
            <button ref={myref} onClick={changecolour}>change colour</button>

        </div>
    )
}
export default Cos2;