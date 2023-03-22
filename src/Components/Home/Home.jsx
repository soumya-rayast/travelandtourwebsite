import React,{useEffect} from 'react'
import './home.css'
import { GrLocation } from "react-icons/gr"
import { HiFilter } from "react-icons/hi"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { VscTasklist } from "react-icons/vsc"
import { TbAppsFilled } from "react-icons/tb"
import video from '../../Media/video2.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
//creating a react hook to add scroll animation
useEffect(()=>{
  Aos.init({duration:1000})
},[])
  return (
    <section className="home">
      <div className="overlay">
      </div>
      <video src={video} muted autoPlay loop type="video/mp4" ></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos='fade-up'
          className="smallText">
            Our Packages
          </span>
          <h1 data-aos='fade-up'
          className="homeTitle">
            Search your Holiday
          </h1>
        </div>
        <div data-aos='fade-up'
        className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here ...' />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date :</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price :</label>
              <h3 className="total">Rs 10000</h3>
            </div>
            <div className="input flex" >
              <input type="range" max="5000" min="500" />
            </div>
          </div>
          <div className="searchOptions flex" >
            <HiFilter className='icon' />
            <span>More Filter</span>
          </div>
        </div>
        <div data-aos='fade-up'
        className="homeFooterIcons flex">
          <div className="rightIcons">
            <FaFacebookSquare className="icon" />
            <FaInstagramSquare className="icon" />
            <FaTwitterSquare className="icon" />
          </div>
          <div className="leftIcons">
            <VscTasklist className="icon" />
            <TbAppsFilled className="icon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
