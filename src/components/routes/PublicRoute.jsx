import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LoadingMessage } from "../ui/LoadingMessage";

export const PublicRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return <LoadingMessage message="Verificando sesión..." />;

    if (isAuthenticated) {
        return <Navigate to={"/home"} replace />;
    }

    return children ? children : <Outlet />;
};
