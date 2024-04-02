import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { roles } from "../utils/roles";

const ProtectedRouteOperator = () => {
    const { userLogin, loading } = useAuth();
    // const pepe = userLogin
    console.log(userLogin)
    // console.log(pepe)
    // console.log(userLogin.user.nameUser);
    useEffect(() => {
        // console.log(user.user.id)
        if (userLogin && userLogin.user.idRol !== undefined) {
            // Aquí puedes realizar cualquier acción una vez que tengas acceso a user.idRol
            console.log('User role:', userLogin.user.idRol);
        }
    }, [userLogin]); // Solo observamos cambios en user

    if (loading) {
        // Muestra un indicador de carga mientras se obtiene la información del usuario
        return <div>Cargando...</div>;
    }

    // Verifica si el usuario no está autenticado o si no tiene el rol adecuado
    if (!userLogin || userLogin.user.idRol !== roles.OPERATOR) {
        return <Navigate to={'/login'} replace />;
    }
    console.log('sksksk')
    // useNavigate('/management')
    // Si el usuario está autenticado y tiene el rol adecuado, muestra el contenido protegido
    return <Outlet />;
};

export default ProtectedRouteOperator;
