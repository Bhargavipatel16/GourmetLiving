import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slice/CartSlice"

let Store=configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default Store