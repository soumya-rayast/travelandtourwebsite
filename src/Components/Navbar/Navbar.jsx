import React, { useState } from 'react'
import './navbar.css'
import { Link } from "react-router-dom"
import { BiMapPin } from "react-icons/bi"
import { AiFillCloseCircle } from "react-icons/ai"
import { AiFillHome } from "react-icons/ai"
import { BiDotsVertical } from "react-icons/bi"
const Navbar = () => {
  const [active, setActive] = useState('navBar')
  //function fos show toggle
  const ShowNav = () => {
    setActive('navBar activeNavbar')
  }
  //function for remove toggle
  const removeNav = () => {
    setActive('navBar')
  }
  return (
    <div>
      <section classnName="navbarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1> <BiMapPin className='icon' />TravelKar.</h1>
            </a>
          </div>
          <div className={active}>
            <ul className="navLists flex">

              <li className="navItem">
                <a href="#" className="navLink">
                  <Link to="/">
                    Home
                  </Link>
                </a>
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
                <a href="#" className="navLink">Contact</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  <Link to="/login">
                    Log In
                  </Link>
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                <Link to="/register">
                    Sign up
                  </Link>
                  </a>
              </li>
              <button className='btn'>
                <a href="#">Book Now</a>
              </button>
            </ul>

            <div onClick={removeNav}
              className="closeNavbar">
              <AiFillCloseCircle className='icon' />
            </div>
          </div>
          <div onClick={ShowNav}
            className="toggleNavbar">
            <BiDotsVertical className="icon" />
          </div>
        </header>
      </section>
    </div>
  )
}

export default Navbar
