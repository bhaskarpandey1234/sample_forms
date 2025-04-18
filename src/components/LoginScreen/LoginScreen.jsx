import React from 'react'
import './LoginScreen.css'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
  const navigateToLogin=useNavigate();
  const handleLogin=()=>{
    navigateToLogin('/profile');
  }

  return (
    <div className='login-box'>
        <div className="login-container">
        <h2>Sigin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <form action="">
            <label htmlFor="email">Email address</label>
            <input type="email" id='email' placeholder='Enter email address'/>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Enter password'/>
            <button onClick={handleLogin} type='submit' className='ar'>Login</button>
        </form>

        </div>
    </div>
  )
}

export default LoginScreen