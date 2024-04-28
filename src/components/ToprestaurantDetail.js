import React from 'react';
import { useParams } from 'react-router-dom';
import useTopresdetail from '../hooks/useTopresdetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; 
import { CDN_url } from '../utils/constants';



export const ToprestaurantDetail = () => {
  const { resID } = useParams(); 
  const data = useTopresdetail(resID);
  const title = data?.data?.cards?.[2]?.card?.card?.info?.name;
  const avgRating = data?.data?.cards?.[2]?.card?.card?.info?.avgRatingString
  const totratingstring = data?.data?.cards?.[2]?.card?.card?.info?.totalRatingsString
  const costForTwo = data?.data?.cards?.[2]?.card?.card?.info?.costForTwoMessage
  const imageId = data?.data?.cards?.[2]?.card?.card?.info?.cloudinaryImageId
  const minDeliveryTime = data?.data?.cards?.[2]?.card?.card?.info?.sla.minDeliveryTime
  const maxDeliveryTime = data?.data?.cards?.[2]?.card?.card?.info?.sla.maxDeliveryTime
  const feeDetails = data?.data?.cards?.[2]?.card?.card?.info?.feeDetails?.message.slice(27)
  const km = data?.data?.cards?.[2]?.card?.card?.info?.sla?.lastMileTravelString
  

  const Shimmer = ()=>{
    return(
      <div>
        loading....
      </div>
    )
  }



  return (
    <div className="flex justify-between items-center ml-56 rounded-lg"> {/* Flex layout for horizontal alignment */}
  {!data ? <Shimmer/> : <><div className="flex flex-col"> {/* Left side with vertical content */}
    <h2 className="font-bold text-2xl">{title}</h2>
    <div className='mt-2'>
      <p className="text-neutral-600 text-md">
        <FontAwesomeIcon icon={faStarHalfAlt} className="text-sm mb-1 text-green-500 " /> 
        {avgRating} {'('}{totratingstring}{')'} {'.'}  {costForTwo}
      </p>
     {maxDeliveryTime && minDeliveryTime ? <p className='text-neutral-600 text-md mt-1 ml-1'>
     {maxDeliveryTime } {'-'} {minDeliveryTime} {'mins'}
      
      </p>  : null} 
      <div className='flex justify-between'>
      <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu' alt='' className='w-5 h-5 mt-[5px]'  ></img>
      <p className='ml-2 mt-[3px] text-neutral-600 text-md'>{km} {feeDetails}</p>
      </div>
      
    
      
    </div>
  </div></>}

  <div className="flex-shrink-0"> {/* Right side with image */}
    <img 
      src={`${CDN_url}${imageId}`} 
      alt={''} 
      className="h-40 w-60 rounded-xl mr-56 mt-5" 
    />
  </div>
</div>

  );
};
