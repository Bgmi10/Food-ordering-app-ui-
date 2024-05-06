import React from 'react';
import useTopresdetail from '../hooks/useTopresdetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fab } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { CDN_url } from '../utils/constants';


export const Topicsres = () => {
  const data = useTopresdetail(); 
  const restaurantCards = data?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const toppiccarosuel = restaurantCards?.[1]?.card?.card?.carousel;
  const topPickstitle = restaurantCards?.[1]?.card?.card?.title || 'Top Picks'; 
  
  const validCarouselData = Array.isArray(toppiccarosuel) ? toppiccarosuel.map((item) => item.creativeId) : [];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-[-24%] left-[84%] transform -translateY(-50%) z-10 cursor-pointer text-3xl text-gray-400"
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
        className="absolute top-[-24%] right-[5%] transform -translateY(-50%) z-10 cursor-pointer text-3xl text-gray-600"
      >
        <Fab size="small">
          <ArrowForward />
        </Fab>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    vertical: false,
    verticalSwiping: false,
  };

  return (
    <div>
     { toppiccarosuel && <div className="font-bold text-xl ml-56 border-t-6">{topPickstitle }</div>}

     { toppiccarosuel ? <Slider {...settings} className="h-auto w-auto ml-56 mt-8  m-44 mb-20 ">
        {validCarouselData.map((imageId, index) => (
          <div key={index}>
            <img
              src={`${CDN_url}${imageId}`}
              alt="loading.."
              className="h-64 w-64"
            />
          </div>
        ))}
      </Slider> : null}

      <p className="flex justify-center text-gray-500 space-x-2">
        <FontAwesomeIcon icon={faCheckCircle} className="mt-[4px] m-1" />
        MENU
        <FontAwesomeIcon icon={faCheckCircle} className="mt-[4px] m-1" />
      </p>
     
    </div>
  );
};


