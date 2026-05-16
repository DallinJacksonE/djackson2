import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing the Font Awesome icons
import { useTheme } from '../../hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo / Home Link */}
        <div className={styles.brand}>
          <NavLink to="/" className={styles.brandLink}>
            d_jackson
          </NavLink>
        </div>

        <div className={styles.navLinks}>
          <NavLink to="/projects" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            About
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Resume
          </NavLink>

          {/* The Theme Toggle Button */}
          <button
            onClick={toggleTheme}
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
