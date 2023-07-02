import React from "react"
import "./Activity.css"
import {FaSearch} from "react-icons/fa"
import {TiArrowBack} from "react-icons/ti";
import { Link } from "react-router-dom";
import ActivityData from "./ActivityData"
import ActivityContent from "./ActivityContent";


export default function Activity() {

    const cards = ActivityData.map(item => {
        return (
            <ActivityContent {...item}/>
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