import { createSlice } from "@reduxjs/toolkit";

const Newcrudslice = createSlice({
    name:"newcrud",
    initialState:{
        userdatalist:[]
    },
    reducers:{
     add:(state,action)=>{
        state.userdatalist.push(action.payload)
     },
     updated:(state,action)=>{
        const {uid,userdata} = action.payload;
        state.userdatalist = state.userdatalist.map((d,di)=>{
          return di === uid ? userdata : d
        })
     },
     dt:(state,action)=>{
          state.userdatalist = state.userdatalist.filter((md,mi)=>{
            return  mi !== action.payload;
          })
     }
    }

})
export const {add,updated,dt} = Newcrudslice.actions;
export default Newcrudslice.reducer;