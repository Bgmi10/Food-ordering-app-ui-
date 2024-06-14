import { configureStore } from "@reduxjs/toolkit";
import addTocartReducer from './addTocartslice'
import Searchcacheslice from "./Searchcacheslice";

const appStore = configureStore({
    reducer:{
        cart: addTocartReducer,
        cacheresults : Searchcacheslice,
    }

})

export default appStore