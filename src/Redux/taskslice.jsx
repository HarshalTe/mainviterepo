import { createSlice } from "@reduxjs/toolkit";

const taskslice = createSlice({
    name:"task",
    initialState:{
        tasklist:[]
    },
    reducers:{
        add :(state,action)=>{
            state.tasklist.push(action.payload) 
        
        },
        up:(state,action)=>{
           const {task,id} = action.payload;
        //    const updated = state.tasklist;
        //    updated[id] = task

           state.tasklist =  state.tasklist.map((d,i)=>{
             return  id === i ? task : d
           })
        }
    }
})
export const {add,up} = taskslice.actions;   
export  default  taskslice.reducer