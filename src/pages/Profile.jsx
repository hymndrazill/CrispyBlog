import React from 'react'

const Profile = () => {
  return (
    <div className='profile'>
        <h1>Edit your portfolio</h1>
    <div className="user_info">
    <label htmlFor="">Username</label>
      <input text="text" placeholder='Username '/>
    </div>
    <div className="user_info">
      <label htmlFor="">email</label>
      <input text="email" placeholder='Email '/>
      </div>
      <div className="user_info">
      <labe<div className="user_info">l htmlFor="">password</label>
      <input text="password" placeholder='password '/>
      </div>
      <div className="user_info">
      <label htmlFor="">image</label>
      <input text="file" placeholder='Your new image. '/>
</div>


    </div>
  )
}

export default Profile
