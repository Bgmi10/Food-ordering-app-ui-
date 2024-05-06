import { configureStore } from "@reduxjs/toolkit";
import addTocartReducer from './addTocartslice'

const appStore = configureStore({
    reducer:{
        cart: addTocartReducer,
    }

})

export default appStore