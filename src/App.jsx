
import { useEffect } from 'react';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import { Route, Routes } from 'react-router';
import { useAuth0  } from '@auth0/auth0-react'; 

import './App.css'

const App= () => {
  
  const {isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  
 
  
  if(isLoading){return <h1>Loading...</h1>}
  if(!isAuthenticated && !isLoading){
    loginWithRedirect();
  }
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}
export default App
