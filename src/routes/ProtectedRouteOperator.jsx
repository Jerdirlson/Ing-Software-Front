import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const ProtectedRouteOperator = () => {
    const { user, loading } = useAuth();

    useEffect(() => {
        if (user && user.idRol !== undefined) {
            // Aquí puedes realizar cualquier acción una vez que tengas acceso a user.idRol
            console.log('User role:', user.idRol);
        }
    }, [user]); // Solo observamos cambios en user

    if (loading) {
        // Muestra un indicador de carga mientras se obtiene la información del usuario
        return <div>Cargando...</div>;
    }

    // Verifica si el usuario no está autenticado o si no tiene el rol adecuado
    if (!user || user.idRol !== 2) {
        return <Navigate to={'/login'} replace />;
    }

    // Si el usuario está autenticado y tiene el rol adecuado, muestra el contenido protegido
    return <Outlet />;
};

export default ProtectedRouteOperator;
