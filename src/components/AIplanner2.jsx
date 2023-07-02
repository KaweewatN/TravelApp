import "./AIplanner2.css"
import React from "react"
import {TiArrowBack} from "react-icons/ti";
import {FaUserAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
import "./AIplanner2.css"; 
import {HiUserGroup} from "react-icons/hi"
import {GiLovers} from "react-icons/gi"
import {MdFamilyRestroom} from "react-icons/md" 
import {MdElderly} from "react-icons/md" 
import { useState } from 'react';

export default function AiPlanner_2() {

    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);
    const [isClicked5, setIsClicked5] = useState(false);

    const handleClick = () => {
        setIsClicked(prevShown => !prevShown);
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(false)
        setIsClicked5(false)
     };

    const handleClick2 = () => {
        setIsClicked2(prevShown => !prevShown);
        setIsClicked(false)
        setIsClicked3(false)
        setIsClicked4(false)
        setIsClicked5(false)
         };
    
    const handleClick3 = () => {
        setIsClicked3(prevShown => !prevShown);
        setIsClicked(false)
        setIsClicked2(false)
        setIsClicked4(false)
        setIsClicked5(false)
     };

     const handleClick4 = () => {
        setIsClicked4(prevShown => !prevShown);
        setIsClicked(false)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked5(false)
     };


     const handleClick5 = () => {
        setIsClicked5(prevShown => !prevShown);
        setIsClicked(false)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(false)
     };
    

    const buttonStyle = {
    backgroundColor: isClicked ? '#DAB9E6' : '#EAEFF2',
    };

    const buttonStyle2 = {
        backgroundColor: isClicked2 ? '#DAB9E6' : '#EAEFF2',
    };

    const buttonStyle3 = {
        backgroundColor: isClicked3 ? '#DAB9E6' : '#EAEFF2',
    };

    const buttonStyle4 = {
        backgroundColor: isClicked4 ? '#DAB9E6' : '#EAEFF2',
    };

    const buttonStyle5 = {
        backgroundColor: isClicked5 ? '#DAB9E6' : '#EAEFF2',
    };

    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    const [value5, setValue5] = useState(0);
    const [value6, setValue6] = useState(0);
    const [value7, setValue7] = useState(0);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleChange2 = (event) => {
        setValue2(event.target.value);
      };

      const handleChange3 = (event) => {
        setValue3(event.target.value);
      };

      const handleChange4 = (event) => {
        setValue4(event.target.value);
      };

      const handleChange5 = (event) => {
        setValue5(event.target.value);
      };

      const handleChange6 = (event) => {
        setValue6(event.target.value);
      };

      const handleChange7 = (event) => {
        setValue7(event.target.value);
      };
  
    const getLabel = (value) => {
        if (value > 80) {
          return "Must Have";
        } else if (value > 70) {
          return "Interested";
        } else if (value > 50) {
          return "Can have";
        } else if (value > 20) {
          return "Less interested";

        } else {
          return "Not interested";
        }
    };


    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);
    const [checked8, setChecked8] = useState(false);
    const [checked9, setChecked9] = useState(false);
    const [checked10, setChecked10] = useState(false);
    

    const handleCheckboxChange = () => {
      setChecked(!checked);
    };

    const handleCheckboxChange2 = () => {
        setChecked2(!checked2);
      };

    const handleCheckboxChange3 = () => {
        setChecked3(!checked3);
    };

    const handleCheckboxChange4 = () => {
        setChecked4(!checked4);
    };

    const handleCheckboxChange5 = () => {
        setChecked5(!checked5);
    };

    const handleCheckboxChange6 = () => {
        setChecked6(!checked6);
    };

    const handleCheckboxChange7 = () => {
        setChecked7(!checked7);
    };

    const handleCheckboxChange8 = () => {
        setChecked8(!checked8);
    };

    const handleCheckboxChange9 = () => {
        setChecked9(!checked9);
    };

    const handleCheckboxChange10 = () => {
        setChecked10(!checked10);
    };
      

    return (
        <div className="container">
            <img src="https://esan108.com/main/wp-content/uploads/2015/12/%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%A2-%E0%B8%9C%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%AD%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87.jpg" alt="srisaket-image"
                className="srisaket-img"/>

            <div className="ai-planner-link-back-div">
                <Link to= '/AiPlanner/1' className="back-button-link">
                    <button className="back-button">
                        <p> <TiArrowBack></TiArrowBack> </p>
                    </button>
                </Link>
                <h2 className="ai-planner-province">SriSaket</h2>
            </div>

            <div className="ai-planner-container">

                <h3 id="ai-planner-2-title"> How do you travel ?</h3>
                <div className="ai-planner-type-container">

                    <div className="ai-planner-type-div">
                        <button style={buttonStyle} onClick={handleClick}><FaUserAlt></FaUserAlt></button>
                        <span>Single</span>
                    </div>

                    <div className="ai-planner-type-div">
                        <button style={buttonStyle2} onClick={handleClick2} className="button-large"><GiLovers></GiLovers></button>
                        <span>Couple</span>
                    </div>

                    <div className="ai-planner-type-div">
                        <button style={buttonStyle3} onClick={handleClick3} className="button-large"><MdFamilyRestroom></MdFamilyRestroom></button>
                        <span>Family</span>
                    </div>

                    <div className="ai-planner-type-div">
                        <button style={buttonStyle4} onClick={handleClick4} className="button-large"><HiUserGroup></HiUserGroup></button>
                        <span>Friends</span>
                    </div>

                    <div className="ai-planner-type-div">
                        <button style={buttonStyle5} onClick={handleClick5} className="button-large"><MdElderly></MdElderly></button>
                        <span>Elderly</span>
                    </div>
                </div>

                <h3 className="ai-planner-styles"> Select your style</h3>

                <div className="ai-planner-slider">
                    <div className="ai-planner-slider-text">
                        <h3> Nature</h3>
                        <p>{getLabel(value)}</p>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={value}
                        onChange={handleChange}
                        className="ai-planner-slider-input"
                    />
                </div>

                <div className="ai-planner-slider">
                    <div className="ai-planner-slider-text">
                        <h3> Culture</h3>
                        <p>{getLabel(value2)}</p>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={value2}
                        onChange={handleChange2}
                        className="ai-planner-slider-input"
                    />
                </div>

                <div className="ai-planner-slider">
                    <div className="ai-planner-slider-text">
                        <h3> Advanture</h3>
                        <p>{getLabel(value3)}</p>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={value3}
                        onChange={handleChange3}
                        className="ai-planner-slider-input"
                    />
                </div>

                <div className="ai-planner-slider">
                    <div className="ai-planner-slider-text">
                        <h3> Shopping </h3>
                        <p>{getLabel(value4)}</p>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={value4}
                        onChange={handleChange4}
                        className="ai-planner-slider-input"
                    />

                    <div id="ai-planner-food-checkbox">

                        <label>
                            <input
                            type="checkbox"
                            checked={checked6}
                            onChange={handleCheckboxChange6}
                            id="ai-planner-food-input" />
                            &nbsp;&nbsp;Shopping mall
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            checked={checked7}
                            onChange={handleCheckboxChange7}
                            id="ai-planner-food-input" />
                            &nbsp;&nbsp;Local market
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            checked={checked8}
                            onChange={handleCheckboxChange8}
                            id="ai-planner-food-input" />
                            &nbsp;&nbsp;Local outlet
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            checked={checked9}
                            onChange={handleCheckboxChange9}
                            id="ai-planner-food-input" />
                            &nbsp;&nbsp;OTOP 
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            checked={checked10}
                            onChange={handleCheckboxChange10}
                            id="ai-planner-food-input" 
                            />
                            &nbsp;&nbsp;Night market
                        </label>

                    </div>

                    
                </div>

                <div className="ai-planner-slider">
                    <div className="ai-planner-slider-text">
                        <h3> Cafe </h3>
                        <p>{getLabel(value5)}</p>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={value5}
                        onChange={handleChange5}
                        className="ai-planner-slider-input"
                    />
                </div>

                <div className="ai-planner-slider">
                    <div className="ai-planner-slider-text">
                        <h3> Food </h3>
                        <p>{getLabel(value6)}</p>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={value6}
                        onChange={handleChange6}
                        className="ai-planner-slider-input"
                    />

                    <div id="ai-planner-food-checkbox">

                        <label>
                            <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleCheckboxChange}
                            id="ai-planner-food-input" />
                            &nbsp;&nbsp;Local restaurant
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            checked={checked5}
                            onChange={handleCheckboxChange5}
                            id="ai-planner-food-input" />
                            &nbsp;&nbsp;Street Food
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            checked={checked2}
                            onChange={handleCheckboxChange2}
                            id="ai-planner-food-input" />
                            &nbsp;&nbsp;Family choice
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            checked={checked3}
                            onChange={handleCheckboxChange3}
                            id="ai-planner-food-input" />
                            &nbsp;&nbsp;Vegetarian
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            checked={checked4}
                            onChange={handleCheckboxChange4}
                            id="ai-planner-food-input" 
                            />
                            &nbsp;&nbsp;Muslim
                        </label>

                    </div>

                    
                </div>

                <div className="ai-planner-slider">
                    <div className="ai-planner-slider-text">
                        <h3> NightLife </h3>
                        <p>{getLabel(value7)}</p>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={value7}
                        onChange={handleChange7}
                        className="ai-planner-slider-input"
                    />
                </div>

                <div className="ai-planner-last-q">
                    <h3> What destination do you would like to go</h3>
                    <input type="text"></input>
                </div>
                
                <Link to= '/AiPlanner/3' className="back-button-link">
                    <div className="ai-planner-next-button-div">
                        <button className="ai-planner-next-button"> Next </button>
                     </div>
                </Link>

            </div>
        </div>
    )
}