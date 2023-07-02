import React, { Component } from "react";
import Slider from "react-slick";
import "./UpComingFestival.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class HotDeal extends Component {
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1.8,
      slidesToScroll: 1
    };
    return (
        <div className="picture-slider-container">
          <Slider {...settings}>
  
            <div className="picture-slider-div">
              <div className="picture-slider-card">
                <img src="https://pix10.agoda.net/hotelImages/261/261468/261468_14062017460019956880.jpg?ca=2&ce=1&s=414x232" width="200px"></img>
                <div className="picture-slider-text">
                  <h4> tree house hotel </h4>
                  <p> Sri sa ket </p>
                </div>
              </div>
            </div>
  
            <div className="picture-slider-div">
              <div className="picture-slider-card">
                <img src="https://pix10.agoda.net/hotelImages/1506769/-1/0e0efd36131d38c5c7e7a62012afb62f.jpg?ca=7&ce=1&s=768x1024" width="200px"></img>
                <div className="picture-slider-text">
                  <h4> Pongsin resort </h4>
                  <p> Sri sa ket </p>
                </div>
              </div>
            </div>
  
            <div className="picture-slider-div">
              <div className="picture-slider-card">
                <img src="https://pix10.agoda.net/hotelImages/759/759749/759749_14102216000022890364.jpg?ca=3&ce=1&s=768x1024" width="200px"></img>
                <div className="picture-slider-text">
                  <h4 id="chaba-raloy-resort"> Chaba Raloy Resort </h4>
                  <p> Sri sa ket </p>
                </div>
              </div>
            </div>
  
            <div className="picture-slider-div">
              <div className="picture-slider-card see-all">
                <h3 id="see-all"> See all </h3>
              </div>
            </div>
            
          </Slider>
        </div>
      );
  }
}