import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <div style={{width: "55%", height: 200, display: "flex", margin: "0 auto", alignItems: "baseline", justifyContent:"space-around"}}>
        <div style={{width: 200}}>
            <a href="/">
                <img src={logo} alt="Little Lemon Logo" style={{width: 148, height:40, borderRadius: 5, marginTop: 5, marginRight: 50}}/>
            </a>
            <p style={{textAlign: "justify"}} >We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</p>
        </div>
        <div>
            <h4>Important Links</h4>
            <ul className="footerNav">
                    <li className="footerNavItem"><a href="/home">Home</a></li>
                    <li className="footerNavItem"><a href="/about">About</a></li>
                    <li className="footerNavItem"><a href="/blog">Menu</a></li>
                    <li className="footerNavItem"><a href="/blog">Reservations</a></li>
                    <li className="footerNavItem"><a href="/blog">Order Online</a></li>
                    <li className="footerNavItem"><a href="/blog">Login</a></li>
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
                    <li className="socialLink"><a href="/home">Facebook</a></li>
                    <li className="socialLink"><a href="/about">Instagram</a></li>
                    <li className="socialLink"><a href="/blog">Twitter</a></li>
            </ul>
        </div>
        </div>
    )
};

export default Footer;