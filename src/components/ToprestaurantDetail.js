import React from 'react';
import { useParams } from 'react-router-dom';
import useTopresdetail from '../hooks/useTopresdetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; 
import { CDN_url } from '../utils/constants';
import { DealsForYou } from './DealsForYou';



export const ToprestaurantDetail = () => {
  const { resID } = useParams(); 
  
  const data = useTopresdetail(resID);
  const resdetail = data?.data?.cards?.[2]?.card?.card?.info
  const title = resdetail?.name;
  const avgRating = resdetail?.avgRatingString
  const totratingstring = resdetail?.totalRatingsString
  const costForTwo = resdetail?.costForTwoMessage
  const imageId = resdetail?.cloudinaryImageId
  const minDeliveryTime = resdetail?.sla.minDeliveryTime
  const maxDeliveryTime = resdetail?.sla.maxDeliveryTime
  const feeDetails = resdetail?.feeDetails?.message.slice(27)
  const km = resdetail?.sla?.lastMileTravelString
  const totalFee = resdetail?.feeDetails?.totalFee
  const availability = resdetail?.availability?.nextOpenTimeMessage
  const timeavailability = resdetail?.availability?.nextOpenTime
  

  const Shimmer = ()=>{
    return(
      <div className="flex flex-col items-start justify-start space-y-4 "> {/* Consistent top-left alignment */}
      <div className="bg-gray-300 h-40 w-60 rounded-xl animate-pulse ml-[550px]"></div> 
    </div>
      
    )
  }



  return (
    <div > 
    <div className="flex justify-between items-center ml-56 rounded-lg">
      
    
  {!data ? <Shimmer/> : <><div className="flex flex-col"> 
   {  availability && timeavailability ? <p className='text-red-500'> {availability } {','} {timeavailability}</p> : null}
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
      <p className='ml-2 mt-[3px] text-neutral-600 text-md'>{km} {feeDetails}  {'₹'}{totalFee /100}</p>
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
<DealsForYou />


</div>
  );
};
