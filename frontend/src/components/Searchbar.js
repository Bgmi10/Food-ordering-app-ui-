import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {  cdn_url_1 } from '../utils/constants'
import Presearch from './Presearch'

 const Searchbar = () => {
    const [search,setsearch] = useState('')
    const [data,setdata]= useState('')
   

    const handelclik = async ()=>{
        const search_value = search
        
        try{
            const response  = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=13.1330166&lng=80.208253&str=${search_value}&trackingId=null`)
            const data = await response.json()
            
            setdata(data)
            
        }
        catch(error){

        console.log(error ," :err while fetching ")
            
       }
                
       
    }

    useEffect(()=>{
     const call =  setTimeout(()=>{
        handelclik()
    },200)

    
       return ()=> clearTimeout(call)
   
    },[search])
    // useeffect will call on every key storke and that time we are implemented the setaTimeout for 0.2 sec 
    //after the timerends it calls the callback function and make an API call 

    const search_results = data?.data?.suggestions
    const notfound = data?.data?.suggestions.length === 0 
  
  
  return (
    <div>
        <div className=' flex justify-center relative ' >
           <input type='text' 
           value={search}
           onChange={(e)=>setsearch(e.target.value)}
           className="border w-2/3 mt-6 p-3 text-gray-700 rounded-sm border-gray-400 outline-none
        placeholder-gray-500 "
           placeholder='Search for foods '
           style={{'::placeholder': { color: 'red' }}}
           />
           <FontAwesomeIcon icon={faSearch} 
           onClick={handelclik}
           className='z-3 mt-3 lg:mr-40 absolute   top-1/2 transform -translate-y-1/2 text-gray-500 text-md cursor-pointer  sm: right-[70px] '/>
        </div>
        
       { notfound ? <p>search not found</p>:(
            <div>
            {
                search_results?.map((item,index)=>(
                    <div key={index} className='flex items-center  hover:border cursor-pointer sm: justify- ' >
                         <img src={`${cdn_url_1}${item.cloudinaryId}`} alt='' className='lg:ml-52 h-20 w-20 p-2 m-2 rounded-2xl '></img>
                         <div className='ml-1 flex flex-col mb-7 sm: mr-22' >
                          <p className='mt-5 text-gray-600'>{item.text}</p>
                          <p className='text-xs text-gray-400'>  {item.subCategory}</p>
                        </div>
                       

             </div>
                ))
            }
        </div>)}
    </div>

  )
}


export default  Searchbar

