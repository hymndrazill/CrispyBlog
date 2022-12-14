import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Profile = () => {
  const {currentUser,logout} = useContext(AuthContext)
  let userId= currentUser.id
  const [userInfo,setUserInfo] = useState({
    username:'',
    email:'',
    password:'',
    img:'',
    id: userId
  })

  const navigate = useNavigate();
  const handleChange = (e) =>{
    setUserInfo(prev=> ({...prev, [e.target.name]: e.target.value}))
  }
  const updateUser =  async(e)=>{
    e.preventDefault();
    try {
     await axios.put(`/users/${userId}`, userInfo);
      console.log("success");
      logout();
      navigate("/")
  
    } catch(err) {
      console.log('something is caught');
      console.log(err);
    }
  }



  return (
    <div className='profile'>
        <h1>You can edit your infos here: {currentUser.username}</h1>
      <div className="user_profile">
      <div className='user_img'>
        <img className="userInfoImg" src={currentUser.img} alt="" />
      </div>
      <div className="user_info">
      <input  required onChange={handleChange} name="username" text="text" placeholder='Username '/>
      </div>

        <div className="user_info">
        <input required onChange={handleChange} name="email" text="email" placeholder='Email '/>
        </div>
        <div className="user_info">
        <input required onChange={handleChange} name="password" type="password" placeholder='password '/>
        </div>
        <div className="user_info">
        <input  required onChange={handleChange} name="img" type="file"/>
        </div>
        <button onClick={updateUser}className='profile_btn'>Edit User.</button>
        </div>
    </div>
  )
}

export default Profile
