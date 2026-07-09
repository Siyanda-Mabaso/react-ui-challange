
import "./Navbar.css";
//*import { FaSearch } from 'react-icons/fa';


function Navbar(){
    return(
        <nav className="navbar">
           <h1 className="logo">Patisserie</h1>
           <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Cakes</a></li>
            <li><a href="#">Parties</a></li>
            <li><a href="#">Contacts</a></li>
           </ul>
           <button className="order-btn">Order Cake Now</button>
        </nav>
    )
}
export default Navbar;
