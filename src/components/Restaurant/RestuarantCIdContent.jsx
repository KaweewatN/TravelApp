import React from "react"
import "./RestaurantContent.css"
import RestaurantData from "./RestaurantData"
import RestaurantID from "./RestaurantID";

export default function PreRestaurant () {
    
    const cards = RestaurantData.map(item => {
        return (
            <RestaurantID {...item}/>
        )
    })

    return (
        <div>
            {cards}
        </div>
    )
}