
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import { Route, Routes } from 'react-router';
import './App.css'


const App= () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}
export default App
