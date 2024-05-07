import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CDN_url } from '../utils/constants';
import Accordion from '@mui/material/Accordion'; 
import AccordionSummary from '@mui/material/AccordionSummary'; 
import AccordionDetails from '@mui/material/AccordionDetails'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartArrowDown, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; 
import { LazyLoadImage } from 'react-lazy-load-image-component'; 
import { Button } from '@mui/material';


const Cartinfo = () => {
    const cartitems = useSelector((store) => store.cart.items);
    const [isExpanded , setExpanded] = useState(true)
    const totalBill = cartitems.reduce((acc, itemCard)=> {
        return acc + (itemCard?.card?.info?.price  || 0) /100
    },0) 
    const handeltoggle = ()=>{
        setExpanded(!isExpanded)
    }

    return (
        <div>
            {cartitems.length === 0 ? (
                <>
                    <img
                        src={`${CDN_url}cart_empty_ipmau1`}
                        className="ml-[500px] w-80 h-80"
                        alt="Empty Cart"
                    />
                    <p className="ml-[580px] mt-3 text-xl font-bold ">Your cart is empty</p>
                    <Link to="/">
                        <button className="ml-[560px] mt-3 border text-white bg-orange-500 p-2 w-52 font-bold">
                            Explore Menu
                        </button>
                    </Link>
                </>
            ) : (
                <div className='ml-[670px]'>
                    
                   
                        <Accordion expanded={isExpanded}  onChange={handeltoggle}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel-content`}
                                id={`panel-header`}
                                className="text-lg font-bold "
                            >
                                <div ><p className='font-bold p-3 text-xl m-0 px-0'><FontAwesomeIcon icon={faCartArrowDown}   className='text-xl text-green-500  '/> Your Cart ({cartitems.length}) </p></div> 
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="flex flex-col gap-2">
                                    {cartitems?.map((itemCard, idx) => ( 
                                        <div key={idx} className="flex items-center border-b-2 pb-2">
                                            <div className="flex-grow">
                                                <div className="text-lg font-semibold">
                                                    {itemCard.card?.info?.name || 'Unknown Name'}
                                                   
                                                </div>
                                                <div className="font-normal">
                                                    {'₹'}{itemCard.card?.info?.price / 100}
                                                </div>
                                                <div className="text-gray-500 mt-2 text-md">
                                                    <FontAwesomeIcon
                                                        icon={faStarHalfAlt}
                                                        className="text-sm mb-1 text-green-500"
                                                    />
                                                    {itemCard.card?.info?.ratings?.aggregatedRating?.rating || 'N/A'}
                                                    ({itemCard.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 'N/A'})
                                                </div>
                                                <div className="text-sm text-gray-400 break-words max-w-xs">
                                                    {itemCard.card?.info?.description || 'Arriving soon...'}
                                                </div>
                                            </div>
                                            {itemCard.card?.info?.imageId && (
                                                <div className="relative flex-shrink-0">
                                                    <LazyLoadImage
                                                        src={`${CDN_url}${itemCard.card?.info?.imageId}`}
                                                        alt={itemCard.card?.info?.name || 'Image'}
                                                        className="w-36 h-36 rounded-lg mb-2"
                                                        effect="blur"
                                                    />
                                                   
                                                </div>
                                            )}
                                            
                                        </div>
                                        
                                        ))}
                                        
                                </div>
                            </AccordionDetails>
                            <div className="flex justify-between mt-4 mx-6 border-t-2 pt-2 mb-10">
                            <span className="text-xl font-bold">Total Bill:</span>
                            <span className="text-xl text-gray-500  mr-8">{'₹'}{totalBill}</span>
                           
                        </div>
                    
                       
                        <div  className='ml-[480px] mb-3'>
                          <Button variant="outlined"> To Pay</Button>
                        </div>
                      
                            
                        </Accordion>
                     
                </div>
            )}
        </div>
    );
};

export default Cartinfo;
