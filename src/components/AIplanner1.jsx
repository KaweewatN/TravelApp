import {TiArrowBack} from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState } from "react"
import FaLocationDot from "react-icons/fa"
import "./AIplanner1.css";

export default function AiPlanner_1() {

    const [province, setProvince] = useState('');

    const handleClicked = (event) => {
        setProvince(event.target.value);
    };

    return (
        <div>
            <div className="ai-planner-img-first">
                <Link to= '/' className="back-button-link">
                    <button className="back-button">
                        <p> <TiArrowBack></TiArrowBack> </p>
                    </button>
                </Link>
                <h2 className="title"> Your Travel Destination </h2>

                <div>
                    <select className="ai-planner-location" value={province} onChange={handleClicked}>
                        <option value="">&nbsp;📍Where you want to go? </option>
                        <option value="option1">&nbsp; Sri sa ket </option>
                        <option value="option2">&nbsp; Ubon Ratchathani </option>
                        <option value="option3">&nbsp; Buriram </option>
                        <option value="option3">&nbsp; Roi Et </option>
                        <option value="option3">&nbsp; Maha Sarakham </option>
                        <option value="option3">&nbsp; Amnat Charoen </option>
                        <option value="option3">&nbsp; Yasothon </option>
                    </select>
                </div>

                <h3 className="ai-planner-1-title"> Select the day(s) you go </h3>

                <div className="calendar-container">
                    <img src="https://img.freepik.com/premium-vector/august-2023-calendar-template-illustration_644416-752.jpg?w=2000"
                                className="calendar-image"></img>
                </div>

                
                <Link to= '/AiPlanner/2' className="back-button-link">
                    <button className="ai-planner-next"> Next </button>
                </Link>

            </div>
        </div>

    )
}