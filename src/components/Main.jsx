import deliveryIcon from "../assets/pizza.png";
import cardImg1 from "../assets/greekSalad.jpg"
import cardImg3 from "../assets/lemonDessert.jpg"

const Main = () => {
    return (
        <div style={{margin: "150px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 auto", width: "60%",}}>
                <h1 style={{textAlign:"left"}}>This week special!</h1>
                <button style={{width: 200, height: 60, borderRadius: 15, backgroundColor: "#F4CE14", border: "transparent", fontSize: 16, fontWeight: "bold", cursor: "pointer"}}>
                    Online Menu
                </button>
            </div>

            {/*Card Section */}
            <div style={{marginTop: 35}}>
            <div className="Cards" style={{display:"flex", alignItems: "center", margin: "0 auto", width: "65%", justifyContent: "space-evenly"}}>
                <div className="Card1" style={{backgroundColor:"#edefee", borderRadius: 10, marginLeft: 10, width:264, height: "auto"}}>
                    <img style={{width:"100%", height: 185,objectFit: "cover", borderTopRightRadius: 10, borderTopLeftRadius:10}} src={cardImg1} alt="Greek Salad dish reference"/>

                    <div className="dishContainer" style={{padding: "5px 20px 10px"}}>
                        <div className="title" style={{display: "flex", alignItems: "baseline", justifyContent:"space-between"}}>
                            <h4>Greed Salad</h4>
                            <p style={{color: "#EE9972", fontWeight: "bold"}}>$12.99</p>
                        </div>
                        <div className="dishDescription" style={{textAlign: "left", color:"#495E57"}}>
                            <p>The famous greek salad of crispy lettuce, peppers,
                            olives,and our Chicago style feta cheese, garnished with crunchy
                            garlic and rosemary croutons.
                            </p>
                            <div style={{display: "flex", alignItems: "center", marginTop: 60}}>
                                <p style={{fontWeight:"bold", color: "#000", marginRight: 10}}>Order a delivery</p>
                                <img style={{width: 20, height: 20}} src={deliveryIcon} alt="delivery icon"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Card2" style={{backgroundColor:"#edefee", borderRadius: 10, marginLeft: 10, width:264, height: "auto"}}>
                    <img style={{width:"100%", height: 200,objectFit: "cover", borderTopRightRadius: 10, borderTopLeftRadius:10}} src="https://images.unsplash.com/photo-1667473775795-41f69ae72c44?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Brushetta dish reference"/>

                    <div className="dishContainer" style={{padding: "5px 20px 10px"}}>
                        <div className="title" style={{display: "flex", alignItems: "baseline", justifyContent:"space-between"}}>
                            <h4>Brushetta</h4>
                            <p style={{color: "#EE9972", fontWeight: "bold"}}>$5.99</p>
                        </div>
                        <div className="dishDescription" style={{textAlign: "left", color:"#495E57"}}>
                            <p>
                            Our brushetta is made from grilled bread that has been smeared with garlic 
                            and seasoned with salt and olive oil.
                            </p>
                            <div style={{display: "flex", alignItems: "center", marginTop: 60}}>
                                <p style={{fontWeight:"bold", color: "#000", marginRight: 10}}>Order a delivery</p>
                                <img style={{width: 20, height: 20}} src={deliveryIcon} alt="delivery icon"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Card3" style={{backgroundColor:"#edefee", borderRadius: 10, marginLeft: 10, width:264, height: "auto"}}>
                    <img style={{width:"100%", height: 200,objectFit: "cover", borderTopRightRadius: 10, borderTopLeftRadius:10}} src={cardImg3} alt="lemon dessert dish reference"/>

                    <div className="dishContainer" style={{padding: "5px 20px 10px"}}>
                        <div className="title" style={{display: "flex", alignItems: "baseline", justifyContent:"space-between"}}>
                            <h4>Lemon Dessert</h4>
                            <p style={{color: "#EE9972", fontWeight: "bold"}}>$5.00</p>
                        </div>
                        <div className="dishDescription" style={{textAlign: "left", color:"#495E57"}}>
                            <p>
                            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                            <div style={{display: "flex", alignItems: "center", marginTop: 60}}>
                                <p style={{fontWeight:"bold", color: "#000", marginRight: 10}}>Order a delivery</p>
                                <img style={{width: 20, height: 20}} src={deliveryIcon} alt="delivery icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            </div>
           
        </div>
    )
};

export default Main;