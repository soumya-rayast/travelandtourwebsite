import React, { useEffect } from 'react'
import "./footer.css"
// import video2 from '../../Media/video2.mp4'
import imgfooter from "../../Media/img11.jpg"
import { BiMapPin } from "react-icons/bi"
import { FiSend } from "react-icons/fi"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiOutlineArrowRight } from "react-icons/ai"
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='footer'>
      <div className="imgDiv">
        {/* <video src={video2} muted autoPlay loop type="video/mp4" ></video> */}
        <img src={imgfooter} alt="" />
      </div>
      <div data-aos='fade-up'
      className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Keep in Touch</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
              Send <FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div data-aos='fade-up'
          className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <h1> <BiMapPin className='icon' />TravelKar.</h1>
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit facilis quam nisi delectus consectetur ullam, vero nostrum eum, doloremque possimus commodi? Quo commodi aliquid quod adipisci accusantium, enim corporis harum.
            </div>
            <div data-aos='fade-up'
            className="footerSocials">
              <AiFillInstagram className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillTwitterCircle className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* group link1  */}
            <div data-aos='fade-up'
            className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Payment
              </li>
            </div>
            {/* group link 2 */}
            <div data-aos='fade-up'
            className="linkGroup">
              <span className="groupTitle">
                Partners
              </span>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Booking
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/* group link 3 */}
            <div data-aos='fade-up'
            className="linkGroup">
              <span className="groupTitle">
                Last Minute
              </span>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Mumbai
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Delhi
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Kolkata
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Chennai
              </li>
              <li className="footerList flex">
                <AiOutlineArrowRight className="icon" />
                Hyderabad
              </li>
            </div>

          </div>
          <div className="footerDiv flex">
            <small>Best Travel Website Theme</small>
            <small>Copyrights Reserved - Istratech 2023</small>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer
