import { createSlice } from "@reduxjs/toolkit";

const searchcacheslice = createSlice({
    name :"cacheresults" ,
    initialState :{

    },
    reducers :{
        addusermsg : (state , action) =>{
            const a = Object.assign(state , action.payload)
            return a 
        } 
    }

})

export default searchcacheslice.reducer

export const {addusermsg} = searchcacheslice.actions