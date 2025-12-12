import { useEffect, useState } from 'react';
import { getProjects, createProject } from '../../api/projects';
import { ProjectCard } from '../../components/project/ProjectCard';
import { LayoutDefault } from '../../layout/LayoutDefault';
import { LoadingMessage } from '../../components/ui/LoadingMessage';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import { FormProject } from '../../components/project/FormProject';
import { Modal } from '../../components/ui/Modal';
import styles from './styles/projects.module.css';

export const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Estados para el modal
    const [isCreating, setIsCreating] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleCreateProject = async (data) => {
        setIsSubmitting(true);
        try {
            const res = await createProject(data);
            setProjects([...projects, res.data.project]);
            setIsCreating(false);
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Error al crear proyecto");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <div className={styles.header}>
                    <h1 className={styles.pageTitle}>Mis proyectos</h1>

                    <button 
                        className={styles.createButton}
                        onClick={() => setIsCreating(true)}
                    >
                        + Nuevo Proyecto
                    </button>
                </div>
                
                <div className={styles.projectsList}>
                    {projects && projects.length > 0 ? (
                        projects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))
                    ) : (
                        <p className={styles.noProjectsMessage}>No hay proyectos aún.</p>
                    )}
                </div>

                <Modal
                    title="Crear Proyecto"
                    isOpen={isCreating}
                    closeModal={() => setIsCreating(false)}
                >
                    <FormProject 
                        onProjectCreated={handleCreateProject}
                        isSubmitting={isSubmitting}
                    />
                </Modal>
            </div>
        </LayoutDefault>
    );
};