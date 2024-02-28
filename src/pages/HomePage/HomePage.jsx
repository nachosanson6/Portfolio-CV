import "./HomePage.css"

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="presentation">
                <h1>Hola, soy Nacho</h1>
                <h2>Desarrollador web Full-Stack y DevOps</h2>
                {/* Botón para dispositivos de escritorio y tablet */}
                <button className="desktop-tablet-button mt-3">Download CV</button>
            </div>
            <img src="/assets/images/Profile_Photo.png" alt="" />
            {/* Botón para dispositivos móviles */}
            <button className="mobile-button mt-3">Download CV</button>
        </div>
    )
}

export default HomePage