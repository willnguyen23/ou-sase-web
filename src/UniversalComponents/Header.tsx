import './Components.css'

export default function Header() {
    return (
        <div className="header-container">
            <div className="empty-space">
                
            </div>
            <div className="logo">
                <a href="https://www.saseconnect.org/" target="_blank">
                    <img src="src/Images/ou-sase-logo.png" className="ou-sase-logo" alt="ou sase logo"/>
                </a>     
            </div>
            <div className="socials">
                <a target="_blank" href="https://ousase.carrd.co/?fbclid=PAZXh0bgNhZW0CMTEAAadDLasf6uBxuZfIw89MG443dUBpaZbVXIDAiBHGFcKos9K4OJSr-3MB3JnVMA_aem_mjifGURJpZUP_PUo5q4HHw">
                    <img src="src/Images/carrdLogo.png" className="social-logos" alt="card-logo" />
                </a>
                <a target="_blank" href="https://www.instagram.com/ou.sase/">
                    <img src="src/Images/instagramLogo.png" className="social-logos" alt="instagram-logo" />
                </a>
                <a target="_blank" href="https://discord.gg/5ZRuAVvsJB">
                    <img src="src/Images/discordLogo.png" className="social-logos" alt="discord-logo" />
                </a>
            </div>
        </div>  
    )
}