import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useSyncExternalStore } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { checkValidData } from '../utils/validate';
import { useAuth0 } from "@auth0/auth0-react";
import Oauthlogin from './Oauthlogin';



const Drawer = ({ isOpen, onClose }) => {
  const [signin, setsignin] = useState(true);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [username, setusername] = useState('');
  const [err, seterr] = useState("")

  const { loginWithRedirect } = useAuth0();

  const toggleSignin = () => {
    setsignin(!signin);
  };

 
  

  const handleLoginButtonClick = () => {
    if (!emailValue || !passwordValue) {
      seterr("Please fill in all fields");
    } else {
      const msg = checkValidData(emailValue, passwordValue);
    seterr(msg)
    }
  };
  

  return (
    <div className="fixed inset-y-0 right-0 z-50">
      <div
        className={`fixed inset-0 bg-black opacity-50 z-10 transition-opacity duration-300 ${
          isOpen ? 'visible' : 'invisible'
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 w-[400px] bg-white z-20 shadow-lg transform transition-transform duration-75 ease-in-out ${
          isOpen ? 'translate-x-0 delay-150' : 'translate-x-5'
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="py-4 px-6 relative">
            <button
              onClick={onClose}
              className="text-gray-400 py-2 px-1 text-3xl font-thin absolute top-0 left-1 z-30"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt="Shakes"
              className="absolute top-8  right-5 w-24 h-24 object-cover z-20"
            />
            <div className="text-3xl mt-10 ml-3 font-semi ">
              {signin ? 'Login' : 'Signup'}
            </div>
            <div>
              <div className="ml-3"> or </div>
              <p
                className="text-orange-500 mb-2 ml-3 cursor-pointer"
                onClick={toggleSignin}
              >
                {' '}
                {signin
                  ? 'Already have an account ?'
                  : 'login into your account'}
              </p>
            </div>
            <div className="whitespace-nowrap ml-3">&#8209;&#8209;&#8209;&#8209;&#8209;</div>
            <div className="ml-3 mt-5">
              {!signin ? (
                <TextField
                  id="filled-basic"
                  label="Name"
                  variant="filled"
                  size="medium"
                  className="w-80 mt-2"
                  onChange={(e) => setusername(e.target.value)}
                />
              ) : null}
            </div>
            <div className="ml-3 mt-6">
              <TextField
                id="filled-basic"
                label="E-mail"
                variant="filled"
                size="medium"
                className="w-80"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
            <div className="ml-3 mt-6">
              <TextField
                id="filled-basic"
                label="Password"
                variant="filled"
                size="medium"
                className="w-80"
                type="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            { <p className="text-red-500 ml-1">{err}</p>}
            </div>
            <div className="ml-3 mt-6 w-80">
              <Button variant="outlined" onClick={handleLoginButtonClick}>{signin ? 'Login' : 'Sign in'}</Button>
             
            </div>
            <Oauthlogin />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Drawer;
