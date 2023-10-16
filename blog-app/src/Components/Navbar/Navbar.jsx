import './Navbar.css'
import {GiCoffeeCup} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="logo">
    <GiCoffeeCup className="icon"/>
    <h1>DevLife</h1>
    </div>
    <div className="navLinks">
      <nav>
      <ul>
        <li>
            <NavLink to="/" className="navLink">Home</NavLink>
        </li>
        <li>
        <NavLink to="/add" className="navLink">Add Blog</NavLink>
        </li>
        <li>
        <NavLink to="login" className="navLink">Login</NavLink>
        </li>
        <li>
        <NavLink to="register" className="navLink">Sign Up</NavLink>
        </li>
    </ul>
      </nav>
   
    </div>
    </div>
  )
}

export default Navbar