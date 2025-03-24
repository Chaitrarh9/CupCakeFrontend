import { configureStore } from "@reduxjs/toolkit";
import cupcakeReducer from "./cupcakeSlice";
 
export const store = configureStore({
    reducer: {
        cupcake: cupcakeReducer
    }
});