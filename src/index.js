// Librerias
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom.scss';
import './assets/index.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faSearch, faMessage, faBell, faBars, faMap, faLocationDot } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faSearch, faMessage, faBell, faBars, faMap, faLocationDot)

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider  
      domain={domain} 
      clientId={clientId}
      redirectUri={window.location.origin}
    > 
      <App/>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

