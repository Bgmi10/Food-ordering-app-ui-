import React from 'react';
import AccordionUsage from './AccordionUsage';
import useTopresdetail from '../hooks/useTopresdetail';

export const Itemcatagory = () => {
  const data = useTopresdetail();
  const restaurantCards = data?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];


  const filterres = restaurantCards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
 // issue component rendering  threee times usememo not working 



  return (
    <div>
      
      <AccordionUsage data={filterres} />
    </div>
  );
};
