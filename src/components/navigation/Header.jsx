import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { Sidebar } from "./Sidebar"
import styles from "./styles/header.module.css";

export const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <header className={styles.header}>
            <button className={styles.menuButton} onClick={toggleSidebar} aria-label="Abrir menú">
                <FaBars />
            </button>
            <Link to={'/'} className={styles.link}>
                <h1 className={styles.title}>Task tracker</h1>
            </Link>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </header>
    );
};