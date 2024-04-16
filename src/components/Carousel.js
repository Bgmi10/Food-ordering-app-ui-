import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Fab} from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import useFetchData from '../hooks/useFetchdata';
import img from '../imgs/shimmer.jpg'
import { CDN_url } from '../utils/constants';


const Rescard = () => {
 

  const data = useFetchData()
  const title = data?.data?.cards?.[0]?.card?.card?.header?.title;

  

  const carosuelImages = data?.data?.cards?.[0]?.card?.card?.imageGridCards?.info.map((item)=> item.imageId)
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} style={{ position: 'absolute', top: '-8%', left: '88%', transform: 'translateY(-50%)', zIndex: 1 }} className="cursor-pointer text-3xl text-gray-400">
       
        <Fab size='small'>
      <ArrowBack />
    </Fab>
      </div>
    );
  };
  
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} style={{ position: 'absolute', top: '-8%', right: '3%', transform: 'translateY(-50%)', zIndex: 1 }} className="cursor-pointer text-3xl text-gray-600">
      <Fab size='small'>
      <ArrowForward />
    </Fab>
      </div>
    );
  };


  const settings = {
    dots: false,
    infinite : false ,
    speed : 500,
    slidesToShow: 7,
    slidesToScroll : 3,
    vertical: false,
    verticalSwiping: false,
    prevArrow: <PrevArrow />,
    nextArrow : <NextArrow />
  }
  const Shimmer = () =>{
    return(
      <div>
       <img src={img}>
       </img>
      </div>
    )
  }

 return    (
    <div className="container mx-auto relative">
      { data.length === 0 ? <Shimmer /> :
      <React.Fragment >
      <div className="font-bold text-2xl  ml-[170px] mt-3">
        {title}
      </div>
      
      <div>
        <div  className='relative'>
      <Slider {...settings} className='h-auto w-auto ml-40 mt-4 border-b-2'>
        {carosuelImages?.map((imageId, index) => (
          <div key={index} className="px-2">
            <img
              src={`${CDN_url}${imageId}`}
              alt={`Carousel Image ${index + 1}`}
              className="h-auto w-auto"
            />
          </div>
        ))}
      </Slider>
      </div>
       </div>
       </React.Fragment>
      }

      
      </div>
      
 )
};

export default Rescard ;