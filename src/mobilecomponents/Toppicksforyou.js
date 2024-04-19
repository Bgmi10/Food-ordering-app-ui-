import React from 'react';
import { useMobileres } from '../hooks/useMobileres';
import { CDN_url } from '../utils/constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Toppicksforyou = () => {
  const data = useMobileres();
  const restaurants = data?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || [];

  const carouselData = restaurants.map((restaurant) => ({
    imageId: restaurant.info.cloudinaryImageId,
    name: restaurant.info.name,
    deliveryTime:restaurant.info.sla.slaString,
    itemDiscount: restaurant.info.promoted  

  }));
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    vertical: false,
    verticalSwiping: false
  };
  const Shimmer = () =>{
    return (
      <div className='mr-7 mt-20 space-x-2 ml-3 flex animate-pulse'>
         <div className='bg-gray-400   h-20 w-20 rounded-lg mb-2'>
          </div>
          <div className='bg-gray-400   h-20 w-20 rounded-lg mb-2'>
          </div> 
          <div className='bg-gray-400   h-20 w-20 rounded-lg mb-2'>
          </div>
           <div className='bg-gray-400   h-20 w-20 rounded-lg mb-2'>
          </div>
        

        

      </div>
    )

  }

  return (
    <div>
     { data.length ===0 ? <Shimmer /> : <Slider {...settings} className="mr-7 mt-3">
        {carouselData.map((restaurant, index) => (
          <div key={index} className="flex flex-col items-center ml-3 ">
            <img src={`${CDN_url}${restaurant.imageId}`} alt="" className="h-20 w-20 rounded-lg mb-2" />
            <span className=" "> {restaurant.itemDiscount === true ? <div className='absolute top-0 left-[156px] text-[9px] z-10 opacity-20 bg-black text-white p-2 font-extrabold  rounded-lg'>add</div> :null } </span>
            <div className='text-sm text-gray-600'>{restaurant.name.slice(0,11)}</div>
            <div className='text-sm  text-gray-400'>{restaurant.deliveryTime}</div>
          </div>
        ))}
      </Slider>}
    </div>
  );
};

export default Toppicksforyou;
