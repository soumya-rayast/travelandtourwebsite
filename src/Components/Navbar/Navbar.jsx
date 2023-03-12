import React from 'react'
import './navbar.css'
import {MdModeOfTravel} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {BsGrid3X3Gap} from "react-icons/bs"
const Navbar = () => {
  return (
    <div>
    <section classnName="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1> <MdModeOfTravel className='icon'/>ghumoPhiro.</h1>
          </a>
        </div>
        <div className="navBar">
          <ul className="navLists flex">
            
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            <button className='btn'>
              <a href="#">Book Now</a>
            </button>
          </ul>

          <div className="closeNavbar">
            <AiFillCloseCircle  className='icon'/>
          </div>
        </div>
        <div className="toggleNavbar">
          <BsGrid3X3Gap className="icon" />
        </div>
      </header>
    </section>
    </div>
  )
}

export default Navbar
