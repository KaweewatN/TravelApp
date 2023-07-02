import React from "react"
import "./Accomodation.css"
import {FaSearch} from "react-icons/fa"
import {TiArrowBack} from "react-icons/ti";
import { Link } from "react-router-dom";
import AccomodationData from "./AccomodationData"
import AccomodationContent from "./AccomodationContent";


export default function Accomodation() {

    const cards = AccomodationData.map(item => {
        return (
            <AccomodationContent {...item}/>
        )
    })

	return (
		<div>	
			<form className="search-summit">

				<Link to= '/' className="back-button-link">
					<button className="search-back-button">
						<p> <TiArrowBack></TiArrowBack> </p>
					</button>
				</Link>

				<label>
					<input type="text" name="Search" 
					className="search-input" 
					placeholder="Search you interest"/>
				</label>

				<button type="submit" className="search-button" > 
					<p><FaSearch/></p>
				</button>

			</form>

            {cards}

			<div className="blank-container"></div>

        </div>
	);
}