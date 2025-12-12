import { Link } from "react-router-dom";
import styles from "./styles/storyCard.module.css";

export const StoryCard = ({ story, projectId, epicId }) => {
    const linkTo = (projectId && epicId)
        ? `/my-projects/${projectId}/${epicId}/${story._id}`
        : `/my-stories/${story._id}`;

    return (
        <Link to={linkTo} className={styles.link}>
            <div className={styles.storyCard}>
                <p className={styles.name}><b>Nombre:</b> {story.name}</p>
                <p className={styles.description}>
                    <b>Descripción:</b> {story.description}
                </p>
            </div>
        </Link>
    );
};