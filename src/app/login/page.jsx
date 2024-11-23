import "./style.scss"
import LoginForm from "/src/components/LoginForm"
import Link from "next/link";

const Login = () => { 
    return(
        <div className="login_page">
            <img src="/assets/logo.png" alt="Logo Tavern Talk" className='logo_login' />
            <div className="input_login">
                
            <LoginForm/>
            </div>
        </div>
    );
}
export default Login;