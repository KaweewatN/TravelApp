import { Link } from "react-router-dom";
import "./AIplanner3.css"; 
import {TiArrowBack} from "react-icons/ti";

export default function AiPlanner_3() {
    return (
        <div className="container">
            <img src="https://esan108.com/main/wp-content/uploads/2015/12/%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%A2-%E0%B8%9C%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%AD%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87.jpg" alt="srisaket-image"
                className="srisaket-img"/>

            <div className="ai-planner-link-back-div">
                <Link to= '/AiPlanner/2' className="back-button-link">
                    <button className="back-button">
                        <p> <TiArrowBack></TiArrowBack> </p>
                    </button>
                </Link>
                <h2 className="ai-planner-province">SriSaket</h2>
            </div>

            <div className="ai-planner-container">
                <h3> Your plan </h3>
            </div>
        </div>
    )
}