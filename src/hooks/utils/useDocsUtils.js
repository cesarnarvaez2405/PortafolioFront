import documentosS3 from "../../services/documentosS3";

export const useDocsUtils = () => {
  const enviarImagen = async (imagen) => {
    const archivo = new FormData();
    archivo.append("file", imagen);
    console.log(archivo);
    const response = await documentosS3.enviarImagen(archivo);
    console.log(response);
  };

  return { enviarImagen };
};
