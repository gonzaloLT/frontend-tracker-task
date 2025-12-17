import { useState, useEffect } from "react";
import {
    createTask,
    deleteTask,
    updateTask,
} from "../../api/tasks";
import { getTasksByStory } from "../../api/stories";
import { TaskList } from "../tasks/TaskList";
import { Modal } from "../ui/Modal";
import { FormTask } from "../tasks/FormTask";
import { EditTask } from "../tasks/EditTask";

import styles from "./styles/storyTasks.module.css";

export const StoryTasks = ({ storyId }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Estados para modales y carga
    const [isCreatingTask, setIsCreatingTask] = useState(false);
    const [isUpdatingModal, setIsUpdatingModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchTasks = async () => {
        try {
            const res = await getTasksByStory(storyId);

            setTasks(res.data.tasks || []);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (storyId) fetchTasks();
    }, [storyId]);

    const handleCreateTaskClick = () => setIsCreatingTask(true);

    const handleCloseModal = () => {
        if (!isSubmitting) {
            setIsCreatingTask(false);
            setIsUpdatingModal(false);
            setTaskToUpdate(null);
        }
    };

    const handleCreatedTask = async (taskData) => {
        setIsSubmitting(true);
        try {
            await createTask({ ...taskData, story: storyId });
            await fetchTasks();
            handleCloseModal();
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Error al crear tarea");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteTask = async (taskId) => {
        if (!window.confirm("¿Seguro que deseas eliminar esta tarea?")) return;

        try {
            await deleteTask(taskId);
            setTasks((prev) => prev.filter((t) => t._id !== taskId));
        } catch (error) {
            console.error(error);
            alert("No se pudo eliminar la tarea");
        }
    };

    const handleUpdateTaskClick = (task) => {
        setTaskToUpdate(task);
        setIsUpdatingModal(true);
    };

    const handleUpdatedTask = async (updatedData) => {
        setIsSubmitting(true);
        try {
            await updateTask(taskToUpdate._id, updatedData);
            await fetchTasks();
            handleCloseModal();
        } catch (error) {
            console.error(error);
            alert("Error al actualizar tarea");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.tasksContainer}>
            <div className={styles.taskHeader}>
                <h3 className={styles.title}>Tareas de la historia</h3>
                <button
                    className={styles.addTaskButton}
                    onClick={handleCreateTaskClick}
                    disabled={isCreatingTask}
                >
                    {isCreatingTask ? "..." : "Agregar tarea"}
                </button>
            </div>

            {loading ? (
                <p className={styles.loadingMessage}>Cargando tareas...</p>
            ) : tasks && tasks.length > 0 ? (
                <TaskList
                    tasks={tasks}
                    onDelete={handleDeleteTask}
                    onUpdate={handleUpdateTaskClick}
                />
            ) : (
                <p className={styles.noTasks}>No hay tareas en esta historia</p>
            )}

            <Modal
                title={"Crear Tarea"}
                isOpen={isCreatingTask}
                closeModal={handleCloseModal}
            >
                <FormTask
                    onTaskCreated={handleCreatedTask}
                    isSubmitting={isSubmitting}
                />
            </Modal>

            <Modal
                title={"Actualizar Tarea"}
                isOpen={isUpdatingModal}
                closeModal={handleCloseModal}
            >
                <EditTask
                    task={taskToUpdate}
                    onTaskUpdated={handleUpdatedTask}
                    isSubmitting={isSubmitting}
                />
            </Modal>
        </div>
    );
};
