import React from 'react';
import Delete from '../img/delete.png';
import Edit from '../img/edit.png';
import {Link } from 'react-router-dom'
import Menu from '../components/Menu';
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
      <img src="https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className="user">
        <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="" />
      <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
      </div>
      <div className="edit">
      <Link to={`/write?edit=2`}>
        <img src={Edit} alt="" />
      </Link>
        <img src={Delete} alt="" />
      </div>
      </div>
      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam repudiandae aut id sed veritatis eligendi.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        <br />
        Possimus commodi officia repudiandae ad provident exercitationem inventore ratione, rem voluptas fugit illo praesentium, laboriosam illum unde eaque quas architecto cumque aperiam temporibus necessitatibus veritatis. Beatae, explicabo officia sit fugit asperiores, quis, rem unde excepturi neque atque dignissimos. Praesentium, a repudiandae! Deserunt consequuntur architecto temporibus quaerat tempore dolorum non eveniet dolores adipisci. Similique provident dignissimos voluptatum repellendus, id porro ad exercitationem soluta repudiandae, numquam tempora dolores sapiente eum rem asperiores necessitatibus dolorum? Perspiciatis aspernatur culpa harum. Numquam provident voluptates, quam est recusandae dignissimos iusto molestias commodi itaque culpa unde quas perferendis inventore?</p>
        <br />
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita ad, placeat, deserunt asperiores enim quo atque accusamus eius neque explicabo tempora ipsam dolorem eveniet sit cumque! Provident nostrum sed vel. Neque itaque, expedita earum quia excepturi ipsum cupiditate beatae aperiam placeat optio molestias sed vel cumque iste vitae. Provident totam quos deleniti blanditiis dolorum possimus modi iste a, est ab minima itaque. Nisi ipsam saepe a fuga, nihil, iusto at atque doloribus rem commodi recusandae, illum itaque! Mollitia, asperiores tempora praesentium beatae incidunt illum ducimus id ullam dolorem dignissimos qui quaerat eligendi! Ut impedit obcaecati soluta labore distinctio, ipsum esse voluptate. Fugiat repellendus, aut iste exercitationem natus sunt non est maxime cupiditate necessitatibus numquam! Nemo alias magnam laudantium quos ex id velit quo. Quisquam vitae corrupti rem mollitia dolorum, voluptatibus voluptatum molestias esse obcaecati commodi nemo hic, porro consequuntur. Exercitationem delectus totam assumenda voluptate animi, iste neque magni! Possimus?</p>
      </div>
        <div className="menu">
        <Menu/>

        </div>
    </div>
  )
}

export default Single
