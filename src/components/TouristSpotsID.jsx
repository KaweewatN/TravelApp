import React from "react"
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import { useState , useEffect } from "react"
import "./TouristSpotsID.css"
import {FaArrowLeft} from "react-icons/fa"
import {FaList} from "react-icons/fa"
import {FaStar} from "react-icons/fa"



export default function TouristSpotsID() {

    const params = useParams() 
    const [useData, storeData] = React.useState([])

    React.useEffect(() => {
        fetch(`http://192.168.0.103:5000/api/attractions?page=${params.id}&per_page=1`)
            .then(res => res.json())
            .then(data => storeData(data.data[0]))
    }, [params.id])

    return (
       <div>
            <img src={useData.imageURL} alt="tourist-spots" className="tourist-spots-content"/>
            
            <div className="content-top-button">
                <Link to= {`/TouristSpots`}>
                    <button type="button" className="content-button "id="tourist-spots-back-button">
                        <p><FaArrowLeft/></p>
                    </button>
                </Link>

                <button type="button" className="content-button" id="tourist-spots-save-button" >
                    <p><FaList/></p>
                </button>
            </div>

            <div className="top-title">
                <p className="content-location content-star">{Array(useData.star).fill(<FaStar/>)} </p>
                <span>( {useData.star}/5 ratings )</span>
            </div>

            
            <h2 className="content-title">{useData.name}</h2>
            <p className="content-province">{useData.province}</p>
        
            <div className="map-reponsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.868931700455!2d100.50453969678956!3d13.726384099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299cd81f01815%3A0x1660bd86761a92f4!2z4LmE4Lit4LiE4Lit4LiZ4Liq4Lii4Liy4Lih!5e0!3m2!1sth!2sth!4v1687735373826!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <h2 className="content-description-title"> Highlights </h2>
            <p className="content-description">{useData.description}</p>
       </div>
    )
}