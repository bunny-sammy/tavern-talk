import NavBar from "@/components/NavBar"
import "./style.scss"
import Link from "next/link";

export default function Index(){
    return(
        <div className="char_index">
            <NavBar/>
            <h1>TavernTalk</h1>
            <div className="button_char gradient-box" >
                <button>Eldrick Stormwind</button>
            </div>
        </div>
    )
}

