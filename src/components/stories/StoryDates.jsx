import styles from './styles/storyDates.module.css';

export const StoryDates = ({ createdAt, updatedAt }) => (
    <div className={styles.card}>
        <h3 className={styles.title}>Fechas</h3>
        
        <div className={styles.dateItem}>
            <span className={styles.dateLabel}>Creado:</span>
            <span className={styles.dateValue}>
                {new Date(createdAt).toLocaleDateString()}
            </span>
        </div>
        
        <div className={styles.dateItem}>
            <span className={styles.dateLabel}>Última actualización:</span>
            <span className={styles.dateValue}>
                {new Date(updatedAt).toLocaleDateString()}
            </span>
        </div>
    </div>
);