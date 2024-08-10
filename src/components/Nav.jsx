import logo from "../assets/logo.png";
import { navigationTabs } from "../constants/constants";

const Nav = () => {
    return (
        <div className="Nav">
            <div className="mobileNav">
            <a href="/">
                <img className="navLogo" src={logo} alt="Little Lemon Logo"/>
            </a>
            </div>
            <nav>
                <ul className="navbar">
                    {navigationTabs.map(tab => {
                        return (
                            <li className="navbarItem" key={tab}>
                                <a href={`/${tab}`}>{tab}</a>
                            </li>)
                        })}
                </ul>
            </nav>
        </div>
    )
};

export default Nav;