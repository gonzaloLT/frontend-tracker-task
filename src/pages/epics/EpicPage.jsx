import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5';

import { LayoutDefault } from "../../layouts/LayoutDefault";
import { getEpic, getStoriesByEpic } from "../../api/epics"; 

import { EpicInfo } from "../../components/epics/EpicInfo";
import { StoriesList } from "../../components/stories/StoriesList";
import { LoadingMessage } from "../../components/ui/LoadingMessage";
import { ErrorMessage } from "../../components/ui/ErrorMessage";

import styles from './styles/epic.module.css';

export const EpicPage = () => {
    const { epicId, projectId } = useParams();
    const navigate = useNavigate();

    const [epic, setEpic] = useState(null);
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [epicRes, storiesRes] = await Promise.all([
                    getEpic(epicId),
                    getStoriesByEpic(epicId)
                ]);

                setEpic(epicRes.data.epic);

                setStories(storiesRes.data.stories || []); 

            } catch (err) {
                console.error(err);

                const backendMessage = err.response?.data?.message;
                setError(backendMessage || "No se pudo cargar la información de la épica.");
            } finally {
                setLoading(false);
            }
        };

        if (epicId) {
            loadData();
        }
    }, [epicId]);

    if (loading) {
        return (
            <LayoutDefault>
                <LoadingMessage message="Cargando detalles de épica..." />
            </LayoutDefault>
        );
    }

    if (error || !epic) {
        return (
            <LayoutDefault>
                <ErrorMessage message={error || "La épica no existe"} />
            </LayoutDefault>
        );
    }

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <button 
                    className={styles.backButton} 
                    onClick={() => navigate(`/my-projects/${projectId}`)}
                >
                    <IoArrowBack /> Volver
                </button>
                
                <h1 className={styles.pageTitle}>Detalles de épica</h1>
                
                <div className={styles.epicContainer}>
                    <EpicInfo epic={epic} />

                    <StoriesList 
                        stories={stories} 
                        epicId={epicId} 
                        projectId={projectId} 
                    />
                </div>
            </div>
        </LayoutDefault>
    );
};