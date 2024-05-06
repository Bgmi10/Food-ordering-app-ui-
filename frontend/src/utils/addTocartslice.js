import { createSlice } from "@reduxjs/toolkit";



const addTocart = createSlice({
    name: "cart",
    initialState: {
        items : []
    },
    reducers:{
        additem: (state, action)=>{
            state.items.push(action.payload)
        },
        removeitem: (state)=>{
            state.items.pop()
        },
        clearitem: (state)=>{
            state.items.length = 0 
        }
    }

})


export const {additem, removeitem, clearcart} = addTocart.actions
export default addTocart.reducer