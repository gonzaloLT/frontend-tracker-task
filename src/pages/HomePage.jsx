import { Link } from "react-router-dom";
import { PublicLayout } from "../layouts/PublicLayout"; 
import styles from './styles/home.module.css';

export const HomePage = () => {
    return (
        <PublicLayout>
            <section className={styles.featuresSection}>
                <h2>Características principales</h2>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <i className="fas fa-project-diagram"></i>
                        <h3>Proyectos</h3>
                        <p>Crea y organiza proyectos completos.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <i className="fas fa-layer-group"></i>
                        <h3>Épicas</h3>
                        <p>Divide tus proyectos en épicas manejables.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <i className="fas fa-tasks"></i>
                        <h3>Historias</h3>
                        <p>Gestiona historias para un seguimiento detallado.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <i className="fas fa-check-circle"></i>
                        <h3>Tareas</h3>
                        <p>Asigna tareas a cada historia para mayor control.</p>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2>¿Listo para empezar?</h2>
                <p>Crea tu primer proyecto en cuestión de minutos.</p>

                <Link className={styles['link']} to={'/signup'}>
                    <button className={styles.signupButton}>Comienza ahora</button>
                </Link>
            </section>

            <footer className={styles.footer}>
                <p>© 2025 Task Tracker App - Todos los derechos reservados</p>
            </footer>
        </PublicLayout>
    );
};