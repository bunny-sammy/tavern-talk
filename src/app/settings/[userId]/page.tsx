import NavBar from "../../../components/NavBar";
import "./style.scss";
import Link from "next/link";

export default async function Settings({params}) {
    const { userId } = await params;
  
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/find/`+userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json())
      .then((result) => {
        return result.user;
      })

    const Arrow = () => (
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.42383 9.42383L1.92383 16.9238C1.71248 17.1352 1.42584 17.2539 1.12695 17.2539C0.828065 17.2539 0.541421 17.1352 0.330076 16.9238C0.118732 16.7125 2.22687e-09 16.4258 0 16.127C-2.22687e-09 15.8281 0.118732 15.5414 0.330076 15.3301L7.03414 8.62789L0.331952 1.92383C0.227304 1.81918 0.144293 1.69495 0.0876589 1.55822C0.0310243 1.42149 0.00187469 1.27494 0.00187469 1.12695C0.00187468 0.978958 0.0310243 0.832414 0.0876589 0.695686C0.144293 0.558958 0.227304 0.434724 0.331952 0.330077C0.436599 0.225429 0.560833 0.142419 0.697561 0.0857842C0.834289 0.0291496 0.980833 -1.10264e-09 1.12883 0C1.27682 1.10264e-09 1.42336 0.0291496 1.56009 0.0857842C1.69682 0.142419 1.82105 0.225429 1.9257 0.330077L9.4257 7.83008C9.53046 7.93472 9.61353 8.05901 9.67015 8.19582C9.72677 8.33263 9.75582 8.47928 9.75565 8.62734C9.75548 8.77541 9.72608 8.92198 9.66913 9.05866C9.61219 9.19534 9.52883 9.31943 9.42383 9.42383Z" fill="url(#paint0_radial_367_591)"/>
            <defs>
                <radialGradient id="paint0_radial_367_591" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(60.5154) scale(19.8209 16.9844)">
                    <stop stopColor="#8B8B8B"/>
                    <stop offset="0.218776" stopColor="#E2E1E1"/>
                    <stop offset="0.421908" stopColor="#8B8B8B"/>
                    <stop offset="0.609414" stopColor="#E2E1E1"/>
                    <stop offset="0.791712" stopColor="#8B8B8B"/>
                    <stop offset="1" stopColor="#E2E1E1"/>
                </radialGradient>
            </defs>
        </svg>

    )

    return(
        <div className="settings_page">
            <NavBar userId={userId}/>
            <header>
                Configurações
            </header>
            <div className="settings-content">
                <h1>Olá, {user.name}!</h1>
                <Link href="/settings/name" className="link">Editar nome <Arrow/></Link>
                <Link href="/settings/email" className="link">Editar email <Arrow/></Link>
                <Link href="/settings/password" className="link">Editar senha <Arrow/></Link>
                <Link href="/login" className="link">Sair da conta<Arrow/></Link>
            </div>
        </div>
    )
}