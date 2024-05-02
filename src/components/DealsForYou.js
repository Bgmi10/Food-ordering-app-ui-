import React from 'react';
import { useParams } from 'react-router-dom';
import useTopresdetail from '../hooks/useTopresdetail';
import {Fab} from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Topicsres } from './Topicsres';
import { CDN_url } from '../utils/constants';
import { Itemcatagory } from './Itemcatagory';

export const DealsForYou = () => {


  const { resID } = useParams(); 
  const data = useTopresdetail(resID);

  // Get the list of deals
  const deals = data?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
    (item) => item.info
  );



  const Shimmer = ({ count = 3 }) => (
    <div className="animate-pulse ml-56 mt-4   flex flex-row space-x-6 h-20 w-20"> {/* Animation for the shimmer effect */}
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex items-center mb-4"> {/* Flex layout */}
          <div className="w-10 h-10 bg-gray-300 rounded-lg mr-4" /> {/* Placeholder for image */}
          <div className="flex flex-col gap-2"> {/* Placeholder for text */}
            <div className="h-4 bg-gray-300 rounded w-20" /> {/* Title placeholder */}
            <div className="h-4 bg-gray-300 rounded w-32" /> {/* Description placeholder */}
          </div>
        </div>
      ))}
    </div>
  );
  

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} style={{ position: 'absolute', top: '-24%', left: '86%', transform: 'translateY(-50%)', zIndex: 1 }} className="cursor-pointer text-3xl text-gray-400">
      <Fab size='small'>
      <ArrowBack />
      </Fab>
      </div>
    );
  };
  
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} style={{ position: 'absolute', top: '-24%', right: '3%', transform: 'translateY(-50%)', zIndex: 1 }} className="cursor-pointer text-3xl text-gray-600">
      <Fab size='small'>
      <ArrowForward />
      </Fab>
      </div>
    );
  };


  const settings = {
    dots: true,
    infinite: true,
    speed : 500,
    slidesToShow: 3,
    slidesToScroll : 1,
    vertical: false,
    verticalSwiping: false,
    prevArrow: <PrevArrow />,
    nextArrow : <NextArrow />,
    autoplay: true,  
    autoplaySpeed: 3000,
  }

  return (
    <div className='mt-8' >
        <h2 className='font-bold text-xl ml-56'>Deals for you</h2 >
        { !deals ? <Shimmer /> :<Slider {...settings} className=' h-auto w-auto ml-56 mt-8  m-48 mb-20  '>
      {deals?.map((deal, index) => (
        <div key={index} className="flex items-center mb-4 ">
          <img
            src={`${CDN_url}${deal.offerLogo}`}
            alt={deal.offerLogo} 
            className="w-10 h-10 mr-4 rounded-lg" 
          />
          <div>
            <h2 className="font-bold text-xl">{deal.header}</h2> 
            <p className='text-md text-gray-400'>{deal.couponCode}</p> 
          </div>
        </div>
      ))}
      </Slider>}
      
      <Topicsres />
      <Itemcatagory />
    </div>
  );
};
