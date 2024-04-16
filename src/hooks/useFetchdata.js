import { useState, useEffect } from "react";
import { api_url } from "../utils/constants";

const useFetchData = () =>{
     const [data , setData] = useState('')
     

    useEffect(()=>{
        const fetchdata = async() =>{
            const response   = await fetch(api_url)
            const data  = await response.json()
            setData(data)
            
        }

        fetchdata()
       
    },[])
    return data
}

export default useFetchData