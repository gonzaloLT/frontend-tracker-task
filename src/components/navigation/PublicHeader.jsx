import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './styles/publicHeader.module.css';

export const PublicHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to={'/'} className={styles.link}>
                    <h1 className={styles.titleLogo}>Task Tracker</h1>
                </Link>
            </div>

            <nav className={styles.nav}>
                <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
                    <li><Link to={'/login'} onClick={toggleMenu}>Login</Link></li>
                    <li><Link to={'/signup'} onClick={toggleMenu}>Signup</Link></li>
                </ul>
            </nav>
        </header>
    );
};