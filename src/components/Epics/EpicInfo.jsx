import styles from './styles/epicInfo.module.css';

export const EpicInfo = ({ epic }) => (
    <div className={styles.epicDetails}>
        <h2>
            {epic.name} {epic.icon && <span>{epic.icon}</span>}
        </h2>
        <p>
            <b>Descripción:</b> {epic.description || "Sin descripción"}
        </p>
    </div>
);