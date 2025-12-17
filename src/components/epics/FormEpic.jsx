import { useForm } from "react-hook-form";
import styles from "../tasks/styles/form.module.css";

export const FormEpic = ({ onEpicCreated, isSubmitting }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const epicData = {
            ...data,
            icon: data.icon ? data.icon : undefined,
        }

        onEpicCreated(epicData);
        reset();
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre de la Épica</label>
                    <input
                        className={styles.input}
                        type="text"
                        {...register("name", {
                            required: "El nombre es obligatorio",
                        })}
                    />
                    {errors.name && (
                        <p className={styles.errorMessage}>
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Descripción</label>
                    <textarea
                        className={styles.input}
                        {...register("description")}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Icono</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="⚡"
                        {...register("icon")}
                    />
                </div>

                <button
                    className={styles.submitButton}
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Creando..." : "Crear Épica"}
                </button>
            </form>
        </div>
    );
};
