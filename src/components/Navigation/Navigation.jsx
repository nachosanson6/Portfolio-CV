import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import ContactModal from "../ContactModal/ContactModal";

const Navigation = () => {

    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleLinkClick = () => {
        setExpanded(false);
    };

    const openModal = () => {
        setOpen(true)
    }

    return (
        <Navbar expand="lg" expanded={expanded} onToggle={handleToggle}>
            <div className="navigation">
                <div className="links">
                    <div className="navbar-brand">
                        <img src="/assets/images/logo.png" width="80.382px" height="70px" alt="Logo" />
                    </div>

                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="pages">
                        <Nav className="mr-auto">
                            <NavLink to={"/"} className="nav-link" activeClassName="active" onClick={handleLinkClick}>Inicio</NavLink>
                            <NavLink to={"/projects"} className="nav-link" activeClassName="active" onClick={handleLinkClick}>Proyectos</NavLink>
                            <NavLink to={"/experience"} className="nav-link" activeClassName="active" onClick={handleLinkClick}>Experiencia</NavLink>
                            <NavLink to={"/formation"} className="nav-link" activeClassName="active" onClick={handleLinkClick}>Estudios</NavLink>
                            <NavLink to={"/about"} className="nav-link" activeClassName="active" onClick={handleLinkClick}>Sobre mi</NavLink>
                        </Nav>
                    </div>
                    <div className="options">
                        <div className="navbar-social">
                            <a href="https://github.com/nachosanson6" target="_blank" rel="noopener noreferrer">
                                <FaGithub />

                            </a>
                            <a href="https://www.linkedin.com/in/ignacio-sanson/" target="_blank" rel="noopener noreferrer">
                                <CiLinkedin className="logo" />
                            </a>
                        </div>
                        <div className="navbar-language">
                            {/* <button onClick={toggleLanguage}>
                            <img src={language === 'english' ? spanish : english} alt="Language" />
                            Aquí necesitas manejar la lógica para cambiar de idioma
                        </button> */}
                        </div>
                        <div className="navbar-contact">
                            <a onClick={openModal}>
                                <button>Contact</button>
                            </a>
                        </div>
                    </div>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" gb="light" className="custom-toggler" />
            </div>
            <ContactModal open={open} setOpen={setOpen} />
        </Navbar>
    );
};

export default Navigation;
