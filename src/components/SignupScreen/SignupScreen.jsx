import React from "react";
import "./SignupScreen.css";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const navigateToLogin=useNavigate();
  const handleLogin=()=>{
    navigateToLogin('/profile');
  }
  return (
    <div className="signup-box">
      <div className="signup-container">
        <h2>Create your PopX account</h2>
        <form action="">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter full name"
            required
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter phone number"
            required
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
          />

          <label htmlFor="company">Company name</label>
          <input type="text" id="company" placeholder="Enter company name" />

        
            <p>Are you an Agency?</p>
            <div className="agency">

            <input type="radio" id="yes" name="agency" value="yes" />
            <label htmlFor="yes">Yes</label>

            <input type="radio" id="no" name="agency" value="no" />
            <label htmlFor="no">No</label>
          </div>

          <button onClick={handleLogin} type="submit" className="ar">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;
