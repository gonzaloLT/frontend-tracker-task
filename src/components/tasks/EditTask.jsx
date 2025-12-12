import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styles from './styles/form.module.css'

export const EditTask = ({ onTaskUpdated, isSubmitting, task }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    useEffect(() => {
        if (task) {
            setValue('name', task.name);
            setValue('description', task.description);
            setValue('done', task.done);
        }
    }, [task, setValue]);

    const onSubmit = (data) => {
        onTaskUpdated(data);
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre: </label>
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
                    <label className={styles.labelCheckbox}>
                        <input
                            type="checkbox"
                            {...register('done')}
                        />
                        Tarea completada
                    </label>
                </div>
                
                <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Guardando...' : 'Actualizar'}
                </button>
            </form>
        </div>
    )
}