import React, { useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Drawer from './Drawer';
import { useAuth0 } from '@auth0/auth0-react';

const AuthWrapper = () => {
  const [isFirebaseAuth, setIsFirebaseAuth] = useState(false);
  const { isAuthenticated: isAuth0Auth, logout } = useAuth0(); // Destructuring logout for OAuth sign-out
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsFirebaseAuth(!!user); // Convert user to boolean
    });

    return () => unsubscribe(); // Clean up the listener when the component is unmounted
  }, []);

  const handleSignOut = () => {
    if (isFirebaseAuth) {
      signOut(auth)
        .then(() => {
          navigate('/'); // Redirect to home after signing out
        })
        .catch((error) => console.error('Error signing out:', error));
    } else if (isAuth0Auth) {
      logout({ returnTo: window.location.origin }); // Auth0 sign-out
    }
  };    

  const isAuthenticated = isFirebaseAuth || isAuth0Auth; // Determine if user is authenticated

  return (
    <div>
      {isAuthenticated ? (
        <Button onClick={handleSignOut} >Sign Out</Button> // Show sign-out button if user is authenticated
      ) : (
        <Drawer isOpen={true} onClose={() => {}} /> // Show the drawer for login/signup if user is not authenticated
      )}
    </div>
  );
};

export default AuthWrapper;
