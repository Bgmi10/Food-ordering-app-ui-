import React, { useEffect, useState } from 'react'
import { CDN_url} from '../utils/constants'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

 const Presearch = () => {
      const  [data,setdata] = useState(null)
    useEffect(()=>{
        const fetchdata = async () =>{
            try{
                const response = await fetch("https://www.swiggy.com/mapi/landing/PRE_SEARCH?lat=13.1330166&lng=80.208253")

            const data = await response.json()
            setdata(data)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchdata()

    },[])

    const title = data?.data?.cards?.[3]?.card?.card?.header.title

    const image  = data?.data?.cards?.[3]?.card?.card?.imageGridCards?.info
    const settings = {
        dots: false,
        speed : 500,
        slidesToShow: 14,
        vertical: false,
        verticalSwiping: false,
        infinite: false,
        
      }
  return (
    <div className='flex flex-col ml-[211px] mt-3'>
        <div  className='text-lg font-bold text-gray-500'>{title}</div>
       
       <Slider {...settings} className='h-auto w-auto'> {
            image?.map((item,index)=>(
                <div key={index}>
                    <img src={`${CDN_url}${item.imageId}` } className='mt-2 ' ></img>

                </div>
            ))
        }
       </Slider>

    </div>
  )
}


export default Presearch