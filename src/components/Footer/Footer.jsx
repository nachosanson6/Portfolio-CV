import "./Footer.css"
import envelope from "/assets/images/envelope-alt.svg"
import phone from "/assets/images/phone.svg"
import logo from "/assets/images/logo.png"

const Footer = () => {
    return (
        <footer>
            <div className="footerComponent">
                <div className="information">
                    <div className="info-item logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="info-item">
                        <img src={phone} alt="Phone" />
                        <p className="contact-info">675239429</p>
                    </div>
                    <div className="info-item envelope">
                        <img src={envelope} alt="Envelope" />
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