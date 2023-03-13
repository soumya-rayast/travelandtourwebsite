import React from 'react'
import './home.css'
import {GrLocation} from "react-icons/gr"
import {HiFilter} from "react-icons/hi"
import video from '../../Media/video2.mp4'
const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
      </div>
      <video src={video} muted autoPlay loop type="video/mp4" ></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className="homeTitle">
            Search your Holiday
          </h1>
        </div>
        <div className="cardDiv grid">
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
              <input type="date"/>
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price :</label>
              <h3 className="total">$500</h3>
            </div>
            <div className="input flex" >
              <input type="range" max="5000" min="500"/>
            </div>
          </div>
          <div className="searchOptions flex" >
            <HiFilter className='icon' />
            <span>More Filter</span>
          </div>
        </div>
        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            
          </div>
          <div className="leftIcons">
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
