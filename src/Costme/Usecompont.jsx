import { Usehoock } from "./Usehoock";

const Usecompont = () => {

    const [inc, dec, data] = Usehoock(20)

    return (
        <div>

            <h1>{data}</h1>
            <button onClick={inc}>ADD</button>
            <button onClick={dec}>MIN</button>


        </div>
    )
}
export default Usecompont;