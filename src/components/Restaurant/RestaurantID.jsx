import React from "react"
import {useParams} from "react-router-dom"
import "./RestaurantID.css"
import {TiArrowBack} from "react-icons/ti";
import {FaList} from "react-icons/fa"
import {FaStar} from "react-icons/fa"
import { Link } from "react-router-dom";

export default function RestaurantID() {

    const params = useParams()

    return (
        
        <div>
            {params.id === "1" && 
                <div>
                    <img src='https://api.tourismthailand.org/upload/live/business_content_thumbnail/14626/P08013776.jpeg' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/Restaurant`}>
                            <button type="button" className="content-button "id="tourist-spots-back-button">
                                <p><TiArrowBack/></p>
                            </button>
                        </Link>
            
                        <button type="button" className="content-button" id="tourist-spots-save-button" >
                            <p><FaList/></p>
                        </button>
                    </div>
            
                    <div className="top-title">
                        <p className="content-location content-star">{Array(5).fill(<FaStar/>)} </p>
                        <span>( 5/5 ratings )</span>
                    </div>
            
                            
                    <h2 className="content-title" id="large-content-title">CHIO KEE Since 1942 (เจี่ยวกี่ อาหารเช้า) </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.7292577784056!2d104.32485107517195!3d15.118243164193737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116e2d98512e7d5%3A0xe2353b52e702a07!2z4Lij4LmJ4Liy4LiZ4LmA4LiI4Li14Lii4Lin4LiB4Li14LmIIOC4reC4suC4q-C4suC4o-C5gOC4iuC5ieC4sg!5e0!3m2!1sth!2sth!4v1688221612660!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> Come here for a drink after a long walk around Wat Maha Phuttharam. The high ratings of this restaurant would be impossible without the pleasant staff. Nice service is something that guests note in their comments. The quiet atmosphere will be really just what you need after a long working day. 4.3 is what CHIO KEE Since 1942 received from the Google rating system. </p>
                </div>
            }

            

            {params.id === "2" && 
                <div>
                    <img src='https://thethaiger.com/wp-content/uploads/2021/10/Moo-kata-grill-.jpeg' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/Restaurant`}>
                            <button type="button" className="content-button "id="tourist-spots-back-button">
                                <p><TiArrowBack/></p>
                            </button>
                        </Link>
            
                        <button type="button" className="content-button" id="tourist-spots-save-button" >
                            <p><FaList/></p>
                        </button>
                    </div>
            
                    <div className="top-title">
                        <p className="content-location content-star">{Array(4).fill(<FaStar/>)} </p>
                        <span>( 4/5 ratings )</span>
                    </div>
            
                            
                    <h2 className="content-title"> O Moo Kata </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.776795792762!2d104.32658267517196!3d15.11562546425996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116e2d927105ddf%3A0xa431c158e9090e03!2z4Lij4LmJ4Liy4LiZ4LmC4Lit4Lir4Lih4Li54LiB4Lij4Liw4LiX4Liw!5e0!3m2!1sth!2sth!4v1688221636389!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> mu kratha, mookata is a combination of a BBQ grill and hot pot and is a great meal for sharing with friends. We’ve found 8 of the best restaurants in Bangkok that serve cheap and good food for when you get mookata cravings. </p>
                </div>
            }

            {params.id === "3" && 
                <div>
                    <img src='https://img.wongnai.com/p/1920x0/2020/05/17/663e7b5438874cd0b07bab5a49de6465.jpg' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/Restaurant`}>
                            <button type="button" className="content-button "id="tourist-spots-back-button">
                                <p><TiArrowBack/></p>
                            </button>
                        </Link>
            
                        <button type="button" className="content-button" id="tourist-spots-save-button" >
                            <p><FaList/></p>
                        </button>
                    </div>
            
                    <div className="top-title">
                        <p className="content-location content-star">{Array(3).fill(<FaStar/>)} </p>
                        <span>( 3/5 ratings )</span>
                    </div>
            
                            
                    <h2 className="content-title"> Si Keaw Restaurant </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.1101862670284!2d104.33962178048051!3d15.097254727229625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116e31060fd8765%3A0x679176096228096!2z4Lia4LmJ4Liy4LiZ4Lib4LmJ4Liy4LmA4LiC4Li14Lii4LinICjguKrguLXguYDguILguLXguKLguKcp!5e0!3m2!1sth!2sth!4v1688222783561!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> Thai cuisine can be tasted here. If you want to experience cool service, you should visit this restaurant. As people see it, the atmosphere is enjoyable here. Google gives it 4.4 so you can select Si Keaw Restaurant to spend a good time here.</p>
                </div>
            }

            {params.id === "4" && 
                <div>
                    <img src='https://i.ytimg.com/vi/sN1LOQ0zCyw/maxresdefault.jpg' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/Restaurant`}>
                            <button type="button" className="content-button "id="tourist-spots-back-button">
                                <p><TiArrowBack/></p>
                            </button>
                        </Link>
            
                        <button type="button" className="content-button" id="tourist-spots-save-button" >
                            <p><FaList/></p>
                        </button>
                    </div>
            
                    <div className="top-title">
                        <p className="content-location content-star">{Array(4).fill(<FaStar/>)} </p>
                        <span>(5/5 ratings )</span>
                    </div>
            
                            
                    <h2 className="content-title"> Tumkratoei Sisaket </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.685967711502!2d104.30599427517195!3d15.120626564133453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116e38af79d946d%3A0x65aaf5c8e4f061de!2z4LiV4Liz4LiB4Lij4Liw4LmA4LiX4LiiIOC4qOC4o-C4teC4quC4sOC5gOC4geC4qQ!5e0!3m2!1sth!2sth!4v1688222834926!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> The well-trained staff reflects the style and character of this restaurant. Nice service is something that visitors highlight in their reviews. Google gives it 4.2 so you can choose Tumkratoei Sisaket to have a good time here.</p>
                </div>
            }
            
            
        </div>
    )
}