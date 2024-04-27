import React, { useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Drawer from './Drawer';
import { useAuth0 } from '@auth0/auth0-react';

const AuthWrapper = () => {
  const [isFirebaseAuth, setIsFirebaseAuth] = useState(false);
  const { isAuthenticated: isAuth0Auth, logout } = useAuth0(); 
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsFirebaseAuth(!!user); 
    
    });

    return () => unsubscribe(); 
  }, []);

  const handleSignOut = () => {
    if (isFirebaseAuth) {
      signOut(auth)
        .then(() => {
          navigate('/'); 
        })
        .catch((error) => console.error('Error signing out:', error));
    } else if (isAuth0Auth) {
      logout({ returnTo: window.location.origin }); 
    }
  };    

  const isAuthenticated = isFirebaseAuth || isAuth0Auth;
  
  const resdetail = window.location.pathname === '/resdetail'

  return (
    <div>
      {isAuthenticated   ? (
        <Button onClick={handleSignOut} >Sign Out</Button> 
      ) : (
        !resdetail &&  <Drawer isOpen={true} onClose={() => {}} />
      )}

      
    </div>
  );
};

export default AuthWrapper;
