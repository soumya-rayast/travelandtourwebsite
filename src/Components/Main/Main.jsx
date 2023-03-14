import React from 'react'
import "./main.css"
import {HiLocationMarker} from "react-icons/hi"
import {BsFillClipboard2Fill} from "react-icons/bs"
import img1 from "../../Media/img1.jpg"
import img2 from "../../Media/img2.jpg"
import img3 from "../../Media/img3.jpg"
import img4 from "../../Media/img4.jpg"
import img5 from "../../Media/img5.jpg"
import img6 from "../../Media/img6.jpg"
const Data =[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Taj Mahal',
    location:'Agra(U.P)',
    grade:'Cutural Heritage',
    fees:'$2',
    description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Dal lake',
    location:'Srinagar(J&K)',
    grade:'Tourism spot',
    fees:'$2',
    description:'The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir” or “Srinagar The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir” or “Srinagars Jewel”. The lake is also an important source for commercial operations in fishing and water plant harvesting.'
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Golden Temple',
    location:'Amritsar (Punjab)',
    grade:'Gurudwara',
    fees:'$2',
    description:'The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure. Maharaja Ranjit Singh had the upper half of the building built with approximately 400 kg of gold leaf'
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'jatayu Temple',
    location:'Kollam(Kerala)',
    grade:'Temple',
    fees:'$2',
    description:'Jatayu Nature Park holds the distinction of having the worlds largest bird sculpture, which is of Jatayu. The sculpture measures (200 feet (61 m) long, 150 feet (46 m) wide, 70 feet (21 m) in height and occupies 15,000 square feet (1,400 m2) of floor area). It was sculpted by Rajiv Anchal'
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'India Gate',
    location:'New Delhi',
    grade:'War Memorial',
    fees:'$2',
    description:'At the centre of New Delhi stands the 42 m high India Gate, an “Arc-de-Triomphe” like archway in the middle of a crossroad. Almost similar to its French counterpart, it commemorates the 70,000 Indian soldiers who lost their lives fighting for the British Army during the World War I.'
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'Buddha Park',
    location:'Sikkim',
    grade:'Park',
    fees:'$2',
    description:'It was constructed between 2006 and 2013, and features a 130-foot-high (40 m) statue of the Buddha, erected to mark the 2550th anniversary of the birth of Gautama Buddha, as its main attraction. The statue, built of 60 tonnes of copper, is an example of repousse work. Mount Narsing forms the backdrop to the statue.'
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
                    <span>{grade}<small>+1</small></span>
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

