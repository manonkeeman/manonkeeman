import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/coding" onClick={() => setIsOpen(false)}>Coding</Link></li>
                <li><Link to="/design" onClick={() => setIsOpen(false)}>Design</Link></li>
                <li><Link to="/journal" onClick={() => setIsOpen(false)}>Journal</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;