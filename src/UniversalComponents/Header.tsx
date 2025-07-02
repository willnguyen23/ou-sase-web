import './Header.css'

export default function Header() {
    return (
        <header className="header-container">
            <div className="logo">
                <a href="https://www.saseconnect.org/" target="_blank">
                    <img src="src/Images/ou-sase-logo.png" className="ou-sase-logo" alt="ou sase logo"/>
                </a> 
            </div>
            <div className="navbar-button">
                <a href="./exec.html"><button><b>2025 Executive Board</b></button></a>
                <a href="./index.html"><button><b>Home</b></button></a>
                <a href="./sponsor.html"><button><b>Sponsors</b></button></a>
            </div>
            <div className="empty-space">

            </div>
        </header>  
    )
}