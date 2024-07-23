import Logo from "./Logo";

const Nav = () => {
    return (
        <>
        <img href={Logo} alt="Little Lemon Logo"/>
        <nav>
            <ul>
                <li><a href="/home">Homepage</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
        </>
    )
};

export default Nav;