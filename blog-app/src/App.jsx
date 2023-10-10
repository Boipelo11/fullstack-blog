
import './App.css'
import Navbar from '../../blog-app/src/Components/Navbar/Navbar' 
import { Routes, Route} from 'react-router-dom'
import Home from '../../blog-app/src/Pages/Home/Home'

function App() {
 

  return (
    
       <div>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
        </Routes>
        
        </div>

  )
}

export default App
