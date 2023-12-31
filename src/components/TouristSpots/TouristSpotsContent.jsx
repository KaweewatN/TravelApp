import React from "react"
import "./TouristSpotsContent.css"
import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa"


export default function RestaurantContent(props) {

    const starCount = props.star;
    const id = props.id

    return (
            <Link to= {`/TouristSpots/${id}`} className="content-link">
                <div className="tourist-content-container">
                    <img src={props.image_url} alt="tourist-spots" className="tourist-content-picture"/>
                    <div className="provinceAndStar">
                        <p className="content-location">{props.province}</p>
                        <p className="content-location content-star">{Array(starCount).fill(<FaStar/>)}</p>
                    </div>
                    <h3 className="content-title">{props.name}</h3>
                </div>
            </Link>
    )
}