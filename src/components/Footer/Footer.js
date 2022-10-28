import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import './Footer.css'


function Footer() {
    return (
    <footer className="footerContainer">
        <div className="icons" >
                <a className="icon" href="#" target="blank">
                    <AiOutlineInstagram />
                </a>
                <a className="icon" href="#" target="blank">
                    <AiOutlineWhatsApp />
                </a>
                <a className="icon" href="#">
                    <AiOutlineMail />
                </a>
        </div>
        <div>
            <p className="text">Mundo Tech</p>
            <p className="text">Copyright © 2022 - All right reserved</p>
        </div>
    </footer>
    )
}

export default Footer;