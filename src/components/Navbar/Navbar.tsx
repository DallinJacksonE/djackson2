import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Handlers to toggle and close the menu
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo / Home Link */}
        <div className={styles.brand}>
          <NavLink to="/" className={styles.brandLink} onClick={closeMenu}>
            d_jackson
          </NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.mobileOpen : ''}`}>
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Projects
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            About
          </NavLink>
          <NavLink to="/resume" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Resume
          </NavLink>

          {/* Theme Toggle Button */}
          <button
            onClick={() => { toggleTheme(); closeMenu(); }}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
