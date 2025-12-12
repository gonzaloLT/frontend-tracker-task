import { NavLink } from "react-router-dom";
import styles from './styles/sidebarItem.module.css'

export const SidebarItem = ({ to, label, toggleSidebar }) => {
    return (
        <li className={styles.sidebarItem}>
            <NavLink 
                to={to} 
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} 
                onClick={toggleSidebar}
            >
                {label}
            </NavLink>
        </li>
    );
};