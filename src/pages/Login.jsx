import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
const Login = () => {

  const navigate = useNavigate();

  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  })
  const [error, setError] = useState(null);

  const {login} = useContext(AuthContext);
  
  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
}

const handleSubmit= async e =>{
  e.preventDefault();
  try {
   await login(inputs);
    navigate("/")
  } catch (err){
    console.log("problem here");
    setError(err.response.data)
  }

}
  return (
    <div className='auth'>
      <h1> Login</h1>
      <form>
        <input onChange={handleChange} required type='text' name="username" placeholder='Username'/>
        <input onChange={handleChange} required type='password' name="password" placeholder='Password'/>
        <button onClick={handleSubmit} type='submit'>Login</button>
      {error && <p>{error}</p>}  
        <span> Don't have an account?<Link to="/register">Register</Link></span>

      </form>
      
    </div>
  )
}

export default Login
