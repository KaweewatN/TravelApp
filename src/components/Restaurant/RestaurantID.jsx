import React from "react"
import {useParams} from "react-router-dom"
import "./RestaurantID.css"
import {FaArrowLeft} from "react-icons/fa"
import {FaList} from "react-icons/fa"
import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa"
import RestaurantData from "./RestaurantData"
import RestaurantDataContent from "./RestaurantContent";

export default function RestaurantID() {

    const params = useParams()

    return (
            <div>
                <img src='https://api.tourismthailand.org/upload/live/business_content_thumbnail/14626/P08013776.jpeg' alt="tourist-spots" className="tourist-spots-content"/>
                
                <div className="content-top-button">
                    <Link to= {`/Restaurant`}>
                        <button type="button" className="content-button "id="tourist-spots-back-button">
                            <p><FaArrowLeft/></p>
                        </button>
                    </Link>

                    <button type="button" className="content-button" id="tourist-spots-save-button" >
                        <p><FaList/></p>
                    </button>
                </div>

                <div className="top-title">
                    <p className="content-location content-star">{Array(5).fill(<FaStar/>)} </p>
                    <span>(5/5 ratings )</span>
                </div>

                
                <h2 className="content-title"> CHIO KEE Since 1942 (เจี่ยวกี่ อาหารเช้า) </h2>
                <p className="content-province"> Si Sa Ket </p>
            
                <div className="map-reponsive">
                    <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.7292577784056!2d104.32485107517195!3d15.118243164193737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116e2d98512e7d5%3A0xe2353b52e702a07!2z4Lij4LmJ4Liy4LiZ4LmA4LiI4Li14Lii4Lin4LiB4Li14LmIIOC4reC4suC4q-C4suC4o-C5gOC4iuC5ieC4sg!5e0!3m2!1sth!2sth!4v1688221612660!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <h2 className="content-description-title"> Highlights </h2>
                <p className="content-description"> Come here for a drink after a long walk around Wat Maha Phuttharam. The high ratings of this restaurant would be impossible without the pleasant staff. Nice service is something that guests note in their comments. The quiet atmosphere will be really just what you need after a long working day. 4.3 is what CHIO KEE Since 1942 received from the Google rating system.</p>
        </div>
    )
}