import { FaProjectDiagram, FaLightbulb, FaClipboardList, FaTasks } from "react-icons/fa";

import { LayoutDefault } from "../layouts/LayoutDefault";
import { useAuth } from "../context/AuthContext";
import styles from './styles/dashboard.module.css';

export const Dashboard = () => {
    const { user } = useAuth();

    const dashboardItems = [
        { icon: <FaProjectDiagram />, title: "Mis Proyectos", description: "Ver y gestionar tus proyectos actuales" },
        { icon: <FaTasks />, title: "Tareas Pendientes", description: "Revisar y actualizar tus tareas asignadas" },
        { icon: <FaLightbulb />, title: "Épicas", description: "Explorar las épicas de tus proyectos" },
        { icon: <FaClipboardList />, title: "Historias", description: "Revisar las historias de usuario" },
    ];

    return (
        <LayoutDefault>
            <div className={styles.dashboardContainer}>
                <header className={styles.dashboardHeader}>
                    <h1>Bienvenido, {user?.name?.first} {user?.name?.last}</h1>
                    <p>Gestiona tus proyectos de manera eficiente</p>
                </header>

                <div className={styles.dashboardGrid}>
                    {dashboardItems.map((item, index) => (
                        <div className={styles.dashboardItem} key={index}>
                            <div className={styles.itemIcon}>{item.icon}</div>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.comingSoon}>
                    <h2>Próximamente...</h2>
                    <p>Estamos trabajando en nuevas características para mejorar tu experiencia. ¡Mantente atento!</p>
                </div>
            </div>
        </LayoutDefault>
    );
};