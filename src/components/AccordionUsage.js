import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export const AccordionUsage = ({ data }) => {
 
 

  return (
    <div className="ml-56 mr-52 mb-6 mt-2">
      {data.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${index}-content`}
            id={`panel-${index}-header`}
            className='text-lg text-black font-bold'
           
          >
           
            {item.card?.card?.title || 'Unknown Name'}({item?.card?.card?.itemCards.length})
          
          </AccordionSummary>
        <AccordionDetails><div className="flex flex-col gap-2 ">
             {item.card?.card?.itemCards?.map((item,index)=>
            <div key={index} className="text-lg font-medium">
            {item.card.info.name || 'Unknown Name'}
             </div>)}
            </div>
            </AccordionDetails>
            
         
          <AccordionActions>
           
          </AccordionActions>
        </Accordion>
      ))}
    </div>
  );
};
