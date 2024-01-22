import axios from "axios";
import API from "../api/apiNode";
import Swal from "sweetalert2";

const configApi = {
  headers: {
    Authorization: "",
  },
};

axios.interceptors.request.use((request) => {
  if (request.headers.Authorization == "") {
    request.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return request;
});

let response = [];

/**
 * Modulo para realizar las peticiones http API
 * @module export - Functions
 */

export default {
  async addSkills(body) {
    try {
      response = await axios.post(
        `${API.node}portafolio/v1/skills`,
        body,
        configApi
      );
      return Swal.fire(response.data.mensaje);
    } catch (error) {
      errorConfig(error);
    }
  },
};

async function errorConfig(error) {
  if (error.response.data.code == 0) {
    const result = await Swal.fire(error.response.data.mensaje);
    if (result.isConfirmed) {
      throw "error";
    }
  }
  Swal.fire(error.response.data.mensaje);
  throw "error";
}
