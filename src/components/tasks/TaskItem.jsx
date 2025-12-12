import { useState } from 'react';

import { FaTrash } from 'react-icons/fa'; 
import { TaskDetails } from './TaskDetails';
import styles from './styles/taskItem.module.css';

export const TaskItem = ({ task, onDelete, onUpdate }) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        onDelete(task._id);
    };

    return (
        <li className={styles.taskItem}>
            <div className={styles.header}>
                <span
                    className={`${styles.taskName} ${showDescription ? 'active' : ''}`}
                    onClick={() => setShowDescription(!showDescription)}
                >
                    {task.name}
                </span>
                
                <div className={styles.actions}>
                    <button onClick={handleDeleteClick} className={styles.taskButton}>
                        <FaTrash />
                    </button>
                </div>
            </div>

            {showDescription && (
                <TaskDetails task={task} onUpdate={() => onUpdate(task)} />
            )}
        </li>
    );
};