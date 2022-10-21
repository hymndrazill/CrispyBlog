import React, { useEffect, useState } from 'react';
import Delete from '../img/delete.png';
import Edit from '../img/edit.png';
import {Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu';
import axios from 'axios';
import moment from "moment"
import { useContext } from 'react';
import  {AuthContext} from "../context/authContext"
const Single = () => {
  const [post,setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const navigate = useNavigate()
  const {currentUser} = useContext(AuthContext)
 
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`); 
        setPost(res.data);
      } catch (err){
       console.log(err); // console.log(err);
      }
      }
    
    fetchData();
  }, [postId])
// console.log(post);
console.log(currentUser.username);
  console.log(post.username);
  console.log(currentUser.username === post.username);
  const handleDelete = async () =>{
    try {
      await axios.delete(`/posts/${postId}`); 
      navigate("/")
    } catch (err) {
      // console.log(err);
      // console.log("err here");
    }
  }
  const getText = html =>{
    const doc = new DOMParser().parseFromString(html,'text/html');
    return doc.body.textContent
  }

  return (
    <div className='single'>
      <div className="content">
      <img src={`../upload/${post.img}`} alt="" />
      <div className="user">
       { post?.userImg && <img src={post?.userImg} alt="img" />}
      <div className="info">
          <span>{post?.username}</span>
          <p>{moment(post.date).fromNow()}</p>
      </div>
      { currentUser.username === post.username  && (
        <div className="edit">
        <Link to={`/write?edit=2`} state={post}>
          <img src={Edit} alt="" />
        </Link>
          <img onClick={handleDelete} src={Delete} alt="" />
        </div>
       )} 
      </div>
      <h1>{getText(post.title)}</h1>
          {getText(post.desc)}
      </div>
        <div className="menu">
        <Menu cat={post.cat}/>
        </div>
    </div>
  )
}

export default Single
