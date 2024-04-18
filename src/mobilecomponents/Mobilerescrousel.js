import React from 'react'
import {useMobileres} from '../hooks/useMobileres'
import { CDN_url } from '../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack} from '@fortawesome/free-solid-svg-icons'



 const Mobilerescrousel = () => {
  
    const data = useMobileres()
    const img = data?.data?.success?.cards?.[0]?.gridWidget?.imageGridCards?.info?.map((item,index) => item.imageId )
    const title = data?.data?.success?.cards?.[1]?.gridWidget?.header?.title

    const Simmer = () => {
      return(
        <div className='flex ml-3 '>
<div className='h-[150px] w-[101px]  mt-5 ml-2  bg-gray-400    animate-pulse bg-gradient-to-t from-slate-400'>
          </div>
          <div className='h-[150px] w-[101px]  mt-5 ml-2  bg-gray-400    animate-pulse  bg-gradient-to-t from-slate-400'>   
        </div>
        <div className='h-[150px] w-[101px]  mt-5 ml-2  bg-gray-400   animate-pulse  bg-gradient-to-t from-slate-400 '>
          </div>
           </div>
      )
    }
    
    
    


  return (
    <div>
       { !data ? <Simmer /> :
       
       <React.Fragment>
       <div className='flex'>
    {img?.map((imageid, index) => (
        <div key={index} className='flex-none  mr-4'>
            <img src={`${CDN_url}${imageid}`} alt={`Image ${index}`} className='h-[150px] w-[101px]  mt-5 ml-2 ' />
        </div>
    ))}
     </div>
     <div>

     <div className=' p-2 mt-4 font-extrabold text-gray-600  text-lg ml-2' >
     <FontAwesomeIcon icon={faThumbtack}   className='mr-2 '/>
        

        {title}
     </div>
     </div>
     </React.Fragment>
}
    </div>
  )
}


export default Mobilerescrousel