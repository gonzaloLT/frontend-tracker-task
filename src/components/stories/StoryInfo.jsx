import styles from "./styles/storyInfo.module.css";

export const StoryInfo = ({ story }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h2 className={styles.title}>{story.name}</h2>
                <span className={styles.statusBadge}>{story.status}</span>
            </div>

            <div className={styles.body}>
                <span className={styles.label}>Descripción:</span>
                <p className={styles.description}>
                    {story.description || "Sin descripción"}
                </p>
            </div>

            <div className={styles.footer}>
                <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>Creado:</span>
                    <span className={styles.dateValue}>
                        {new Date(story.createdAt).toLocaleDateString()}
                    </span>
                </div>

                <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>Actualizado:</span>
                    <span className={styles.dateValue}>
                        {new Date(story.updatedAt).toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
};
