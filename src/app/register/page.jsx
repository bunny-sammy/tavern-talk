import RegisterForm from "/src/components/RegisterForm"
import "./style.scss"

export default function Register () {
    return (
        <div className="login_page">
            <img src="/assets/logo.png" alt="Logo Tavern Talk" className='logo_login' />
            <RegisterForm/>
        </div>
    )
}