import { useDocsUtils } from "../../../hooks/utils/useDocsUtils";
import perfilService from "../../../services/perfil";
import skillsPerfilService from "../../../services/skillPerfil";

const { enviarImagen } = useDocsUtils();
export const usePerfil = () => {
  const guardarPerfil = async (datos) => {
    const skills = [];
    const { titulo, descripcion, imagenPerfil, skill } = datos;

    for (const item of skill) {
      skills.push(item.value);
    }

    const informacionImagen = await enviarImagen(imagenPerfil[0]);
    const perfil = {
      titulo,
      descripcion,
      foto: informacionImagen.ETag,
    };
    const perfilCreado = await perfilService.addPerfil(perfil);

    const skillsPerfil = {
      skillsPerfil: skills,
      perfilId: perfilCreado.RowId,
    };
    await skillsPerfilService.addSkills(skillsPerfil);
  };

  return {
    guardarPerfil,
  };
};
