import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
<div className='profile-box'>
        <div className="profile-container">
        <h2>Account Settings</h2>

            <div className="profile-img">
                <div className="img">
                    <img src="./profile.png" alt="" />
                    <img className='camera' src="./camera.svg" alt="" />
                </div>
                <div className="name">
                    <h4>Marry Doe</h4>
                    <p>Marry@Gmail.com</p>
                </div>
            </div>
            <div className="profile-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt molestiae voluptate, numquam quae totam unde velit tenetur cupiditate explicabo laboriosam quaerat delectus ea mollitia est nostrum sequi dolorum reiciendis aliquam. </p>
            </div>
        </div>
        <hr className='hr1'/>

        <hr className='hr2' />

    </div>  )
}

export default Profile