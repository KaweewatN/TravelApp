import React from "react"
import {useParams} from "react-router-dom"
import "./TouristSpotsID.css"
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
                    <img src='https://thailandtourismdirectory.go.th/assets/upload/2017/11/08/20171108839f0eaa3938e92bc91e5e0d54761691163105.jpg' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/TouristSpots`}>
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
            
                            
                    <h2 className="content-title" id="large-content-title"> Sisaket Aquarium </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.2295829562568!2d104.3220560804797!3d15.090670327410772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116e27a6eaa804b%3A0x7aef00a584190bcf!2z4Lio4Li54LiZ4Lii4LmM4LmB4Liq4LiU4LiH4Lie4Lix4LiZ4LiY4Li44LmM4Liq4Lix4LiV4Lin4LmM4LiZ4LmJ4Liz4LmA4LiX4Lio4Lia4Liy4Lil4LmA4Lih4Li34Lit4LiH4Lio4Lij4Li14Liq4Liw4LmA4LiB4Lip!5e0!3m2!1sth!2sth!4v1688238284673!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> An important tourist attraction and learning center for youth, students, and those interested is located within the "Chalerm Phra Kiat His Majesty the King's 80th Birthday Anniversary Park" (also known as Huai Nam Khem Island) in Nong Khrok sub-district, Mueang district. It is also the first aquatic animal display center in Southern Isaan. The main highlight and point of interest is a 24-meter underwater glass tunnel that allows tourists to experience the beauty of the fish up close. There's also a diving show and fish feeding by the staff at 2:00 PM every day. </p>
                </div>
            }

            

            {params.id === "2" && 
                <div>
                    <img src='https://www.thailandee.com/img/villes/si-saket/somdet-phra-srinagarindra-park.jpg' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/TouristSpots`}>
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
            
                            
                    <h2 className="content-title"> Si Saket Princess Mother Public Park </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.01268881406!2d104.30267827517174!3d15.102629364588475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116e293b763a173%3A0x7cfe31d9eb6d38c7!2z4Liq4Lin4LiZ4Liq4Lih4LmA4LiU4LmH4LiI4Lie4Lij4Liw4Lio4Lij4Li14LiZ4LiE4Lij4Li04LiZ4LiX4Lij4LmMICjguKrguKfguJnguKrguKHguYDguJTguYfguIjguKLguYjguLIpIFNvbWRldCBQaHJhIFNyaW5hZ2FyaW5kcmEgUGFyayAoU3VhbiBTb21kZXQgWWEp!5e0!3m2!1sth!2sth!4v1688238388186!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> Princess Srinakarin Park Sakon Nakhon is established in order to celebrate Princess Srinakarin’s 80th year of birth. It is the 5th park, which is located at Nhong Harn pond, Tad Cheng Chum subdistrict, Muang district, Sakon Nakhon province. There are 192 square kilometers, which are 112 square kilometers of land and 80 square kilometers of water. Princess Srinakarin was the president in the park’s opening ceremony on 9th November 1987.\nThe institute which takes care of this park is Sakon Nakhon municipality. The tree of the park is Non si or Yellow Flame Tree. Princess Srinakarin park Sakon Nakhon is the park close to the big pond called Nhong Harn. The pond is a natural pond in the northeastern region which covers many districts. It is also the house and habitat for many aquatic animals and water birds. One part of the park is protruding into the pond which is the front part of the park. It makes the surrounding nice and graceful. In the middle of the pond is “Sra Pang Thong”. It has a legend that this was the pond the villagers dug with Phra Tad Cheng Chum, which is the important religious place of Sakon Nakhon province. The pond has a history dated back to BE 16. It was where the gods clean their bodies before they paid respect to Phra That. Therefore, people believe the pond is a holy place. The government sector and people have used the water from this pond in many ceremonies. In the middle of the pond, there is the tallest fountain in Thailand.</p>
                </div>
            }

            {params.id === "3" && 
                <div>
                    <img src='https://thailandtourismdirectory.go.th/assets/upload/2017/11/24/201711246d5f0153368d446324c0cbd0836ae802155437.jpg' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/TouristSpots`}>
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
            
                            
                    <h2 className="content-title"> Wat Sang Siritham Floating Market </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.9414123899537!2d100.46954187515432!3d13.902450093787646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28517485a57b3%3A0xee0849c870bb8cb0!2z4LiV4Lil4Liy4LiU4LiZ4LmJ4Liz4Lin4Lix4LiU4LmB4Liq4LiH4Liq4Li04Lij4Li04LiY4Lij4Lij4Lih!5e0!3m2!1sth!2sth!4v1688238547355!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> Originally, Wat Saeng Siritham Floating Market; there were boats selling goods on the river and on the rafts too. But, now the merchant can no longer sit in the boat because when the big boats passing through, it will cause waves to sway the boat. After that, the boat was canceled, and they come up on the raft instead. Now, this place is more like a food raft in front of a temple than a regular restaurant. There are a la carte food, noodles, Thai desserts, and beverages. On land, there are authentic fruit shops of Muang Non garden. </p>
                </div>
            }

            {params.id === "4" && 
                <div>
                    <img src='https://thailandtourismdirectory.go.th/assets/upload/2017/11/08/20171108478ee79434a295d016f91d90ea301bcc145622.jpg' alt="tourist-spots" className="tourist-spots-content"/>
                            
                    <div className="content-top-button">
                        <Link to= {`/TouristSpots`}>
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
            
                            
                    <h2 className="content-title"> Walking Street Sisaket </h2>
                    <p className="content-province"> Si Sa Ket </p>
                        
                    <div className="map-reponsive">
                        <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.962659267371!2d104.3163706751718!3d15.105386564518803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116e2e8e74f873d%3A0x87ff4f4c7ae78dc9!2sWalking%20Street%20Sisaket!5e0!3m2!1sth!2sth!4v1688238622896!5m2!1sth!2sth" width="350" height="100" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            
                    <h2 className="content-description-title"> Highlights </h2>
                    <p className="content-description"> It appeared that a large number of Sisaket residents came to stroll and shop from the variety of goods offered by numerous vendors. Items for sale included fresh vegetables, fruits, clothing, food, and OTOP (One Tambon One Product) products of various kinds. All kinds of goods were selling exceptionally well, to the extent that vendors had to return and bring additional stock to meet the demand of the public.</p>
                </div>
            }
            
            
        </div>
    )
}