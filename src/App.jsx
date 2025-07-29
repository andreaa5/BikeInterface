
import './css/App.css'
import Home from './pages/Home'
import Gear from './pages/Gear'
import { Routes, Route } from "react-router-dom"
import Recommendation from './pages/Recommendation'
import NavBar from './components/NavBar'
import Image from './assets/images/KheemoJungcoBike.jpg'
import Form from './components/Form'
import ControlledCarousel from './components/Carousel'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (

    <div>
      <NavBar/>
     <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/results' element={<Recommendation/>}/>
        <Route path='/gear' element={<Gear/>}/>
      </Routes>
    </main>
    </div>
  )
}

export default App
