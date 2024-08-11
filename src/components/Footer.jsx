import { navigationTabs, socialMediaTabs, littleLemonDescription } from "../constants/constants";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <div className="Footer" style={{width: "55%", height: 200, display: "flex", margin: "0 auto", alignItems: "baseline", justifyContent:"space-around"}}>
        <div className="footerDescription" style={{width: 200}}>
            <a href="/">
                <img className="footerLogo" src={logo} alt="Little Lemon Logo" style={{width: 148, height:40, borderRadius: 5, marginTop: 5, marginRight: 50}}/>
            </a>
            <p style={{textAlign: "justify"}}>
                {littleLemonDescription}
            </p>
        </div>
        <div>
            <h4>Important Links</h4>
            <ul className="footerNav">
                    {navigationTabs.map(tab => {
                        return (
                            <li className="footerNavItem" key={tab}>
                                <a href={`/${tab}`}>{tab}</a>
                            </li>)
                        })}
                </ul>
        </div>
        <div>
            <h4 style={{textAlign: "left"}}>Contact</h4>
            <div style={{margin: "15px 0px"}}>
                <p style={{textAlign: "left", margin: 0}}>Address:</p>
                <p style={{textAlign: "left", margin: 0}}>123 Town street ,Chicago </p>
            </div>

            <div style={{margin: "15px 0px"}}>
                <p style={{textAlign: "left", margin: 0}}>Phone:</p>
                <p style={{textAlign: "left", margin: 0}}>+00 123 456 789</p>
            </div>
            <div style={{margin: "15px 0px"}}>
                <p style={{textAlign: "left", margin: 0}}>Email:</p>
                <p style={{textAlign: "left", margin: 0}}>little@lemon.com</p>
            </div>
        </div>
        <div>
            <h4>Social Media Links</h4>
            <ul className="socialMediaLinks">
                {socialMediaTabs.map(tab => {
                    return (
                        <li className="socialLink" key={tab}>
                            <a href={`/${tab}`}>{tab}</a>
                        </li>)
                })}
            </ul>
        </div>
        </div>
    )
};

export default Footer;