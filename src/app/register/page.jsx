import "./style.scss"

export default function Login () {

    return(
        <div className="login_page">
            <img src="/assets/logo.png" alt="Logo Tavern Talk" className='logo_login' />
            <form method="POST" action="/api/users/register" className="input_login">
                <h1>Nome</h1>
                <input name="name" type="text" className="gradient-border"/>
                <h1>Email</h1>
                <input name="email" type="email" className="gradient-border"/>
                <h1>Senha</h1>
                <input name="password" type="password" className="gradient-border"/>

                <button>
                    <img src="/assets/login-button.svg" alt="" />
                </button>
            </form>
        </div>
    );
}