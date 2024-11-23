import NavBar from "/src/components/NavBar"
import "./style.scss"
import Link from "next/link";

export default async function Index({params}){
    const {userId, charId } = await params;

    const char = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/chars/`+charId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json())
    .then((result) => {
        return result.char;
    })

    function getModifier (stat) {
        var modifier = (stat-10)/2;
        if (!Number.isInteger(modifier)) {
            modifier = modifier > 0 ? Math.floor(modifier) : Math.ceil(modifier);
        }
        return modifier;
    }

    return(
        <div className="char_show">
            <NavBar userId={userId}/>
            <h1>TavernTalk</h1>
            <div className="nome gradient-box">
                <span className="personagem">{char.name}
                <span>{char.level}</span>
                </span>
                <span className="resumo_personagem"> 
                    <span>{char.race}</span>
                    <span>{char.class}</span>
                    {/* <span>Sábio</span>
                    <span>150 / 34.000xp</span> */}
                </span>
            </div>
            
            <div className="atributos">
                <span className="titulo_atributos">Atributos</span>
                <div className="atributos_line">
                    <div className=" atributo_div gradient-box">
                        <span className="atributo_title">Força</span>
                        <span className="atributo_value">{char.str}</span>
                        <div className="modificador">{getModifier(char.str)}</div>
                    </div>
                    <div className=" atributo_div gradient-box">
                        <span className="atributo_title">Destreza</span>
                        <span className="atributo_value">{char.dex}</span>
                        <div className="modificador">{getModifier(char.dex)}</div>
                    </div>
                    <div className=" atributo_div gradient-box">
                        <span className="atributo_title">Constituição</span>
                        <span className="atributo_value">{char.con}</span>
                        <div className="modificador">{getModifier(char.con)}</div>
                        
                    </div>

                </div>
                <div className="atributos_line">
                    <div className=" atributo_div gradient-box">
                        <span className="atributo_title">Inteligência</span>
                        <span className="atributo_value">{char.int}</span>
                        <div className="modificador">{getModifier(char.int)}</div>
                        
                    </div>
                    <div className=" atributo_div gradient-box">
                        <span className="atributo_title">Sabedoria</span>
                        <span className="atributo_value">{char.wis}</span>
                        <div className="modificador">{getModifier(char.wis)}</div>
                        
                    </div>
                    <div className="atributo_div gradient-box">
                        <span className="atributo_title">Carisma</span>
                        <span className="atributo_value">{char.cha}</span>
                        <div className="modificador">{getModifier(char.cha)}</div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

