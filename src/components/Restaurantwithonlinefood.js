import React, { useEffect } from 'react'
import useFecthdata from '../hooks/useFetchdata'
import {Fab} from '@mui/material';
import { CDN_url } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faStarHalfAlt ,faFilterCircleDollar, faFilterCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';




 const Restaurantwithonlinefood = () => {

        const data  = useFecthdata()

        const title = data?.data?.cards?.[2]?.card?.card?.title

       const { restaurants } = data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle || {};
       const [filterres, setfilterres] = useState([]);
       const [originalres , setoriginalres] = useState([])
       


       useEffect(()=>{
        setfilterres(restaurants)
        setoriginalres(restaurants)
       },[restaurants])
      
       
       
    const carouselData = filterres?.map((restaurant) => ({
      imageId: restaurant.info.cloudinaryImageId,
      name: restaurant.info.name,
      avgRating:restaurant.info.avgRating,
      deliveryTime: restaurant.info.sla.slaString,
      cuisines:restaurant.info.cuisines.join(', '),
      itemDiscount : restaurant.info.costForTwo
    }));


    

    const Filterres = (min) =>{

        const filtered = originalres?.filter((restaurant) => restaurant.info.avgRating >= min) 
        setfilterres(filtered)
      
    
    }
    const resetFilter = () =>{
        setfilterres(originalres)
    }

    
    
  return (
    <div>
        <div className="font-bold text-2xl  ml-[170px] mt-5">
            {title}
        </div>
        
        <div className="flex">
        <FontAwesomeIcon icon={faFilterCircleDollar} className=' text-xl mb-1 ml-44  mt-5 text-amber-600 ' /> 
        <div className=' mt-3  ml-[10px]'>
        
        <Fab variant="extended" size='small' onClick={resetFilter} color=''>
            <p className='text-gray-500'> Filter</p>
        </Fab>
    </div>
        <div className=' mt-3  ml-[10px]'>
        
                    <Fab variant="extended" size='small' onClick={resetFilter}>
                        <p className='text-gray-500 '>Reset Filter</p>
                    </Fab>
                </div>
    <div className='ml-2 mt-3 m-0  '>
        <Fab variant="extended" size='small'>
            <p className='text-gray-500' onClick={()=>{Filterres(4.0)}}>Ratings 4.0+</p>   
        </Fab>
    </div>
    <div className=' p-1 mt-2 ml-2  '>
        <Fab variant="extended" size='small'>
            <p className='text-gray-500 '>Pure veg</p>   
        </Fab>
    </div>
    <div className='p-1 mt-2 m-1'>
        <Fab variant="extended" size='small'>
            <p className='text-gray-500'>Rs. 300-Rs. 600</p>   
        </Fab>
    </div>
    <div className='p-1 mt-2 m-1'>
        <Fab variant="extended" size='small'>
            <p className='text-gray-500'>Less than Rs. 300</p>   
        </Fab>
    </div>
</div>

        <div className='grid grid-cols-4  ml-44 '>
        {
  carouselData?.map(({ imageId, name,avgRating, deliveryTime , cuisines, itemDiscount}, index) => (
    <div key={index}className=' hover:scale-105 cursor-pointer '>
      <div className="relative ">
  <img src={`${CDN_url}${imageId}`} alt={name} className='h-40 w-60 rounded-xl mt-4' />
  <span className="absolute top-0 left-[122px] z-10 opacity-80 bg-gradient-to-tl from-black text-white p-2 font-extrabold  rounded-lg "> {itemDiscount} </span>
</div>

      <p className='text-xl text-gray-800'>{name}</p>
    
      <p className='text-gray-600'>  <FontAwesomeIcon icon={faStarHalfAlt} className=' text-sm mb-1 text-green-500 ' /> {avgRating}  .   {deliveryTime}</p>
      
     
<p className='text-gray-500'>{cuisines}</p>
    </div>
  ))
}
        </div>

        </div>

  
  )
}



export default Restaurantwithonlinefood