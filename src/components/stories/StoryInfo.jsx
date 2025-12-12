import styles from './styles/storyInfo.module.css';

export const StoryInfo = ({ story }) => (
    <div className={styles.card}>
        <div className={styles.header}>
            <h2 className={styles.title}>{story.name}</h2>
            <span className={styles.statusBadge}>{story.status}</span>
        </div>
        
        <div className={styles.description}>
            <span className={styles.label}>Descripción:</span>
            <p>{story.description || 'Sin descripción'}</p>
        </div>
    </div>
);