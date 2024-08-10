import Card from "./Card";
import { weekSpecialMenu } from "../data/menu";

const Main = () => {
    return (
        <div className="specialsMenu" style={{margin: "150px"}}>
            <div className="menuSection" style={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 auto", width: "60%",}}>
                <h1 style={{textAlign:"left", fontFamily: "markazi",fontSize: 50, letterSpacing: 1}}>This week special!</h1>
                <button style={{width: 200, height: 60, borderRadius: 15, backgroundColor: "#F4CE14", border: "transparent", fontSize: 16, fontWeight: "bold", cursor: "pointer"}}>
                    Online Menu
                </button>
            </div>

            {/*Card Section */}
            <div style={{marginTop: 35}}>
            <div className="cards" style={{display:"flex", alignItems: "center", margin: "0 auto", width: "65%", justifyContent: "space-evenly"}}>
                {weekSpecialMenu.map(dishItem =><Card key={dishItem.id} image={dishItem.image} dishTitle={dishItem.title} price={dishItem.price} description={dishItem.description} />)}
            </div>
        </div>
    </div>
    )
};

export default Main;