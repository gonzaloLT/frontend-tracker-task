import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LoadingMessage } from '../ui/LoadingMessage';

export const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return <LoadingMessage message="Validando credenciales..." />;

    return isAuthenticated ? <Outlet /> : <Navigate to={'/'} replace />;
};