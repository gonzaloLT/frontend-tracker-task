import { StoryCard } from './StoryCard';
import styles from './styles/storiesList.module.css';

export const StoriesList = ({ stories, epicId, projectId }) => (
    <div className={styles.storiesContainer}>
        <h2>Historias</h2>
        
        {stories && stories.length > 0 ? (
            <ul>
                {stories.map(story => (
                    <StoryCard 
                        key={story._id} 
                        story={story} 
                        epicId={epicId} 
                        projectId={projectId}
                    />
                ))}
            </ul>
        ) : (
            <p className={styles.noStories}>No hay historias en esta épica.</p>
        )}
    </div>
);