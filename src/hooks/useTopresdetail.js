import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';



const useTopresdetail = ()=>{

    const [data , setdata] = useState('')
    const { resID } = useParams();

    useEffect(()=>{

        const fetchData  = async () =>{
            const data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.1330166&lng=80.208253&restaurantId=${resID}&isMenuUx4=true&submitAction=ENTER`)
            const response = await data.json()
            setdata(response)
            
        }

        fetchData()

      

    },[])

    return data
}

export default useTopresdetail