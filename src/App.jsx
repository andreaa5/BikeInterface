
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Favorite from './pages/Favorites'
import NavBar from './components/NavBar'
import Image from './assets/images/KheemoJungcoBike.jpg'
import Form from './components/Form'
import ControlledCarousel from './components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const bike_pictures = [
    { url: './assets/images/gelmis-bartulis-bike.jpg', alt: "honda-cbr" },
    { url: './assets/images/josh-marshall-bike.jpg', alt: "yamaha-mt10" },
    { url: './assets/images/pairach-boriboonmee-bike.jpg', alt: "kawasaki-zx6r" },
    { url: './assets/images/vaclav-pechar-bike.jpg', alt: "ktm-cross" },
    { url: './assets/images/zakaria-zayane-bike.jpg', alt: "bmw" }
  ]

  return (

    /*<div>
      <NavBar/>
     <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorite/>}/>
      </Routes>
    </main>
    </div>*/

    <>
      <NavBar></NavBar>
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

export default App
