import {GiCoffeeCup} from 'react-icons/gi'
import './Register.css'

const Register = () => {
  return (
    <div className="register-form">
        <div className="form-container">
        <GiCoffeeCup className="form-icon"/>
       
        <input type="text" placeholder="Your Email"/>
        <br/>
        <br/>
        <input type="text" placeholder="Your Password"/>
        <br/>
        <br/>
        <input type="text" placeholder="Confirm Password"/>
        <button>Sign Up</button>  
        </div>
    </div>
  )
}

export default Register