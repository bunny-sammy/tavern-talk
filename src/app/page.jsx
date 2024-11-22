import './style.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function App() {

  return (
    <div className="home">
      <img src="/assets/logo.png" alt="Logo Tavern Talk" className='logo' />
      <img src="/assets/dragon-castle.svg" alt="" className="dragon"/>
      
      <div className="buttons">
        <Link href="/login">
          <img src="/assets/login-page-button.svg" alt="" />
        </Link>
      </div>
    </div>
  )
}