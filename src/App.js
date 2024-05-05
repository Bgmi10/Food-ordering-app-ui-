import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import {ToprestaurantDetail} from './components/ToprestaurantDetail';
import NotFound from './components/NotFound';
import Breadcrumb from './components/Breadcrumbs';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cartinfo from './components/Cartinfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <div>
    <Provider store={appStore}>
     <BrowserRouter>
      
      <Header />
      <Breadcrumb />
        <Routes>
    
          <Route path="/login" element={<Body />} />
          <Route path="/" element={<Body />} />
          <Route path="/resdetail/:resID" element={<ToprestaurantDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/cart' element={<Cartinfo />} />
        
      
        </Routes>
    </BrowserRouter>
    <ToastContainer />
    </Provider>
    </div>
  );
}

export default App;
