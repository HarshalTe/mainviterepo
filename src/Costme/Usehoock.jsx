import { useState } from "react"

export const Usehoock = (d) => {
      const [data,setdata] = useState(d)

    const inc = () => {
   setdata(data + 1)
}

const dec = () => {
   setdata(data - 1)
}

    return [inc,dec,data]
}
