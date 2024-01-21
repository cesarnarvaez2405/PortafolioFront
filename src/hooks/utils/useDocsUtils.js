import documentosS3 from "../../services/documentosS3";

export const useDocsUtils = () => {
  const enviarImagen = async (imagen) => {
    const archivo = new FormData();
    archivo.append("file", imagen);
    return await documentosS3.enviarImagen(archivo);
  };

  return { enviarImagen };
};
