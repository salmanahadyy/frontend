
import { Link } from "react-router-dom"
import "./navbar.css"
import logo from '../assets/portfolio.svg'

interface Iprops{
    name:string
}
function Navbar(props:Iprops){
    return(
        <div className="navbar">
            <img alt="logo" src={logo} className="logo" />
            <div className="navitem">
            <p>
                <Link to= "/home">Home</Link>
                </p>
            <p>
               <Link to="/About">About</Link>
                </p>
            <p>
                <Link to="/Contact">Contact</Link>
            </p>

            </div>
            <p>Halo {props.name}</p>
        </div>
    )
}

export default Navbar