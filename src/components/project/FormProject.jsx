import { useForm } from 'react-hook-form';
import styles from '../tasks/styles/form.module.css';

export const FormProject = ({ onProjectCreated, isSubmitting }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        const projectData = {
            ...data,
            icon: data.icon ? data.icon : undefined 
        };

        onProjectCreated(projectData);
        reset();
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Título del Proyecto</label>
                    <input
                        className={styles.input}
                        type="text"
                        {...register('title', { required: 'El título es obligatorio' })}
                    />
                    {errors.title && <p className={styles.errorMessage}>{errors.title.message}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Descripción</label>
                    <textarea
                        className={styles.input}
                        {...register('description')}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Icono (Emoji)</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="📁"
                        {...register('icon')}
                    />
                </div>

                <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Creando...' : 'Crear Proyecto'}
                </button>
            </form>
        </div>
    );
};