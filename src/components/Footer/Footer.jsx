import "./Footer.css"

const Footer = () => {

    return (
        <footer>
            <div className="footerComponent">
                <div className="information">
                    <div className="info-item logo">
                        <img src={"/src/assets/images/logo.png"} alt="Logo" />
                    </div>
                    <div className="info-item">
                        <img className="phone" src={"/src/assets/images/phone.svg"} alt="Phone" />
                        <p className="contact-info">675239429</p>
                    </div>
                    <div className="info-item envelope">
                        <img className="envelope" src={"/src/assets/images/envelope-alt.svg"} alt="Envelope" />
                        <p className="contact-info">nachosanson6@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="rights">
                <p>© 2024 Erretres. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer