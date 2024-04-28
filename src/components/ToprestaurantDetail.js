import React from 'react';
import { useParams } from 'react-router-dom';
import useTopresdetail from '../hooks/useTopresdetail'; // Custom hook to fetch restaurant detail

export const ToprestaurantDetail = () => {
  const { resID } = useParams(); // Get the dynamic ID from the URL
  const data = useTopresdetail(resID); // Pass the ID to your custom hook
  const title = data?.data?.cards?.[2]?.card?.card?.info?.name;

  return (
    <div>
      <h2 className='font-bold text-2xl ml-[250px] mt-16'>{title}</h2>
     <div>

     </div>
    </div>
  );
};
