import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {  cdn_url_1 } from '../utils/constants'
import Presearch from './Presearch'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addusermsg } from '../utils/Searchcacheslice'




 const Searchbar = () => {
    const [search,setsearch] = useState('')
    const [data,setdata]= useState('')
    const dispatch  = useDispatch()
    const cache_search_results = useSelector(store => store.cacheresults)
    

    const search_results = data?.data?.suggestions
    const notfound = data?.data?.suggestions.length === 0 
    const handelclik = async ()=>{

   
        const search_value = search
        
        try{
            const response  = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=13.1330166&lng=80.208253&str=${search_value}&trackingId=null`)
            const data = await response.json()
            
            setdata(data)
            
         
            dispatch(addusermsg({[search] : data}))
        }
        catch(error){

        console.log(error ," :err while fetching ")
            
       }
                
// "{"type":"RESTAURANT","data":{"parentId":2456,"primaryRestaurantId":24334,"cloudinaryId":"d0450ce1a6ba19ea60cd724471ed54a8","brandId":2456,"dishFamilyId":"846647","enabled_flag":1},"businessCategory":"SWIGGY_FOOD","displayLabel":"Restaurant"}"
    }

    

    useEffect(()=>{
     const call =  setTimeout(()=>{
        if(cache_search_results[search]){
         return  setdata(cache_search_results[search])
        }
      
        else{
         return handelclik()
        }
        
    },150)

  
    
       return ()=> clearTimeout(call)
   
    },[search])
    // useeffect will call on every key storke and that time we are implemented the setaTimeout for 0.2 sec 
    //after the timerends it calls the callback function and make an API call 

  
  
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
           className='z-3 mt-3 lg:mr-40 absolute   top-1/2 transform -translate-y-1/2 text-gray-500 text-md cursor-pointer  sm: right-[80px] '/>
        </div>
        
       { notfound ? < p className='ml-[210px] mt-3 font-bold '>search not found</p>:(
            <div >
            {
                 ( !search_results ?  <Presearch /> : search_results?.map((item,index)=>(
                  <Link to={`/resdetail/${item.metadata}`}  key={index} >
                     {/* {console.log(item?.metadata?.data )} */}
                    <div className='flex items-center  hover:border cursor-pointer' >
                       
                         <img src={`${cdn_url_1}${item.cloudinaryId}`} alt='' className='lg:ml-52 h-20 w-20 p-2 m-2 rounded-2xl '></img>
                         <div className='ml-1 flex flex-col mb-7 sm: mr-22' >
                          <p className='mt-5 text-gray-600'>{item.text}</p>
                          <p className='text-xs text-gray-400'>  {item.subCategory}</p>
                        
                        </div>
                     
                       

             </div >
             </Link>
                ))
              )
            }
        </div>)}
    </div>

  )
}


export default  Searchbar



// implment the search cache when user search for anything for that we need  to store the user query and api results in redux and next time the user query is match then dont make api call reterive from store {
//   "pizza": ""
//}