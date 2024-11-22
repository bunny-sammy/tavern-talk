import './App.css'
import logo from './assets/logo.png'
import dragon from './assets/dragon-castle.svg'
import loginButton from './assets/login-page-button.svg'
import { Link } from "react-router-dom";
import loginPage from './login'

function App() {

  return (
    <>
      <img src={logo} alt="Logo Tavern Talk" className='logo' />
      <img src={dragon} alt="" className="dragon"/>
      
      <Link to="/login">
        <img src={loginButton} alt="" />
      </Link>
      <Link to={loginPage}>
        login
      </Link>

    </>
  )
}

export default App
