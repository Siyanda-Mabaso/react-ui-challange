
import "./Navbar.css";
//*import { FaSearch } from 'react-icons/fa';


function Navbar(){
    return(
        <nav>
            <div className="content">
                <h1>Patisserie</h1>
                <a href='/#'className="nav-links">Home</a>
                <a href='/#'className="nav-links">Menu</a>
                <a href='/#'className="nav-links">Cakes</a>
                <a href='/#'className="nav-links">Parties</a>
                <a href='/#'className="nav-links">Contact</a>
                
            </div>
            <div><button className="btn">Order Now</button></div>
            
        </nav>
    )
}
export default Navbar;
