import React,{useState} from 'react'
import './navbar.css'
import {BiMapPin} from "react-icons/bi"
import {AiFillCloseCircle} from "react-icons/ai"
import {BiDotsVertical} from "react-icons/bi"
const Navbar = () => {
  const [active ,setActive] = useState('navBar')
//function fos show toggle
  const ShowNav = () =>{
    setActive('navBar activeNavbar')
  }
//function for remove toggle
const removeNav = () =>{
  setActive('navBar')
}
  return (
    <div>
    <section classnName="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1> <BiMapPin className='icon'/>TravelKar.</h1>
          </a>
        </div>
        <div className={active}>
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

          <div onClick={removeNav}
          className="closeNavbar">
            <AiFillCloseCircle  className='icon'/>
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
