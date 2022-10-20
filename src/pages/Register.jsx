import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
const Register = () => {
  const [inputs,setInput] = useState({
    username:"",
    email:"",
    password:""
  })
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const handleChange = e =>{
    setInput(prev=>({...prev,[e.target.name]: e.target.value}))
}

const handleSubmit= async e =>{
  e.preventDefault();
  try {
    const res = await axios.post("/auth/register", inputs)
    navigate("/login")
  } catch (err){
    setError(err.response.data)
  }

}
  return (
    <div className='auth'>
      <h1> Register</h1>
      <form>
        <input required type='text'  name="username"placeholder='Username' onChange={handleChange}/>
        <input required type='email' name="email" placeholder='Email' onChange={handleChange} />
        <input required type='password' name="password" placeholder='password' onChange={handleChange}/>
        <button onClick={handleSubmit} type='submit'>Register</button>
       {error && <p>{error}</p>} 
        <span> You already have an account?<Link to="/login">Login</Link></span>

      </form>
      
    </div>
  )
}

export default Register
