import { Navigate } from 'react-router-dom';
import { PublicLayout } from '../../layout/PublicLayout'
import { LoginForm } from '../../components/auth/LoginForm';
import { useAuth } from '../../context/AuthContext';

export const LoginPage = () => {
    const auth = useAuth()

    if (auth.isAuthenticated) {
        return <Navigate to={'/'} />
    }
    return (
        <PublicLayout>
            <LoginForm />
        </PublicLayout>
    )
}