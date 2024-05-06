import React from 'react';
import useFetchData from '../hooks/useFetchdata';
import { CDN_url } from '../utils/constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fab } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const Toprestaurant = () => {
  const data = useFetchData();
   const title = data?.data?.cards?.[1]?.card?.card?.header?.title;
  const { restaurants } = data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle || {};

  const carouselData = restaurants?.map((restaurant) => ({
    imageId: restaurant.info.cloudinaryImageId,
    name: restaurant.info.name,
    avgRating: restaurant.info.avgRating,
    deliveryTime: restaurant.info.sla.slaString,
    cuisines: restaurant.info.cuisines.join(', '),
    itemDiscount: restaurant.info.costForTwo,
    resID: restaurant.info.id
  }));

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: 'absolute',
          top: '-8%',
          left: '88%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
        className="cursor-pointer text-3xl text-gray-400"
      >
        <Fab size="small">
          <ArrowBack />
        </Fab>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: 'absolute',
          top: '-8%',
          right: '3%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
        className="cursor-pointer text-3xl text-gray-600"
      >
        <Fab size="small">
          <ArrowForward />
        </Fab>
      </div>
    );
  };

  const Shimmer = () => {
    return (
      <div className="animate-pulse flex items-center justify-center h-96 w-full">
        <div className="flex space-x-4">
          <div className="bg-gray-300 h-40 w-60 rounded-xl mt-4 animate-pulse"></div>
          <div className="bg-gray-300 h-40 w-60 rounded-xl mt-4 animate-pulse"></div>
          <div className="bg-gray-300 h-40 w-60 rounded-xl mt-4 animate-pulse"></div>
          <div className="bg-gray-300 h-40 w-60 rounded-xl mt-4 animate-pulse"></div>
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    vertical: false,
    verticalSwiping: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      {data.length === 0 ? (
        <Shimmer />
      ) : (
        <React.Fragment>
          <div className="font-bold text-2xl ml-[170px] mt-8">{title}</div>
          <div>
            <Slider {...settings} className="ml-40 mt-6 h-auto w-auto border-b-2">
              {carouselData?.map(({ imageId, name, avgRating, deliveryTime, cuisines, itemDiscount ,resID}, index) => (
                
               
                <div key={index} className="hover:scale-105 cursor-pointer" >
                  <Link to={`/resdetail/${resID}`}>
                  <div className="relative">
                   
                    <LazyLoadImage 
                      src={`${CDN_url}${imageId}`} alt={name} className="h-40 w-60 rounded-xl mt-4"
                      effect="blur" />
                    <span
                      className="absolute top-4 left-[124px] z-10 opacity-80 bg-gradient-to-tl from-black text-white p-2 font-extrabold rounded-xl"
                    >
                      {itemDiscount}
                    </span>
                  </div>
                  <p className="text-xl text-gray-800">{name}</p>
                  <p className="text-gray-600">
                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-sm mb-1 text-green-500" /> {avgRating} . {deliveryTime}
                  </p>
                  <p className="text-gray-500">{cuisines}</p>
                  </Link>
                </div>
               
              ))}
            </Slider>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Toprestaurant;
