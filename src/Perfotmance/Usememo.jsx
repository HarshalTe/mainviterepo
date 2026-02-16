import { useMemo } from "react"


export const Usememo = (myval,stateval)=>{
    const val = useMemo(()=>{
       return myval + 10;
    },[stateval, myval])

    return [val]

} 