import './Post.css'
import coffee from '../../assets/coffee.jpg'
import user from '../../assets/Chacha.jpg'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {BsFillPenFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div className="single-post">
      <div className="content">
        <img className="single-cover" src={coffee}/>
        <div className="user">
          <img className="author" src={user}/>
          <span>Chacha</span>

          </div>
        <div className="article">
        <p>Posted on 3 June, 2023</p>
        <div className="article-icons">
          <Link to={`/add?edit=1`}>
          <BsFillPenFill className="edit"/>
          </Link>
        <RiDeleteBin5Fill className="delete"/>
        
        </div>
        <h1 className="post-title">Blog Post title</h1>
        <p className="description">Description</p>
        </div>
        </div>
      
     

    </div>
  )
}

export default Post