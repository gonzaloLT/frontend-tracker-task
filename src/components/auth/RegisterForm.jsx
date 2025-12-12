import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './styles/signupForm.module.css';

export const RegisterForm = () => {
    const { signup, error: registerError } = useAuth();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const values = {
            username,
            password,
            name: { first: firstName, last: lastName }
        };
        await signup(values);
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Registro</h1>

                {registerError && (
                    <div className={styles.errorMessage}>
                        {registerError}
                    </div>
                )}

                <label className={styles.label}>Nombre</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={styles.inputText}
                    required
                />

                <label className={styles.label}>Apellido</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={styles.inputText}
                    required
                />

                <label className={styles.label}>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.inputText}
                    required
                />

                <label className={styles.label}>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputPassword}
                    required
                />

                <button type='submit' className={styles.button}>Registrarse</button>
            </form>
        </div>
    );
}