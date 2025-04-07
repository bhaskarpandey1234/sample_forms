import React from 'react'
import './LandingScreen.css'
import { useNavigate } from 'react-router-dom'

const LandingScreen = () => {
  const navigate =useNavigate();
  const navigateToSignup=useNavigate();

  const handleSignup=()=>{
    navigateToSignup('/signup');
  }
  const handleLogin=()=>{
    navigate('/login');
  }
  return (
    <div className='box'>
        <div className="container">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button onClick={handleSignup} className='ca'>Create Account</button>
        <button onClick={handleLogin} className='ar'>Already Registered? Login</button>
        </div>
    </div>
  )
}

export default LandingScreen