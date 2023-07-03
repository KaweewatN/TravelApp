import "./home.css"
import { Link } from "react-router-dom";
import NewMenu from "./NewMenu"
import {FaSearch} from "react-icons/fa" 
import {MdOutlineRecommend} from "react-icons/md" 
import {MdHotel} from "react-icons/md"
import {BiRestaurant} from "react-icons/bi"
import {MdEmojiTransportation} from "react-icons/md"
import {MdSportsMartialArts} from "react-icons/md"
import UpComingFestival from "./UpComingFestival";
import HotDeal from "./HotDeal";

export default function() {

    return (
        <div>
            <div className="top-container">
                <NewMenu></NewMenu>
                <p className="ai-planner-text">Hello, midnight eiei</p>
                <h2 className="ai-planner-title">Wanna plan your next trip?</h2>
                <Link to= '/AiPlanner/1'>
                    <button className="ai-planner-button"> Plan with AI</button>
                </Link>
            </div>

            <div className="catagories-container">
                <div className="categories-button-div">
                    <Link to="/TouristSpots">
                        <button className="categories-button">
                            <p><MdOutlineRecommend></MdOutlineRecommend></p>
                        </button>
                    </Link>
                    <label> Tourist Spots </label>
                </div>     

                <div className="categories-button-div">
                    <Link to= '/Accomodation'>
                        <button className="categories-button">
                            <p><MdHotel></MdHotel></p>
                        </button>
                    </Link>
                        <label> Accommodation </label>
                </div>  

                <div className="categories-button-div">
                    <Link to="/Restaurant">
                        <button className="categories-button">
                            <p><BiRestaurant></BiRestaurant></p>
                        </button>
                    </Link>
                    <label> Restaurant </label>
                </div>      

                <div className="categories-button-div">
                    <button className="categories-button">
                        <p><MdEmojiTransportation></MdEmojiTransportation></p> 
                    </button>
                    <label> Tour & Transport </label>
                </div>    

                <div className="categories-button-div">
                    <Link to="/Activity">
                        <button className="categories-button">
                            <p><MdSportsMartialArts></MdSportsMartialArts></p>
                        </button>
                    </Link>
                    <label> Activity </label>
                </div>  

            </div>

            <div className="festival-container">
                <h3 className="upcoming-festival-title"> Upcoming Festival </h3>
                <UpComingFestival></UpComingFestival>
            </div> 

            <div className="festival-container">
                <h3 className="upcoming-festival-title"> Exclusive Deal </h3>
                <HotDeal></HotDeal>
            </div> 

            <div className="empty-div"></div>
        </div>
    )
}


          