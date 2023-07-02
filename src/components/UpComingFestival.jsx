import React, { Component } from "react";
import Slider from "react-slick";
import "./UpComingFestival.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class UpcomingFestival extends Component {

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
              <img src="https://s359.kapook.com/pagebuilder/e49e01e4-650a-4a83-975a-a83575e3cd36.jpg" width="200px"></img>
              <div className="picture-slider-text">
                <h4 id="large-text"> Bun Bang Fai Saen Festival </h4>
                <p> Sri sa ket </p>
              </div>
            </div>
          </div>

          <div className="picture-slider-div">
            <div className="picture-slider-card">
              <img src="https://mpics.mgronline.com/pics/Images/563000001731701.JPEG" width="200px"></img>
              <div className="picture-slider-text">
                <h4 id="large-text">  Lamduan Flower Festival </h4>
                <p> Sri sa ket </p>
              </div>
            </div>
          </div>

          <div className="picture-slider-div">
            <div className="picture-slider-card">
              <img src="https://4.bp.blogspot.com/-omxh89ElpXc/V0PjUqT_fsI/AAAAAAAAKYA/isXWnjdJnqMxiUxOMYLlPIMIbvy1Q1F6ACLcB/s640/Capture3_resize.PNG" width="200px"></img>
              <div className="picture-slider-text">
                <h4> Sweet Corn Day </h4>
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