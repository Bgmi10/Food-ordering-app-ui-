import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faQuestionCircle, faChevronDown, faBars, faTimes , faUser  } from '@fortawesome/free-solid-svg-icons';
import Drawer from './Drawer';
import Oauthuserprofile from '../Oauth/Oauthuserprofile'
import { useAuth0 } from "@auth0/auth0-react";
import AuthWrapper from './Authwrapper'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuicon, SetMenuicon] = useState(faBars);
  const [drawer, setDrawer] = useState(false);
  const { isAuthenticated } = useAuth0();
  const mobile  = window.innerWidth <= 768
  const [hidesigninbutton, sethidesigninbutton] = useState(window.location.pathname === '/login')
  const cartitems = useSelector((store)=> store.cart.items)
  
  
  


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    SetMenuicon(isMobileMenuOpen ? faBars : faTimes);
  };

  const handleDrawer = () => {
    setDrawer(true);
  };

  const handleCloseDrawer = () => {
    setDrawer(false);
  };

  return (
    <div className="">
      {drawer && <Drawer isOpen={drawer} onClose={handleCloseDrawer} />}
      <div className="flex justify-between items-center p-4 border-b-2 border-gray-200 shadow-md">
        <div className="flex items-center">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png"
            alt=""
            className="h-14 w-14 cursor-pointer hover:scale-110 transition duration-300"
          />
        </div>
       
        <div className='flex items-center flex-grow ml-5'>
          <h2 className='text-gray-700 mr-4 lg:mr-8 hover:text-orange-500 cursor-pointer '>
            <span className="mr-1">Location</span>
            <FontAwesomeIcon icon={faChevronDown} className='text-orange-500 ml-2'/>
          </h2>
        </div>
     { mobile ? <div className=' mt-1 mr-3'> <Oauthuserprofile /></div> : null} 
     
        <div className="lg:hidden">
      
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none  focus:text-gray-700"
          >
            <FontAwesomeIcon icon={menuicon} className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex ">
          <ul className="flex space-x-2 ">
            <div className="hidden lg:flex items-center ">
              <Link to='/search'>
              <div className="flex items-center mr-2">
                <FontAwesomeIcon icon={faSearch} className='text-gray-500  ' />
                <li className="text-gray-500 py-2 px-4 rounded-md cursor-pointer hover:text-orange-500">Search</li>
              </div>
              </Link>
            </div>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faGift} className='text-gray-500' />
              <li className="py-2 px-4 text-gray-500 cursor-pointer hover:text-orange-500">Offers</li>
            </div>     
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faQuestionCircle} className='text-gray-600 ' />
              <li className="py-2 px-4 text-gray-500 cursor-pointer hover:text-orange-500">Help</li>
            </div>
           {!isAuthenticated && !hidesigninbutton && <div className='flex items-center'>
              <FontAwesomeIcon icon={faUser} className='text-gray-600 ' />
              <li className="py-2 px-4 text-gray-500 cursor-pointer hover:text-orange-500" onClick={handleDrawer}>Sign In</li>
            </div>}
            <div className='flex items-center'>
              
             <Link to="/cart"> <li className="py-2 px-4 text-gray-500 cursor-pointer hover:text-orange-500"> <span className='border px-2  bg-green-400 text-white'  >{cartitems.length}</span> Cart</li>
             </Link>
            </div>
            <AuthWrapper />
             <Oauthuserprofile />
          </ul>
        </div>
       
      </div>
     
      {/* {hidesigninbutton ? null :   <AuthWrapper />} */}
      
      {isMobileMenuOpen && (
        <div className="lg:hidden flex justify-center   ">
          <ul className="flex flex-col space-y-2">
           
            <div className='flex items-center border-b-2'>
            <Link to='/search'>
              
              <FontAwesomeIcon icon={faSearch} className='text-gray-500 p-1 ' />
              <li className="py-2 px-4  text-gray-500 cursor-pointer hover:text-orange-500 mr-40 ">Search</li>
            </Link> 
            </div>
            <div className='flex items-center border-b-2'>
              <FontAwesomeIcon icon={faGift} className='text-gray-500' />
              <li className="py-2 px-4 text-gray-500 cursor-pointer hover:text-orange-500">Offers</li>
            </div>   
            <div className='flex items-center border-b-2'>
              <FontAwesomeIcon icon={faQuestionCircle} className='text-gray-600' />
              <li className="py-2 px-4 text-gray-500 cursor-pointer hover:text-orange-500">Help</li>
            </div>
            <div className='flex items-center border-b-2'>
              <FontAwesomeIcon icon={faUser} className='text-gray-600 ' />
              <li className="py-2 px-4 text-gray-500 cursor-pointer hover:text-orange-500" onClick={handleDrawer}>Sign In</li>
            </div>
            <div className='flex items-center border-b-2'>
             
              <li className="py-2 px-4 text-gray-500 cursor-pointer hover:text-orange-500"> <span className='border px-2  bg-green-400 text-white'  >{cartitems.length}</span> Cart</li>

            </div>
            <div className='flex items-center border-b-2'>
             
              <li className="py-6 px-5 ml-16   text-gray-500 cursor-pointer hover:text-orange-500 "></li>
             <AuthWrapper />
            </div>
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
