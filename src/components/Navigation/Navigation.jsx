import { Link } from "react-router-dom";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar expand="lg">
            <div className="navigation">
                <div className="links">
                    <div className="navbar-brand">
                        <img src="/assets/images/logo.png" width="80.382px" height="70px" alt="Logo" />
                    </div>

                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="pages">
                        <Nav className="mr-auto">
                            <Link to={"/"} className="nav-link" activeClassName="active">Home</Link>
                            <Link to={"/projects"} className="nav-link" activeClassName="active">Projects</Link>
                            <Link to={"/about"} className="nav-link" activeClassName="active">About</Link>
                        </Nav>
                    </div>
                    <div className="options">
                        <div className="navbar-social">
                            <a href="https://github.com/nachosanson6" target="_blank" rel="noopener noreferrer">
                                <img className="logoGithub" src="/assets/images/logoGITHUB.png" alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/ignacio-sanson/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/logoLINKEDIN.png" alt="LinkedIn" />
                            </a>
                        </div>
                        <div className="navbar-language">
                            {/* <button onClick={toggleLanguage}>
                            <img src={language === 'english' ? spanish : english} alt="Language" />
                            Aquí necesitas manejar la lógica para cambiar de idioma
                        </button> */}
                        </div>
                        <div className="navbar-contact">
                            <a href="#contact">
                                <button>Contact</button>
                            </a>
                        </div>
                    </div>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" gb="light" className="custom-toggler" />
            </div>
        </Navbar>
    );
};

export default Navigation;
