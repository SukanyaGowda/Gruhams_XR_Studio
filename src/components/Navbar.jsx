import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    // Header should be dark on all pages except the Home hero
    const isDark = location.pathname !== '/';

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${isDark ? 'dark' : ''} ${menuOpen ? 'nav-open-header' : ''}`}>
            <Link to="/" className="logo-container" style={{ textDecoration: 'none' }} onClick={closeMenu}>
                <div className="logo-top">GRUHAMS</div>
                <div className="logo-bottom">PLANS</div>
            </Link>

            {/* Hamburger button */}
            <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
                <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) => `nav-home-btn ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                        HOME
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/pricing" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                        PRICING
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/book" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                        BOOK NOW
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/callback" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                        REQUEST A CALL BACK
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/architects" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                        ARCHITECTS/BUILDERS
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/license" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                        LICENSE AND FRANCHISE
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/locations" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                        OUR LOCATIONS
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
