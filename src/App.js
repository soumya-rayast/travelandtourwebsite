import React from 'react'
import './app.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from './HomePage'
import Register from './Components/Register/Register'
import LogIn from './Components/LoginPage/LogIn'
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/register' element={<Register/>}/>

        </Routes>
      </Router>
    </div>
  )
}
export default App
// import React from 'react'
// import './app.css'
// import Navbar from "./Components/Navbar/Navbar"
// import Home from "./Components/Home/Home"
// import Footer from "./Components/Footer/Footer"
// import Main from "./Components/Main/Main"
// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     <Home/>
//     <Main/>
//     <Footer/>
//     </>
//   )
// }

// export default App