// Componentes
import React from 'react';
import LoginButton from './components/LoginButton/LoginButton';
import LogoutButton from './components/LogoutButton/LogoutButton';
import Profile from './components/Profile/Profile';

import { useAuth0 } from '@auth0/auth0-react';


function App() {
  
  const {isAuthenticated, isLoading } = useAuth0()

  if(isLoading) return <h1> Loading...</h1>

  return (
    <div className="App">
      <h1>APP</h1>
      { isAuthenticated ? <LogoutButton/>: <LoginButton/>}
      <Profile/>
    </div>
  );
}

export default App;