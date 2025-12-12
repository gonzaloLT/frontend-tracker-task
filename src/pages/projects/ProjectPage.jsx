import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { LayoutDefault } from "../../layout/LayoutDefault";
import {getProject, getEpicsByProject} from "../../api/projects";

import { ProjectInfo } from "../../components/project/ProjectInfo";
import { EpicsList } from "../../components/epics/EpicsList";
import { LoadingMessage } from "../../components/ui/LoadingMessage";
import { ErrorMessage } from "../../components/ui/ErrorMessage";

import styles from "./styles/projectDetails.module.css";

export const ProjectPage = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const [epics, setEpics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [projectRes, epicsRes] = await Promise.all([
                    getProject(projectId),
                    getEpicsByProject(projectId),
                ]);

                setProject(projectRes.data.project);

                setEpics(epicsRes.data.epics || []); 

            } catch (err) {
                console.error(err);
                const backendMessage = err.response?.data?.message;
                setError(backendMessage || "No se pudo cargar la información del proyecto.");
            } finally {
                setLoading(false);
            }
        };

        if (projectId) {
            loadData();
        }
    }, [projectId]);

    if (loading) {
        return (
            <LayoutDefault>
                <LoadingMessage message="Cargando datos del proyecto..." />
            </LayoutDefault>
        );
    }

    if (error || !project) {
        return (
            <LayoutDefault>
                <ErrorMessage message={error || "El proyecto no existe"} />
            </LayoutDefault>
        );
    }

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <button
                    className={styles.backButton}
                    onClick={() => navigate("/my-projects")}
                >
                    <IoArrowBack /> Volver
                </button>

                <h1 className={styles.pageTitle}>Detalles del proyecto</h1>

                <div className={styles.container}>
                    <ProjectInfo project={project} />
                    <EpicsList epics={epics} />
                </div>
            </div>
        </LayoutDefault>
    );
};
