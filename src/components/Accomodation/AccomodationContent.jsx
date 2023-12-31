import React from "react"
import "./AccomodationContent.css"
import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa"


export default function AccomodationContent(props) {

    const starCount = props.star;
    const id = props.id

    return (
            <Link to= {`/Accomodation/${id}`} className="content-link">
                <div className="accomodation-content-container">
                    <img src={props.image_url} alt="tourist-spots" className="accomodation-content-picture"/>
                    <div className="provinceAndStar">
                        <p className="content-location">{props.province}</p>
                        <p className="content-location content-star">{Array(starCount).fill(<FaStar/>)}</p>
                    </div>
                    <h3 className="content-title">{props.name}</h3>
                </div>
            </Link>
    )
}