import "./style.scss"
const Login = () => { 
    return(
        <div className="login_page">
            <img src="/assets/logo.png" alt="Logo Tavern Talk" className='logo_login' />
            <div className="input_login">
                <h1>Email</h1>
                <input type="email" className="gradient-border"/>
                <h1>Senha</h1>
                <input type="senha" className="gradient-border"/>

            {/* <button>esqueci minha senha</button> */}
            {/* <Link href="/page"> */}
                <button>
                    <img src="/assets/login-button.svg" alt="" />
                </button>
            {/* </Link> */}
            </div>
        </div>
    );
}
export default Login;