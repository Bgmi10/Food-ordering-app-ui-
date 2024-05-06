import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Auth0Provider
    domain="dev-mmj882fndwuek5sn.us.auth0.com"
    clientId="b0T1jKBeOijTMcvYojG0fFArxNa4huQq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ><App />
  </Auth0Provider>

    
  
);


reportWebVitals();
