import React from 'react'

const Menu = () => {
    const posts = [
        {
          id:1,
          title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus non fugit nemo iure earum, mollitia et reprehenderit hic cumque maxime! Molestias recusandae cupiditate quo repudiandae magnam! Commodi, rem tenetur.',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.',
          img:'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        },
        {
          id:2,
          title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus non fugit nemo iure earum, mollitia et reprehenderit hic cumque maxime! Molestias recusandae cupiditate quo repudiandae magnam! Commodi, rem tenetur.',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.',
          img:'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        },
        {
          id:3,
          title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus non fugit nemo iure earum, mollitia et reprehenderit hic cumque maxime! Molestias recusandae cupiditate quo repudiandae magnam! Commodi, rem tenetur.',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.',
          img:'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        },
        {
          id:4,
          title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus non fugit nemo iure earum, mollitia et reprehenderit hic cumque maxime! Molestias recusandae cupiditate quo repudiandae magnam! Commodi, rem tenetur.',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.',
          img:'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        },
        {
          id:5,
          title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus non fugit nemo iure earum, mollitia et reprehenderit hic cumque maxime! Molestias recusandae cupiditate quo repudiandae magnam! Commodi, rem tenetur.',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.',
          img:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        },
      ]
  return (
    <div className='menu'>
        <h1>Other Posts you may like.</h1>
            {posts.map(post =>(
                <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More.</button>
                </div>
            ))}
    </div>
  )
}

export default Menu
