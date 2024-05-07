import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CDN_url } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch } from 'react-redux';
import {additem} from '../utils/addTocartslice'
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


 const AccordionUsage = ({ data }) => {

  const dispatch = useDispatch()
 

  const handleclick = (itemCard)=>{
    return ()=>cartclick(itemCard)
   
  }
  const cartclick = (itemCard) =>{
    dispatch(additem(itemCard))
    toast.success(`Added ${itemCard.card?.info?.name} to cart!`)
    
  }
  return (
    <div className="ml-56 mr-52 mb-16 mt-2">
      {data.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${index}-content`}
            id={`panel-${index}-header`}
            className="text-lg text-black font-bold"
          >
            {item.card?.card?.title || 'Unknown Title'} ({item.card?.card?.itemCards.length || 0})
          </AccordionSummary>

          <AccordionDetails>
            <div className="flex flex-col gap-2">
              {item.card?.card?.itemCards?.map((itemCard, idx) => (
                <div key={idx} className="flex items-center border-b-2 pb-2"> 
                 
                  <div className="flex-grow"> 
                    <div className="text-lg font-semibold">
                      {itemCard.card?.info?.name || 'Unknown Name'}
                    </div>
                  <div>
                  {  !itemCard?.card?.info?.price ? null :<div className="font-normal">
                      {'₹'}{ itemCard?.card?.info?.price / 100  }
                    </div>}
                  </div>   

                    <div className="text-gray-500 mt-2 text-md">
                      <FontAwesomeIcon icon={faStarHalfAlt} className="text-sm mb-1 text-green-500" />
                      {itemCard.card?.info?.ratings?.aggregatedRating?.rating || itemCard.card?.info?.avgRatingString || null} 
                      {(itemCard.card?.info?.ratings?.aggregatedRating?.ratingCountV2  || null)}
                    </div>

                    <div className="text-sm text-gray-400 break-words max-w-xs"> 
                      {itemCard.card?.info?.description || 'Arriving soon...'}
                    </div>
                  </div>

                  
                  {itemCard.card?.info?.imageId ? (
                    <div className="relative flex-shrink-0">
                       <LazyLoadImage
                        src={`${CDN_url}${itemCard.card?.info?.imageId }`}
                        alt={itemCard.card?.info?.name || 'Image'}
                        className="w-36 h-36 rounded-lg mb-2"
                        effect='blur'
                         
                      />

                      <span className="absolute top-[1px] right-[1px] opacity-100 cursor-pointer bg-gradient-to-tl from-black text-white p-2 font-extrabold rounded-lg" onClick={handleclick(itemCard) } >
                      Add +
                      </span>
                    </div>
                    
                  ) : <div className='text-red-500 mb-8'>
                    item not available</div>}
                </div>
              ))}
            </div>
          </AccordionDetails>
          
          <AccordionActions>
           
          </AccordionActions>
        </Accordion>
      ))}
      
    </div>
  );
};


export default AccordionUsage