import { useEffect } from "react";

export const Fun = (d,setnc)=>{
   setnc(d - 5) ;
}
export const mult = (inc,setnc)=>{
  const v   = setnc(inc * 5) ;
  return v;
} 
useEffect(()=>{mult()},[inc])