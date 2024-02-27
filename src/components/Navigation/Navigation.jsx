import { Link } from "react-router-dom"
import "./Navigation.css"

const Navigation = () => {
    return (
        <div class="navigation">
            <div class="navbar">
                <div className="links">
                    <div class="navbar-brand">
                        <img src="/assets/images/logo.png" width="80.382px" height="70px" alt="Logo" />
                    </div>
                    <div class="navbar-links">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/projects"}>Projects</Link>
                        <Link to={"/about"}>About</Link>
                    </div>
                </div>
                <div className="options">
                    <div class="navbar-social">
                        <a href="https://github.com/nachosanson6" target="_blank" rel="noopener noreferrer">
                            <img className="logoGithub" src="/assets/images/logoGITHUB.png" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/ignacio-sanson/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/logoLINKEDIN.png" alt="LinkedIn" />
                        </a>
                    </div>
                    <div class="navbar-language">
                        <button onclick="toggleLanguage()">
                            {/* <img src={language === 'english' ? spanish : english} alt="Language" /> */}
                        </button>
                    </div>
                    <div class="navbar-contact">
                        <a href="#contact">
                            <button>Contact</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navigation