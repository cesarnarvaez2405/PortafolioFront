import axios from "axios";
import API from "../api/apiNode";

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
  async login(body) {
    try {
      response = await axios.post(`${API.node}portafolio/v1/auth/login`, body);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async usuario() {
    try {
      response = await axios.get(
        `${API.node}portafolio/v1/auth/token`,
        configApi
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
