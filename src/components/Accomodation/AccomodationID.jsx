import React from "react"
import {useParams} from "react-router-dom"
import "./AccomodationID.css"
import {FaArrowLeft} from "react-icons/fa"
import {FaList} from "react-icons/fa"
import {FaStar} from "react-icons/fa"
import AccomodationData from "./AccomodationData"
import AccomodationContent from "./AccomodationContent";

export default function AccomodationID() {

    const params = useParams()

    const cards = <AccomodationContent {...AccomodationData[1]} />;

    return (
       
            <div>{cards}</div>
           
    )
}