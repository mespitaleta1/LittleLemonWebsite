import headerBanner from "../assets/restauranfood.jpg";

const Header = () => {
    return (
        <div className="headerSection" style={{backgroundColor: "#495E57", display: "flex", justifyContent: "center", padding: "30px 0px"}}>
            <div className="headerContent" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", flexBasis: "30%", marginLeft: 140}}>
                <div>
                    <h1 style={{margin: 0, color:"#F4CE14", fontFamily: "markazi",fontSize: 40, letterSpacing: 2}}>Little Lemon</h1>
                    <h2 style={{margin: 0, textAlign: "left", color: "#fff"}}>Chicago</h2>
                </div>
                <p style={{ textAlign: "left", color: "#fff", lineHeight: 1.5, width: "56%"}}>
                    We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.
                </p>
                <button style={{
                    width: 200,
                    height: 44,
                    borderRadius: 15,
                    backgroundColor: "#F4CE14",
                    border: "transparent",
                    fontSize: 16,
                    fontWeight: "bold",
                    cursor: "pointer"
                    }}>
                        Reserve a Table
                    </button>
            </div>
            <div className="headerImage" style={{height:200, width: 200, borderRadius: 10, flexBasis: "30%", position: "relative"}}>
                <img src={headerBanner} alt="main dish" style={{objectFit:"cover",  borderRadius: 10, width: 340, height: 340, position: "absolute", right: 160}}/>
            </div>
        </div>
    )
};

export default Header;