import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import {ToprestaurantDetail} from './components/ToprestaurantDetail';
import NotFound from './components/NotFound';
import Breadcrumb from './components/Breadcrumbs';





function App() {

 

 
  return (
    <div>
     <BrowserRouter>
      
      <Header />
      <Breadcrumb />
        <Routes>
    
          <Route path="/login" element={<Body />} />
          <Route path="/" element={<Body />} />
          <Route path="/resdetail/:resID" element={<ToprestaurantDetail />} />
          <Route path="*" element={<NotFound />} />
      
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
