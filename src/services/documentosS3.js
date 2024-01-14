import axios from "axios";
import API from "../api/apiNode";

let response = [];

/**
 * Modulo para realizar las peticiones http API
 * @module export - Functions
 */

export default {
  async enviarImagen(body) {
    try {
      response = await axios.post(`${API.documentosS3}S3/v1/docs`, body);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
