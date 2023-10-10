import './Navbar.css'
import {GiCoffeeCup} from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="logo">
    <GiCoffeeCup className="icon"/>
    <h1>DevLife</h1>
    </div>
    <div className="navLinks">
    <ul>
        <li>
            <a href="" className="navLink">Home</a>
        </li>
        <li>
            <a href="" className="navLink">Add Blog</a>
        </li>
        <li>
            <a href="" className="navLink">Login</a>
        </li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar