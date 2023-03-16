import React ,{useEffect}from 'react'
import "./main.css"
import {HiLocationMarker} from "react-icons/hi"
import {BsFillClipboard2Fill} from "react-icons/bs"
import img1 from "../../Media/img1.jpg"
import img2 from "../../Media/img2.jpg"
import img3 from "../../Media/img3.jpg"
import img4 from "../../Media/img4.jpg"
import img5 from "../../Media/img5.jpg"
import img6 from "../../Media/img6.jpg"
import img7 from "../../Media/img7.jpg"
import img8 from "../../Media/img8.jpg"
import img9 from "../../Media/img9.jpeg"
import img10 from "../../Media/img10.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data =[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Taj Mahal',
    location:'Agra(U.P)',
    grade:'Cutural Heritage',
    fees:'Rs 50',
    description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Dal lake',
    location:'Srinagar(J&K)',
    grade:'Tourism spot',
    fees:'Rs 100',
    description:'The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir” or “Srinagar The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir” or “Srinagars Jewel”. The lake is also an important source for commercial operations in fishing and water plant harvesting.'
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Golden Temple',
    location:'Amritsar (Punjab)',
    grade:'Gurudwara',
    fees:'Free',
    description:'The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure. Maharaja Ranjit Singh had the upper half of the building built with approximately 400 kg of gold leaf'
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Jatayu Temple',
    location:'Kollam(Kerala)',
    grade:'Temple',
    fees:'Rs 20',
    description:'Jatayu Nature Park holds the distinction of having the worlds largest bird sculpture, which is of Jatayu. The sculpture measures (200 feet (61 m) long, 150 feet (46 m) wide, 70 feet (21 m) in height and occupies 15,000 square feet (1,400 m2) of floor area). It was sculpted by Rajiv Anchal'
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'India Gate',
    location:'New Delhi',
    grade:'War Memorial',
    fees:'Free',
    description:'At the centre of New Delhi stands the 42 m high India Gate, an “Arc-de-Triomphe” like archway in the middle of a crossroad. Almost similar to its French counterpart, it commemorates the 70,000 Indian soldiers who lost their lives fighting for the British Army during the World War I.'
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'Buddha Park',
    location:'Sikkim',
    grade:'Park',
    fees:'Free',
    description:'It was constructed between 2006 and 2013, and features a 130-foot-high (40 m) statue of the Buddha, erected to mark the 2550th anniversary of the birth of Gautama Buddha, as its main attraction. The statue, built of 60 tonnes of copper, is an example of repousse work. Mount Narsing forms the backdrop to the statue.'
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:'Hymayuns Tomb',
    location:'Delhi',
    grade:'Tomb',
    fees:'Rs 40',
    description:'Humayuns tomb is the tomb of the Mughal Emperor Humayun in Delhi, India. The tomb was commissioned by Humayuns first wife and chief consort, Empress Bega Begum under her patronage in 1558, and designed by Mirak Mirza Ghiyas and his son, Sayyid Muhammad, Persian architects chosen by her.'
  } , 
  {
    id:8,
    imgSrc:img8,
    destTitle:'Hawa Mahal',
    location:'Pink City Jaipur ',
    grade:'Palace',
    fees:'Free',
    description:'The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. It has a curved architecture that leans at an 87 degree angle, and a pyramidal shape which has helped it stay erect for centuries. The Hawa Mahal is dedicated to Lord Krishna.'
  }, 
  {
    id:9,
    imgSrc:img9,
    destTitle:'Lotus Temple',
    location:'Delhi',
    grade:'Temple',
    fees:'Rs 50',
    description:'It is known for its beautiful flower-like architecture and marvelous ambiance that make it a popular tourist attraction for people of all faiths. The Bahai Lotus Temple is one of the worlds most beautiful religious buildings and a must-visit when in Delhi.'
  }, 
  {
    id:10,
    imgSrc:img10,
    destTitle:'Gateway Of India ',
    location:'Mumbai',
    grade:'Arch Mounment',
    fees:'Free',
    description:'It is known for its beautiful flower-like architecture and marvelous ambiance that make it a popular tourist attraction for people of all faiths. The Bahai Lotus Temple is one of the worlds most beautiful religious buildings and a must-visit when in Delhi.'
  }  
]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='main container'> 
    <div data-aos='fade-right'
    className="secTitle title">
      Most visited Destinations
    </div>
    <div data-aos='fade-up'
    className="secContent grid">
      {
        Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
          return(
            <div data-aos='fade-up'
            key={id}
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

