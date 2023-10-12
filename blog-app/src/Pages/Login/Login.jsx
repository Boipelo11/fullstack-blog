import {GiCoffeeCup} from 'react-icons/gi'
import './Login.css'

const Login = () => {
  return (
    <div className="login-form">
        <div className="form-container">
        <GiCoffeeCup className="form-icon"/>
        <h2>Welcome Back</h2>
        <input type="text" placeholder="Your Email"/>
        <br/>
        <br/>
        <input type="text" placeholder="Password"/>
        <button>Log In</button>  
        </div>
    </div>
  )
}

export default Login