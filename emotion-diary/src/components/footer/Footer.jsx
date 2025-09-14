import {Copyright} from "../icons/index.js";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <Copyright className={"size-48"}/>
                <div className="title">Emotion diary</div>
            </div>
            <ul className="contact">
                <li>ed@gmail.com</li>
                <li>10-1234-5678</li>
            </ul>
        </div>
    );
}

export default Footer;