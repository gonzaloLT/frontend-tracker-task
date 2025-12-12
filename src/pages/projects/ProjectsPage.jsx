import { useEffect, useState } from 'react';
import { getProjects } from '../../api/projects';
import { ProjectCard } from '../../components/project/ProjectCard';
import { LayoutDefault } from '../../layout/LayoutDefault';
import { LoadingMessage } from '../../components/ui/LoadingMessage';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import styles from './styles/projects.module.css';

export const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await getProjects();
                setProjects(res.data.projects); 
            } catch (err) {
                console.error("Error cargando proyectos:", err);

                const backendMessage = err.response?.data?.message;
                setError(backendMessage || "No se pudieron cargar tus proyectos.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <LayoutDefault>
                <LoadingMessage message="Cargando proyectos..." />
            </LayoutDefault>
        );
    }

    if (error) {
        return (
            <LayoutDefault>
                <ErrorMessage message={error || "No se pudo cargar la información de los proyectos"} />
            </LayoutDefault>
        );
    }

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Mis proyectos</h1>
                
                <div className={styles.projectsList}>
                    {projects && projects.length > 0 ? (
                        projects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))
                    ) : (
                        <p className={styles.noProjectsMessage}>No hay proyectos aún.</p>
                    )}
                </div>
            </div>
        </LayoutDefault>
    );
};