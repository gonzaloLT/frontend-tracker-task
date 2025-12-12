import { SidebarItem } from './SidebarItem'
import { FaTimes } from 'react-icons/fa'
import styles from './styles/sidebar.module.css'

export const Sidebar = ({isOpen, toggleSidebar}) => {
    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.topSection}>
                <h2 className={styles.brand}>Task tracker</h2>
                <button className={styles.closeButton} onClick={toggleSidebar} aria-label="Cerrar menú">
                    <FaTimes />
                </button>
            </div>

            <nav className={styles.middleSection}>
                <ul>
                    <SidebarItem to={'/'} label={'Inicio'} toggleSidebar={toggleSidebar}/>
                    <SidebarItem to={'/my-projects'} label={'Mis proyectos'} toggleSidebar={toggleSidebar}/>
                    <SidebarItem to={'/my-stories'} label={'Mis historias'} toggleSidebar={toggleSidebar}/>
                </ul>
            </nav>

            <div className={styles.bottomSection}>
                <SidebarItem to={'/settings'} label={'Configuraciones'} toggleSidebar={toggleSidebar}/>
            </div>
        </aside>
    )
}