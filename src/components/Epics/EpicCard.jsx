import { Link } from "react-router-dom";
import styles from "./styles/epicCard.module.css";

export const EpicCard = ({ epic }) => {
    return (
        <Link
            to={`/my-projects/${epic.project}/${epic._id}`}
            className={styles.epicLink}
        >
            <div className={styles.epicCard}>
                <p className={styles.nameEpica}>
                    <b>Nombre de épica:</b> {epic.name}
                </p>
                {epic.description && (
                    <p className={styles.descriptionEpica}>
                        <b>Descripción:</b> {epic.description}
                    </p>
                )}
                {epic.icon && (
                    <p className={styles.iconEpica}>
                        <b>Icono:</b> {epic.icon}
                    </p>
                )}
            </div>
        </Link>
    );
};
