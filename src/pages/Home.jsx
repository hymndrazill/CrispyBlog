import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import axios from "axios";
const Home = () => {
const [posts,setPosts] = useState([]);
const cat = useLocation().search

useEffect(()=>{
  const fetchData = async () => {
    try {
      const res = await axios.get(`/posts${cat}`)
      setPosts(res.data);
    } catch (err){
      console.log(err);
    }
  }
  fetchData();
}, [cat])
// const posts = [
//   {
//     id:1,
//     title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus non fugit nemo iure earum, mollitia et reprehenderit hic cumque maxime! Molestias recusandae cupiditate quo repudiandae magnam! Commodi, rem tenetur.',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.',
//     img:'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
//   },
//   {
//     id:2,
//     title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus non fugit nemo iure earum, mollitia et reprehenderit hic cumque maxime! Molestias recusandae cupiditate quo repudiandae magnam! Commodi, rem tenetur.',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.',
//     img:'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
//   },
//   {
//     id:3,
//     title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus non fugit nemo iure earum, mollitia et reprehenderit hic cumque maxime! Molestias recusandae cupiditate quo repudiandae magnam! Commodi, rem tenetur.',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.',
//     img:'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
//   },
//   {
//     id:4,
//     title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus non fugit nemo iure earum, mollitia et reprehenderit hic cumque maxime! Molestias recusandae cupiditate quo repudiandae magnam! Commodi, rem tenetur.',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.',
//     img:'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
//   },
//   {
//     id:5,
//     title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus non fugit nemo iure earum, mollitia et reprehenderit hic cumque maxime! Molestias recusandae cupiditate quo repudiandae magnam! Commodi, rem tenetur.',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.',
//     img:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
//   },
// ]


  return (
    <div className='home'>
      <div className="posts">
        {posts.map( post =>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
          <div className="content">
            <Link className='link' to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>

              <p>{post.desc}</p>
              <button>Read More.</button>
          </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
