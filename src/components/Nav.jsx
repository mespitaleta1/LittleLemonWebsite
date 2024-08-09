import logo from "../assets/logo.png";

const Nav = () => {
    return (
        <div className="Nav">
            <a href="/">
                <img src={logo} alt="Little Lemon Logo" style={{width: 148, height:40, borderRadius: 5, marginTop: 5}}/>
            </a>
            <nav>
                <ul className="navbar">
                    <li className="navbarItem"><a href="/home">Home</a></li>
                    <li className="navbarItem"><a href="/about">About</a></li>
                    <li className="navbarItem"><a href="/blog">Menu</a></li>
                    <li className="navbarItem"><a href="/blog">Reservations</a></li>
                    <li className="navbarItem"><a href="/blog">Order Online</a></li>
                    <li className="navbarItem"><a href="/blog">Login</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;

/*
import Logo from "./Logo";
<img href="" alt="Little Lemon Logo"/>
<div className="Logo" style={{width: 148, height:40, backgroundColor: "lightgray", borderRadius: 5}}></div>
*/