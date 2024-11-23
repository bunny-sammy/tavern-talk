import NavBar from "@/components/NavBar"
import "../style.scss"
import Link from "next/link";


export default function Index(){
    return(
        <div className="char_index">
            <NavBar/>
            <h1>TavernTalk</h1>
            <div className="button_char">
                <Link href="/char/show" className="char_link gradient-box">
                    <div className="texto_botao">
                    <span className="personagem">Eldrick Stormwind</span>
                    <span className="estatisticas"> For: 10, Des: 14, Con: 12, Int: 18, Sab: 16, Car: 12 </span>
                    </div>
                    <img src="/assets/seta.svg" alt="seta" className='seta'/>
                </Link>
                <Link href="/char/show" className="char_link gradient-box">
                    <div className="texto_botao">
                    <span className="personagem">Kelthar Shadowbane</span>
                    <span className="estatisticas"> For: 10, Des: 14, Con: 12, Int: 18, Sab: 16, Car: 12 </span>
                    </div>
                    <img src="/assets/seta.svg" alt="seta" className='seta'/>
                </Link>
            </div>
        </div>
        
    )
}

