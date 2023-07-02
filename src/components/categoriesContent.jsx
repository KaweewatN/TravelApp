import React from "react"

export default function Content(props) {
    return (
        <div className="content-container">
			<img src={props.image} alt="tourist-spots" className="content-picture"/>
			<p className="content-location">Bangkok</p>
			<h3 className="content-title">{props.title}</h3>
		</div>
    )
}