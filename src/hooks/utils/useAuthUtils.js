import { useDispatch, useSelector } from "react-redux";
import { checking, onLogin, onLogout } from "../../store/auth/Autenticacion";
import usuarios from "../../services/usuarios";

export const useAuthUtils = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const checkAuthToken = async () => {
    dispatch(checking());
    const token = localStorage.getItem("token");
    if (!token) {
      return dispatch(onLogout("No estas logeado"));
    }

    try {
      const usuarioLogin = await usuarios.usuario();
      dispatch(
        onLogin({
          email: usuarioLogin.email,
          rol: usuarioLogin.rol_id,
        })
      );
    } catch (error) {
      dispatch(onLogout("Tiempo expirado"));
    }
  };

  return {
    status,
    checkAuthToken,
  };
};
