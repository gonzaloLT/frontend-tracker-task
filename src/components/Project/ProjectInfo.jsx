import styles from './styles/projectInfo.module.css';

export const ProjectInfo = ({ project }) => (
    <div className={styles.details}>
        <h2>{project.title} {project.icon && <span>{project.icon}</span>}</h2>
        <p><b>Descripción:</b> {project.description || "Sin descripción"}</p>
    </div>
);