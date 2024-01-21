import { useDocsUtils } from "../../../hooks/utils/useDocsUtils";
import perfilService from "../../../services/perfil";

const { enviarImagen } = useDocsUtils();
export const usePerfil = () => {
  const guardarPerfil = async (datos) => {
    const { titulo, descripcion, imagenPerfil, skill } = datos;

    const informacionImagen = await enviarImagen(imagenPerfil[0]);
    const perfil = {
      titulo,
      descripcion,
      foto: informacionImagen.ETag,
    };
    await perfilService.addPerfil(perfil);
  };

  return {
    guardarPerfil,
  };
};
