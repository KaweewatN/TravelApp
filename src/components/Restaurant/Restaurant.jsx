import React from "react"
import "./Restaurant.css"
import {FaSearch} from "react-icons/fa"
import {TiArrowBack} from "react-icons/ti";
import { Link } from "react-router-dom";
import RestaurantData from "./RestaurantData"
import RestaurantContent from "./RestaurantContent";


export default function Accomodation() {

    const cards = RestaurantData.map(item => {
        return (
            <RestaurantContent {...item}/>
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

            <div className="cards-container">
				{cards}
			</div>

			<div className="blank-container"></div>

        </div>
	);
}