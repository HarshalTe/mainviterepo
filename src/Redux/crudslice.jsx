import { createSlice } from "@reduxjs/toolkit";

const crudslice = createSlice({
    name:"crud",
    initialState:{
       usedata:[] 
    },
    reducers:{
        add:(state,action)=>{
            state.usedata.push(action.payload)
        },
         update: (state, action) => {
      const { userid, info } = action.payload;

      state.usedata = state.usedata.map((u, ui) =>
        ui === userid ? info : u
      );
    },
    del1:(state,action)=>{
         state.usedata = state.usedata.filter((_,dd)=>{
            return dd !== action.payload
         })   
    }
    }  
})
export  const {add,update,del1} = crudslice.actions
export default crudslice.reducer