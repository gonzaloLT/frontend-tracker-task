import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './styles/loginForm.module.css'; 

export const LoginForm = () => {
    const { signin, error: loginError } = useAuth();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signin({ username, password });
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Iniciar Sesión</h1>

                {loginError && (
                    <div className={styles.errorMessage}>
                        {loginError}
                    </div>
                )}

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

                <button type='submit' className={styles.button}>
                    Entrar
                </button>
            </form>
        </div>
    );
};