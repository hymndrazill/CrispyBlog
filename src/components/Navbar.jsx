import React from 'react'
import logo from '../img/logo.png'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
const Navbar = () => {
  const {currentUser,logout} = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className='link' to='/?cat=art'>
            <h6>Art</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>Science</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>Technology</h6>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h6>Cinema</h6>
          </Link>
          <Link className='link' to='/?cat=desgin'>
            <h6>Desgin</h6>
          </Link>
          <Link className='link' to='/?cat=food'>
            <h6>food</h6>
          </Link>
          <span>
            <Link to="/profile">
            {currentUser.username}

            </Link>
            </span>
        { currentUser ?  <span onClick={logout}>Logout</span>
        : <Link className="link" to="/login">login</Link>  
      }
          <span className='write'>
            <Link className='link' to='/write'>Write</Link>
          </span>

        </div>
      </div>
    </div>
  )
}

export default Navbar
