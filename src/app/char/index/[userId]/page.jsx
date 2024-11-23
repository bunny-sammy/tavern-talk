import NavBar from "/src/components/NavBar"
import "./style.scss"
import Link from "next/link";

export default async function Index({params}){
    const { userId } = await params;
    const characters = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/chars/list/`+userId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json())
    .then((result) => {
        return result.chars;
    })

    const user = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/find/`+userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json())
      .then((result) => {
        return result.user;
      })
      console.log(user.name);

    return(
        <div className="char_index">
            <NavBar userId={userId} />
            <h1>TavernTalk</h1>
            
            <div className="button_char">
                {characters.map((char,index)=>
                    <Link key={index} href={`/char/index/${userId}/${char._id}`} className="char_link gradient-box">
                        <div className="texto_botao">
                        <span className="personagem">{char.name}</span>
                        <span className="estatisticas"> For: {char.str}, Des: {char.dex}, Con:  {char.con}, Int:  {char.int}, Sab:  {char.wis}, Car: {char.cha}</span>
                        </div>
                        <img src="/assets/seta.svg" alt="seta" className='seta'/>
                    </Link>
                )}
            </div>
        </div>
        
    )
}

