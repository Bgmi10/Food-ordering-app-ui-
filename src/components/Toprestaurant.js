import React from 'react'
import useFetchData from '../hooks/useFetchdata'
import { CDN_url } from '../utils/constants'

 const Toprestaurant = () => {

const data = useFetchData()


const title = data?.data?.cards?.[1]?.card?.card?.header?.title
const carouselimg = data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((item) => item.info.cloudinaryImageId )
console.log(carouselimg)

  return (
    <div>
      <div className='font-bold text-2xl  ml-[170px] mt-8'>
        {title}
      </div>
      <div>
           {
            carouselimg?.map((imageId,index)=>(
                <div className='' key={index}>
                    <img src={`${CDN_url}${imageId}`}></img>
                </div>
                
            ))
            
           }
      </div>
    </div>
  )
}


export default Toprestaurant