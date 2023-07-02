
import { Link } from "react-router-dom";
import "./NewMenu.css"
import {FaBars} from "react-icons/fa"
import {FaSearch} from "react-icons/fa"
import { useState } from 'react';
import { MdClose } from "react-icons/md"

export default function NewMenu() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
  
    return (
        <nav className="top-menu">
        
            <button onClick={toggleMenu} className="menu-tap" >{isOpen ? <MdClose></MdClose> : <FaBars></FaBars>}</button>
            {isOpen && (
                <div className= 'tab-menu-div'>
                    <ul className="tab-menu-ul">
                        <p><MdClose onClick={toggleMenu}></MdClose></p>
                        <li>Profile</li>
                        <li>My account</li>
                        <li>AI planner</li>
                        <li>My plan</li>
                        <li>Setting</li>
                    </ul>
                </div>
            )}


            <Link>
                <button className="account-tap">
                    <p>
                        <FaSearch></FaSearch>
                    </p>
                </button>
            </Link>
        </nav>
    )
}