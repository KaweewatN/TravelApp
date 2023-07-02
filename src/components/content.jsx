import React from "react"
import "./content.css"
import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa"


export default function Content(props) {

    const starCount = props.star;
    const {id, name, image, province, star} = props

    return (
        <Link to= {`/TouristSpots/${id}`} className="content-link">
            <div className="content-container">
                <img src={props.image} alt="tourist-spots" className="content-picture"/>
                <div className="provinceAndStar">
                    <p className="content-location">{props.province}</p>
                    <p className="content-location content-star">{Array(starCount).fill(<FaStar/>)}</p>
                </div>
                <h3 className="content-title">{props.name}</h3>
		    </div>
        </Link>

    )
}