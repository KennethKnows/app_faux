import { Link } from "react-router-dom";

// function Navbar() {

// } 

const Navbar = () => {
    return  (
        <>
            <nav className="nav">
                <div className="brand">
                    <Link to="/" className="brand-name">Faux App</Link>
                </div>
                <div className="navbar">
                    <Link to="/" className="nav-item">HOME</Link>
                    <Link to="/about" className="nav-item">ABOUT</Link>
                    <Link to="/contact" className="nav-item">CONTACT US</Link>
                    <Link to="/products" className="nav-item">PRODUCT</Link>
                    <span className="nav-item">SIGN UP</span>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
