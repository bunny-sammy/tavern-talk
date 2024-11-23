import "./style.scss"
import Link from "next/link";


const Login = () => { 
    return(
        <div className="login_page">
            <img src="/assets/logo.png" alt="Logo Tavern Talk" className='logo_login' />
            <div className="input_login">
                <h1>Email</h1>
                <div  className=" teste gradient-box">
                <input type="email"/>
                </div>
                <h1>Senha</h1>
                <div className="teste gradient-box">
                <input type="password"/>
                </div>
                
            {/* <button>esqueci minha senha</button> */}
            <Link href="/char/index">
                <button>
                    <img src="/assets/login-button.svg" alt="" />
                </button>
            </Link>
            </div>
        </div>
    );
}
export default Login;