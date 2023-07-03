import { Link } from "react-router-dom";
import "./AIplanner3.css"; 
import {TiArrowBack} from "react-icons/ti";
import {FaStar} from "react-icons/fa"

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

            <div className="ai-planner-container-2">
                <h3> Your plan </h3>

                <div className="ai-content-container-3">
                    <img src= 'https://api.tourismthailand.org/upload/live/business_content_thumbnail/14626/P08013776.jpeg' alt="tourist-spots" className="ai-content-picture"/>
                    <div className="provinceAndStar">
                        <p className="content-location"> Si Sa Ket</p>
                        <p className="content-location content-star">{Array(5).fill(<FaStar/>)}</p>
                    </div>
                    <h3 className="content-title">CHIO KEE Since 1942 (เจี่ยวกี่ อาหารเช้า)</h3>
                    <h4 className="ai-planner-time"> 9:00 - 10:00 </h4>
                </div>

                <div className="ai-content-container-3">
                    <img src= 'https://i-san.tourismthailand.org/wp-content/uploads/2019/02/%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B8%A5%E0%B8%B3%E0%B8%94%E0%B8%A7%E0%B8%99%E0%B8%9A%E0%B8%B2%E0%B8%99-1.jpg' alt="tourist-spots" className="ai-content-picture"/>
                    <div className="provinceAndStar">
                        <p className="content-location"> Si Sa Ket </p>
                        <p className="content-location content-star">{Array(4).fill(<FaStar/>)}</p>
                    </div>
                    <h3 className="content-title"> Visit Huay Chan Waterfall </h3>
                    <h4 className="ai-planner-time"> 10:30 - 13:00 </h4>
                </div>

                <div className="ai-content-container-3">
                    <img src= 'https://thailandtourismdirectory.go.th/assets/upload/2017/11/08/20171108839f0eaa3938e92bc91e5e0d54761691163105.jpg' alt="tourist-spots" className="ai-content-picture"/>
                    <div className="provinceAndStar">
                        <p className="content-location"> Si Sa Ket </p>
                        <p className="content-location content-star">{Array(5).fill(<FaStar/>)}</p>
                    </div>
                    <h3 className="content-title"> Sisaket Aquarium </h3>
                    <h4 className="ai-planner-time"> 14:00 - 17:00 </h4>
                </div>

                <div className="empty-div"></div>

            </div>
            
        </div>
    )
}