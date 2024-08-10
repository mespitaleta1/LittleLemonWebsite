import { occations } from "../constants/constants";

const BookingForm = ()=> {
    return (
    <div style={{width: "50%", border: "1px solid gray", borderRadius: 15, backgroundColor: "#495f5830", margin: "0 auto", padding: "50px"}}>
        <h2 style={{textAlign: "left", marginBottom: 50}}>Ready to reservate</h2>
        <form style={{display: "grid", maxWidth: 400, gap: 20}}>
            <div style={{display: "flex"}}>
                <label for="res-date" style={{marginRight: 10}}>Choose date</label>
                <input type="date" id="res-date"/>
            </div>
            <div style={{display: "flex"}}>
                <label for="res-time" style={{marginRight: 10}}>Choose time</label>
                <select id="res-time ">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>
            <div style={{display: "flex"}}>
                <label for="guests" style={{marginRight: 10}}>Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"/>
            </div>
            <div style={{display: "flex"}}>
                <label for="occasion" style={{marginRight: 10}}>Occasion</label>
                <select id="occasion">
                    {occations.map(occation => { return (<option key={occation}>{occation}</option>)})};
                </select>
            </div>
            <div style={{display: "flex", alignItems: "baseline", justifyContent: "space-around", margin: 0}}>
                <input onClick={()=> alert("Your booking has been confirmed!")} type="submit" value="Make Your reservation" style={{width: 200, height: 44, borderRadius: 10, backgroundColor: "#495E57", border: "transparent", fontSize: 16, fontWeight: "bold", cursor: "pointer", color: "#fff", marginTop: 50}}/>
            </div>
        </form>
    </div>
    );
};

export default BookingForm;