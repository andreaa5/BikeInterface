import { useState } from "react"
import "../css/Home.css"
import { Routes, Route } from "react-router-dom"
import Recommendation from './Recommendation'
import NavBar from '../components/NavBar'
import Image from '/images/KheemoJungcoBike.jpg'
import Form from '../components/Form'
import Footer from '../components/Footer'
import ControlledCarousel from '../components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
   const bike_pictures = [
    { url: './assets/images/gelmis-bartulis-bike.jpg', alt: "honda-cbr", image_author: "Gelmis Bartulis", name: "Honda CBR650R" },
    { url: './assets/images/josh-marshall-bike.jpg', alt: "yamaha-mt10", image_author: "Josh Marshall", name: "Yamaha MT-10" },
    { url: './assets/images/pairach-boriboonmee-bike.jpg', alt: "kawasaki-zx6r", image_author: "Pairach Boriboonmee", name: "Kawasaki ZX-6R" },
    { url: './assets/images/vaclav-pechar-bike.jpg', alt: "ktm-cross", image_author: "Vaclav Pechar", name: "KTM Cross" },
    { url: './assets/images/zakaria-zayane-bike.jpg', alt: "bmw", image_author: "Zakaria Zayane", name: "BMW" }
  ]

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
        <Footer data={bike_pictures}/>
    </>
    )
    
}

export default Home