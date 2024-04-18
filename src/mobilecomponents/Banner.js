import React from 'react'
import { useMobileres } from '../hooks/useMobileres'
import { CDN_url } from '../utils/constants'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Settings } from '@mui/icons-material';


const Banner = () => {
    const data = useMobileres()

    const banner = data?.data?.success?.cards?.[2]?.gridWidget?.imageGridCards?.info.map((item) => item.imageId)

    
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
        slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false
  };
  const Shimmer = ()=>{
    <div  className='mt-4 mr-6'>
        <div className='h-[210px] w-[320px] ml-5 bg-gray-400 mt-3'>

        </div>
    </div>
  }

  return (
    <div>
       { !data ? <Shimmer /> :<div>
          <Slider {...settings} className='mt-4 mr-6'>
           { banner?.map((imageid,index)=>(
            <div key={index}>

           <img src={`${CDN_url}${imageid}`  } className='h-[210px] w-[320px] ml-5'  >
           
            </img>
            </div>
        ))}
        </Slider>
            
        </div>}
    </div>
  )
}

export default Banner