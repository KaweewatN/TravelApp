import {TiArrowBack} from "react-icons/ti";
import { Link } from "react-router-dom";
import "./AIplanner1.css";

export default function AiPlanner_1() {
    return (
        <div>
            <div className="ai-planner-img-first">
                <Link to= '/' className="back-button-link">
                    <button className="back-button">
                        <p> <TiArrowBack></TiArrowBack> </p>
                    </button>
                </Link>
                <h2 className="title"> Your Travel Destination </h2>
                <input className="ai-planner-location" placeholder="Where you want to go"></input>
            </div>
            
        
            <Link to= '/AiPlanner/2' className="back-button-link">
                <button className="ai-planner-next"> Next </button>
            </Link>
        </div>

    )
}