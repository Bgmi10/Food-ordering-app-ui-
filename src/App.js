import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Body from './components/Body';
import {ToprestaurantDetail} from './components/ToprestaurantDetail';
import AuthWrapper from './components/Authwrapper';
import Oauthuserprofile from './Oauth/Oauthuserprofile'



function App() {

  const { isAuthenticated } = useAuth0();
  const NotFound =()=>{
    return(
      <div>
        <div>
        <img src='https://cdn.vectorstock.com/i/500p/87/74/website-error-404-page-not-found-artwork-depicts-vector-23988774.avif' className='w-full h-full'> 
        </img>  
        </div>
   
  </div>

    )
  
  }

 
  return (
    <div>
       <BrowserRouter>
      
        <Header />
       
      
  <Routes>
  
    <Route path="/login" element={<Body />} />
    <Route path="/" element={<Body />} />
  
    
    <Route path="/resdetail" element={<ToprestaurantDetail />} />
    
   <Route path="*" element={<NotFound />} />

  </Routes>


        

      </BrowserRouter>
    </div>
  );
}

export default App;
