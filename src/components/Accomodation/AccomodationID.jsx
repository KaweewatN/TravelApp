import React from "react"
import {useParams} from "react-router-dom"
import "./AccomodationID.css"
import {TiArrowBack} from "react-icons/ti"
import {FaList} from "react-icons/fa"
import {FaStar} from "react-icons/fa"
import { Link } from "react-router-dom";

export default function AccomodationID() {

    const params = useParams()

    return (
        
        <div>
            {params.id === "1" && 
                <div>
                    <img src='https://www.chuwab.com/images/hotel/6/23/50923/50923_large_202208090916204.jpeg' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/Accomodation`}>
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
                        <span>(5/5 ratings )</span>
                    </div>
            
                            
                    <h2 className="content-title"> Pitifarm (Pha Mo E Dang hill ) </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.5886479125998!2d104.72681569999999!3d14.450854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311149d96e461eb1%3A0x4c46e9dd9950abd7!2z4Lib4Li04LiV4Li04Lif4Liy4Lij4LmM4Lih4Lih4Li04Lil4Li14LmIIOC4hOC4suC5gOC4n-C5iCbguYHguIHguKXguKHguJvguLTguYnguIcg4Lic4Liy4Lih4Lit4Lit4Li14LmB4LiU4LiH!5e0!3m2!1sth!2sth!4v1687937076708!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> Family-friendly camping accommodation near numerous tourist attractions in Si Sa Ket Province. Enjoy the view of the sunrise at Pha Mo E-Dang and explore various small and large waterfalls. There are also plenty of nearby reservoirs to visit.</p>
                </div>
            }

            

            {params.id === "2" && 
                <div>
                    <img src='https://www.paikanbor.com/wp-content/uploads/2022/11/205795846_133253558912200_7516913239370530853_n.jpg' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/Accomodation`}>
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
                        <span>(4/5 ratings )</span>
                    </div>
            
                            
                    <h2 className="content-title"> The yard suksamran </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.1766007216866!2d104.057788014838!3d14.41698098991951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110c5eb470758ff%3A0x365539ae1df90314!2sThe%20Yard%20-Suksamran-!5e0!3m2!1sth!2sth!4v1687940127230!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> Experience a serene and tranquil atmosphere surrounded by nature, with tent camping spots that will make you feel exhilarated by the cool breeze, an ideal place to try out. Sook Sanuk Beach is another perfect location for camping. Here, you will find electricity, bathrooms, and various activities such as kayaking and canoeing, as well as restaurants and cafes, all in one place.</p>
                </div>
            }

            {params.id === "3" && 
                <div>
                    <img src='https://lh3.googleusercontent.com/p/AF1QipNsBsMh1_5xeOcd_lSvLzVlE4RB_HKnNwbj701r=w768-h768-n-o-v1' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/Accomodation`}>
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
                        <span>(4/5 ratings )</span>
                    </div>
            
                            
                    <h2 className="content-title"> Huaysatung Farmstay Sisaket </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.968803750969!2d104.35648071484566!3d15.04984168951762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116e3eab3e74359%3A0xe548dba9daf440a1!2z4Lir4LmJ4Lin4Lii4Liq4Liw4LiX4Li44LiH4Lif4Liy4Lij4LmM4Lih4Liq4LmA4LiV4Lii4LmM!5e0!3m2!1sth!2sth!4v1687938310557!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> Quiet, peaceful, and simple, located near home. Accommodation for dining, swimming, and spending quality time with the family.</p>
                </div>
            }

            {params.id === "4" && 
                <div>
                    <img src='https://pix10.agoda.net/hotelImages/1506769/-1/0e0efd36131d38c5c7e7a62012afb62f.jpg?ca=7&ce=1&s=768x1024' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/Accomodation`}>
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
            
                            
                    <h2 className="content-title"> Pongsin Resort and Restaurant </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21841.038797205045!2d104.50745364664964!3d14.599835738406828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116cd1b7c6578c5%3A0xa8c9bbe9a030a66!2sPongsin%20Resort%20%26%20Restaurant!5e0!3m2!1sth!2sth!4v1687940804749!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> Pongsin Resort and Restaurant provide airport shuttle service upon request, with a service fee of 2,400.00 THB per round trip. Guests can also enjoy spa services and find something to eat at the restaurant. Additional highlights include an outdoor swimming pool, a bar/lounge, and a children's swimming pool. Other travelers have been particularly impressed by the exceptional staff.</p>
                </div>
            }
            
            
        </div>
    )
}