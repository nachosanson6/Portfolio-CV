import "./Footer.css"

const Footer = () => {

    return (
        <footer>
            <div className="footerComponent">
                <div className="information">
                    <div className="info-item logo">
                        <img src={"/assets/images/logo.png"} alt="Logo" />
                    </div>

                    <div className="info-item envelope">
                        <img className="envelope" src={"/assets/images/envelope-alt.svg"} alt="Envelope" />
                        <p className="contact-info">nachosanson6@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="rights">
                <p>© 2024 Erretres. All Rights Reserved</p>
                <p> Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
            </div>
        </footer>
    )
}

export default Footer