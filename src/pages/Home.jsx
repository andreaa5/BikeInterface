import { useState } from "react"
import "../css/Home.css"
import { Routes, Route } from "react-router-dom"
import Recommendation from './Recommendation'
import NavBar from '../components/NavBar'
import Image from '../assets/images/KheemoJungcoBike.jpg'
import Form from '../components/Form'
import ControlledCarousel from '../components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return(
       <>
      <section className="custom-container" style={{ backgroundImage: `url(${Image})` }}>
        <div className="text-container">
          <h1>Find your perfect bike</h1>
          <p>Tell us about your interests and get a recommendation</p>
          <a href="#bike-form">Start now</a>
        </div>
      </section>

      <div className="d-flex justify-content-center align-items-start gap-4 p-4">
        <div className="p-4 bg-white rounded shadow" id="bike-form" style={{ flex: 1 }}>
          <Form />
        </div>
        <div className="p-4 bg-white rounded shadow" style={{ flex: 1 }}>
          <ControlledCarousel />
        </div>
      </div>
        
    </>
    )
    
}

export default Home