import styles from "./styles/taskDetails.module.css";

export const TaskDetails = ({ task, onUpdate }) => (
    <div className={styles.taskDetails}>
        <div className={styles.detailRow}>
            <b>Descripción:</b> {task.description || "Sin descripción"}
        </div>

        <div className={styles.detailRow}>
            <b>Estado:</b> {task.done ? "Completada" : "Pendiente"}
        </div>

        <div className={styles.detailRow}>
            <b>Creada el:</b>{" "}
            {task.createdAt
                ? new Date(task.createdAt).toLocaleDateString()
                : "-"}
        </div>

        <button className={styles.editButton} onClick={onUpdate}>
            Editar Tarea
        </button>
    </div>
);