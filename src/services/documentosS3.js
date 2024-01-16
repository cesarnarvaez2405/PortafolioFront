import axios from "axios";
import API from "../api/apiNode";

let response = [];

export default {
  async enviarImagen(body) {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      response = await axios.post(
        `${API.documentosS3}S3/v1/docs`,
        body,
        config
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
