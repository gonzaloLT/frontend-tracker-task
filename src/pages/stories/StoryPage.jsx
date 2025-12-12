import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5';

import { LayoutDefault } from "../../layout/LayoutDefault";
import { getStory } from "../../api/stories"; 

import { LoadingMessage } from "../../components/ui/LoadingMessage";
import { ErrorMessage } from "../../components/ui/ErrorMessage";
import { StoryInfo } from "../../components/stories/StoryInfo";
import { StoryTasks } from "../../components/stories/StoryTasks";

import styles from './styles/story.module.css';

export const StoryPage = () => {
    const { storyId, epicId, projectId } = useParams();
    const navigate = useNavigate();

    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const res = await getStory(storyId); 
                setStory(res.data.story); 
            } catch (err) {
                const backendMessage = err.response?.data?.message;
                setError(backendMessage || "No se pudo cargar la historia.");
            } finally {
                setLoading(false);
            }
        };

        if (storyId) {
            fetchStory();
        }
    }, [storyId]);

    if (loading) {
        return (
            <LayoutDefault>
                <LoadingMessage message="Cargando historia..." />
            </LayoutDefault>
        );
    }

    if (error || !story) {
        return (
            <LayoutDefault>
                <ErrorMessage message={error || "La historia no existe"} />
            </LayoutDefault>
        );
    }

    const handleBack = () => {
        if (projectId && epicId) {
            navigate(`/my-projects/${projectId}/${epicId}`);
        } else {
            navigate('/my-stories');
        }
    };

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <button className={styles.backButton} onClick={handleBack}>
                    <IoArrowBack /> Volver
                </button>
                
                <h1 className={styles.pageTitle}>Detalles de la historia</h1>
                
                <div className={styles.storyContainer}>
                    <StoryInfo story={story} />
                    
                    <StoryTasks storyId={storyId} />
                </div>
            </div>
        </LayoutDefault>
    );
};