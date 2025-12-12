import React from 'react'
import { TaskItem } from './TaskItem';
import styles from './styles/taskList.module.css'

export const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div className={styles.taskListContainer}>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
}