import deliveryIcon from "../assets/deliveryIcon.png";

const Card = ({image, dishTitle, price, description})=> {
    return (
        <div className="Card1" style={{backgroundColor:"#edefee", borderRadius: 10, marginLeft: 10, width:264, height: "auto"}}>
                    <img style={{width:"100%", height: 185,objectFit: "cover", borderTopRightRadius: 10, borderTopLeftRadius:10}} src={image} alt="Greek Salad dish reference"/>

                    <div className="dishContainer" style={{padding: "5px 20px 10px"}}>
                        <div className="title" style={{display: "flex", alignItems: "baseline", justifyContent:"space-between"}}>
                            <h4>{dishTitle}</h4>
                            <p style={{color: "#EE9972", fontWeight: "bold"}}>{price}</p>
                        </div>
                        <div className="dishDescription" style={{textAlign: "left", color:"#495E57"}}>
                            <p>{description}</p>
                            <div style={{display: "flex", alignItems: "center", marginTop: 60}}>
                                <p style={{fontWeight:"bold", color: "#000", marginRight: 10}}>
                                    <a href="#" style={{ textDecoration: "none", color: "#000", cursor: "pointer"}}>Order a delivery</a>
                                </p>
                                <img style={{width: 20, height: 20}} src={deliveryIcon} alt="delivery icon"/>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Card;