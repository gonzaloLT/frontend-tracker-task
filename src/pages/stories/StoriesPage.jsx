import { useEffect, useState } from "react";
import { LayoutDefault } from "../../layout/LayoutDefault";
import { getStories } from "../../api/stories"; 
import { StoriesList } from "../../components/stories/StoriesList";
import { LoadingMessage } from "../../components/ui/LoadingMessage";
import { ErrorMessage } from "../../components/ui/ErrorMessage";

import styles from './styles/storiesPage.module.css';

export const StoriesPage = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const res = await getStories();
                setStories(res.data.stories || []);
                
            } catch (err) {
                console.error(err);
                const backendMessage = err.response?.data?.message;
                setError(backendMessage || "No se pudieron cargar tus historias.");
            } finally {
                setLoading(false);
            }
        };

        fetchStories();
    }, []);

    if (loading) {
        return (
            <LayoutDefault>
                <LoadingMessage message="Cargando tus historias..." />
            </LayoutDefault>
        );
    }

    if (error) {
        return (
            <LayoutDefault>
                <ErrorMessage message={error} />
            </LayoutDefault>
        );
    }

    return (
        <LayoutDefault>
            <div className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Mis Historias (Todas)</h1>

                <StoriesList stories={stories} />
            </div>
        </LayoutDefault>
    );
};