import { useEffect,useState } from 'react'
import {  mobile_res_api } from '../utils/constants'

export const useMobileres = () => {
  const [data,setData] = useState('')


  useEffect(()=>{

    const fetchdata = async ()=>{
        const response = await fetch(mobile_res_api)
        
        const data = await response.json()
        setData(data)
        
    }
    fetchdata()

  },[])
  return data
}
