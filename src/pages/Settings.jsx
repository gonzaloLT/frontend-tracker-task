import { LayoutDefault } from '../layout/LayoutDefault';
import { useAuth } from '../context/AuthContext';

export const Settings = () => {
    const {logout} = useAuth()

    const handleSubmit = (e) =>{
        e.preventDefault()
        logout()
    }
    return (
        <LayoutDefault>
            <div>
                    <p>¿Quieres cerrar sesion?</p>
                    <button type='submit' onClick={handleSubmit}>Cerrar sesion</button>
            </div>
        </LayoutDefault>
    );
};
