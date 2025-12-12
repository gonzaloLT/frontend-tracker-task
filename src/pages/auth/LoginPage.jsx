import { Navigate, useNavigate } from 'react-router-dom';
import { PublicLayout } from '../../Layout/PublicLayout'
import { LoginForm } from '../../components/auth/LoginForm';
import { useAuth } from '../auth/AuthProvider';

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