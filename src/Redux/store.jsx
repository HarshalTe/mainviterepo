import { configureStore } from "@reduxjs/toolkit";
import crudslice from './crudslice'
import Newcrudslice from './Newcrudslice'
const store = configureStore({
   reducer:{
      crud:crudslice,
      newcrud:Newcrudslice
   }
     
})
export default store;