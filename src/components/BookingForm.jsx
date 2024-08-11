import { useState } from "react";
import { availableTimes, occasions } from "../constants/constants";

const BookingForm = ()=> {
    const [inputValues, setInputValues] = useState({
        date: "",
        time: "16:00",
        guests: 1,
        occasions: "Birthday",
    });
    const [closeBooking, setCloseBooking] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Your booking has been confirmed:
        ${inputValues.date}, ${inputValues.time},for ${inputValues.guests} guests`);
        setCloseBooking(!closeBooking);
        setInputValues({
            date: "",
            time: "16:00",
            guests: 1,
            occasions: "Birthday",
        });
    };

    return (
        <>
        {!closeBooking && (
        <div style={{width: "50%", border: "1px solid gray", borderRadius: 15, backgroundColor: "#495f5830", margin: "0 auto", padding: "50px"}}>
            <h2 style={{textAlign: "left", marginBottom: 50}}>Ready to reservate</h2>
            <form onSubmit={handleSubmit} action="./action_index.js" style={{display: "grid", maxWidth: 400, gap: 20}}>
              <div style={{display: "flex"}}>
                <label htmlFor="res-date" style={{marginRight: 10}}>Choose date</label>
                <input type="date" id="res-date" required value={inputValues.date} onChange={(e)=> setInputValues({...inputValues, date: e.target.value})}/>
             </div>
             <div style={{display: "flex"}}>
                <label htmlFor="res-time" style={{marginRight: 10}}>Choose time</label>
                <select id="res-time" required value={inputValues.time} onChange={(e)=> setInputValues({...inputValues, time: e.target.value})}>
                    {availableTimes.map(time => { return (<option key={time}>{time}</option>)})}
                </select>
             </div>
             <div style={{display: "flex"}}>
                <label htmlFor="guests" style={{marginRight: 10}}>Number of guests</label>
                <input type="number" required value={inputValues.guests} onChange={(e)=> setInputValues({...inputValues, guests: e.target.value})} placeholder="1" min="1" max="10" id="guests"/>
             </div>
             <div style={{display: "flex"}}>
                <label htmlFor="occasion" style={{marginRight: 10}}>Occasion</label>
                <select id="occasion" value={inputValues.occasions} onChange={(e)=> setInputValues({...inputValues, occasions: e.target.value})}>
                    {occasions.map(occasion => { return (<option key={occasion}>{occasion}</option>)})}
                </select>
             </div>
             <input
            type="submit"
            value="Make Your reservation"
            style={{
                width: 200,
                height: 44,
                borderRadius: 10,
                backgroundColor: "#495E57",
                border: "transparent",
                fontSize: 16,
                fontWeight: "bold",
                cursor: "pointer",
                color: "#fff",
                marginTop: 50
            }}/>
           </form>
        </div>
        )}
    </>
    );
};

export default BookingForm;