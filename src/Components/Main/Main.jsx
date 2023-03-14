import React from 'react'
import "./main.css"
import {HiLocationMarker} from "react-icons/hi"
import {BsFillClipboard2Fill} from "react-icons/bs"
import img from "../../Media/img1.jpg"
const Data =[
  {
    id:1,
    imgSrc:img,
    destTitle:'Taj Mahal',
    location:'Agra(U.P)',
    grade:'Cutural Heritage',
    fees:'$2',
    description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
  }
]
const Main = () => {
  return (
    <section className='main container'> 
    <div className="secTitle title">
      Most visited destinations
    </div>
    <div className="secContent grid">
      {
        Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
          return(
            <div key={id}
            className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>
              <div className="cardinfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiLocationMarker className="icon"/>
                  <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>{grade} <small>+1</small></span>
                  </div>
                  <div className="price">
                    <h1>{fees}</h1>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>
              </div>
              <button className="btn flex">
                Details <BsFillClipboard2Fill className="icon"/>
              </button>
            </div>  
          )       
        })
      }
    </div>
    </section>
  )
}

export default Main
