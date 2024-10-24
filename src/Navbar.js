import { Link } from "react-router-dom";
import "./CSS/navbar.css";  // Import the CSS file

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/characters" className="nav-link">Characters</Link>
            <Link to="/docs" className="nav-link">Documentation</Link>
        </nav>
    );
}

export default Navbar;