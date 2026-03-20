import { configureStore } from "@reduxjs/toolkit";
import crudslice from './crudslice'
import Newcrudslice from './Newcrudslice'
import taskslice from './taskslice'
const store = configureStore({
   reducer:{
      crud:crudslice,
      newcrud:Newcrudslice,
      task:taskslice
   }
     
})
export default store;