import React from 'react'
import "./footer.css"
import video2 from '../../Media/video2.mp4'
const Footer = () => {
  return (
    <section className='footer'>
      <div className="videoDiv">
      {/* <video src={video2} muted autoPlay loop type="video/mp4" ></video> */}
      <video loop muted autoPlay>
        <source src={video2} type="video/mp4"/>
      </video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Keep in Touch</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
