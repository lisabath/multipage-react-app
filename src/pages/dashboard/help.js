import { Outlet } from "react-router-dom";

function Help(){
    return (
        <div className="Help">
            <h1>Help</h1>
            <p>
            Please refer to FAQ for answers to the the most 
            commonly asked questions. If you cannot find your questions there, 
            please email or ring us,via our details on the contact page. Please note 
            during our peak times of 12pm-2pm and 7pm to 9pm we may not be able to 
            answer the phone.  
            </p>
            <Outlet/>
        </div>
    );
}
export default Help;