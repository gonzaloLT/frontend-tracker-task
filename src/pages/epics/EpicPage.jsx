import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5';

import { LayoutDefault } from "../../layout/LayoutDefault";
import { getEpic, getStoriesByEpic } from "../../api/epics"; 
import { createStory } from '../../api/stories';

import { Modal } from '../../components/ui/Modal';
import { FormStory } from '../../components/stories/FormStory';
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

    const [isCreating, setIsCreating] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleCreateStory = async (data) => {
        setIsSubmitting(true);
        try {
            const res = await createStory({ ...data, epic: epicId });
            setStories([...stories, res.data.story]);
            setIsCreating(false);
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Error al crear historia");
        } finally {
            setIsSubmitting(false);
        }
    };

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

                <div className={styles.header}>
                    <h1 className={styles.pageTitle}>Detalles de épica</h1>
                    
                    <button 
                        className={styles.createButton}
                        onClick={() => setIsCreating(true)}
                    >
                        + Nueva Historia
                    </button>
                </div>
                
                <div className={styles.epicContainer}>
                    <EpicInfo epic={epic} />

                    <StoriesList 
                        stories={stories} 
                        epicId={epicId} 
                        projectId={projectId} 
                    />
                </div>

                <Modal
                    title="Nueva Historia"
                    isOpen={isCreating}
                    closeModal={() => setIsCreating(false)}
                >
                    <FormStory 
                        onStoryCreated={handleCreateStory}
                        isSubmitting={isSubmitting}
                    />
                </Modal>
            </div>
        </LayoutDefault>
    );
};