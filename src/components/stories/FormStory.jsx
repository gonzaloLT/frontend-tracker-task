import { useForm } from 'react-hook-form';
import styles from '../tasks/styles/form.module.css';

export const FormStory = ({ onStoryCreated, isSubmitting }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        onStoryCreated(data);
        reset();
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre de la Historia</label>
                    <input
                        className={styles.input}
                        type="text"
                        {...register('name', { required: 'El nombre es obligatorio' })}
                    />
                    {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Descripción</label>
                    <textarea
                        className={styles.input}
                        {...register('description')}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Estado Inicial</label>
                    <select className={styles.input} {...register('status')}>
                        <option value="Pendiente">Pendiente</option>
                        <option value="En progreso">En progreso</option>
                        <option value="Completado">Completado</option>
                    </select>
                </div>

                <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Creando...' : 'Crear Historia'}
                </button>
            </form>
        </div>
    );
};