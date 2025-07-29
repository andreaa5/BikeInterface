import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar()
{
    return <nav className="custom-navbar">
        <div className="custom-navbar-brand">
          <Link to="/">BikeFind</Link>
        </div>
        <div className="custom-navbar-links">
          <Link to="/" className="custom-navbar-links">Bike</Link>
          <Link to="/gear" className="custom-navbar-links">Protective gear</Link>
        </div>
    </nav>
}

export default NavBar