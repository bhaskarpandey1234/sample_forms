import React from 'react'
import LandingScreen from './components/LandingScreen/LandingScreen'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginScreen from './components/LoginScreen/LoginScreen'
import SignupScreen from './components/SignupScreen/SignupScreen'
import Profile from './components/Profile/Profile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen/>} />
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/signup" element={<SignupScreen/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App