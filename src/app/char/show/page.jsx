import NavBar from "/src/components/NavBar"
import "./style.scss"
import Link from "next/link";
import Header from "/src/components/Header"

export default function Index(){
    return(
        <div className="char_show">
            <NavBar/>
            <Header/>
            <div className="nome gradient-box">
                <span className="personagem">Eldrick Stormwind
                <span>7</span>
                </span>
                <span className="resumo_personagem"> 
                    <span>Elfo</span>
                    <span>Mago</span>
                    <span>Sábio</span>
                    <span>150 / 34.000xp</span>
                </span>
            </div>
            
            <div className="atributos">
                <span className="titulo_atributos">Atributos</span>
                <div className="atributos_line">
                    <div className=" atributo_div gradient-box">
                        <span className="atributo_title">Força</span>
                        <span className="atributo_value">10</span>
                        <div className="modificador">10</div>
                    </div>
                    <div className=" atributo_div gradient-box">
                        <span className="atributo_title">Destreza</span>
                        <span className="atributo_value">14</span>
                        <div className="modificador">0</div>
                    </div>
                    <div className=" atributo_div gradient-box">
                        <span className="atributo_title">Constituição</span>
                        <span className="atributo_value">12</span>
                        <div className="modificador">2</div>
                        
                    </div>

                </div>
                <div className="atributos_line">
                    <div className=" atributo_div gradient-box">
                        <span className="atributo_title">Inteligência</span>
                        <span className="atributo_value">18</span>
                        <div className="modificador">1</div>
                        
                    </div>
                    <div className=" atributo_div gradient-box">
                        <span className="atributo_title">Sabedoria</span>
                        <span className="atributo_value">16</span>
                        <div className="modificador">3</div>
                        
                    </div>
                    <div className="atributo_div gradient-box">
                        <span className="atributo_title">Carisma</span>
                        <span className="atributo_value">12</span>
                        <div className="modificador">5</div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

