import { useState } from "react";
import {Link} from "react-router-dom";
import headerBanner from "../assets/restauranfood.jpg";
import BookingForm from "./BookingForm";

const Header = () => {
 const [openBooking, setOpenBooking] = useState(false);
    return (
        <>
        <div className="headerSection" style={{backgroundColor: "#495E57", display: "flex", justifyContent: "center", padding: "30px 0px"}}>
            <div className="headerContent" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", flexBasis: "30%", marginLeft: 140}}>
                <div>
                    <h1 style={{margin: 0, color:"#F4CE14", fontFamily: "markazi",fontSize: 40, letterSpacing: 2}}>Little Lemon</h1>
                    <h2 style={{margin: 0, textAlign: "left", color: "#fff"}}>Chicago</h2>
                </div>
                <p style={{ textAlign: "left", color: "#fff", lineHeight: 1.5, width: "56%"}}>
                    We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.
                </p>
                <Link to={!openBooking ? "" : "/booking" } onClick={()=> setOpenBooking(!openBooking)}>
                    <button  aria-lable="On Clik" style={{ width: 200, height: 44,borderRadius: 15,backgroundColor: "#F4CE14",border: "transparent",fontSize: 16, fontWeight: "bold", cursor: "pointer"}}> Reserve a Table </button>
                </Link>
            </div>
            <div className="headerImage" style={{height:200, width: 200, borderRadius: 10, flexBasis: "30%", position: "relative"}}>
                <img src={headerBanner} alt="main dish" style={{objectFit:"cover",  borderRadius: 10, width: 340, height: 340, position: "absolute", right: 160}}/>
            </div>
        </div>
        {!openBooking && (<div style={{marginTop: 150}}>{<BookingForm/>}</div>)}
        </>
    )
};

export default Header;