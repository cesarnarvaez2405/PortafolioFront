import axios from "axios";
import API from "../api/apiNode";

axios.interceptors.request.use(request => {
  if(request.headers.authorization == '' ) {
    request.headers.authorization = localStorage.getItem('token')
  }
  return request
})

let response = [];

/**
 * Modulo para realizar las peticiones http API
 * @module export - Functions
 */

export default {
  async login(body) {
    try {
      response = await axios.post(`${API.node}portafolio/v1/auth/login`, body,)
      return response.data

    } catch (error) {
      console.error(error);
    }
  },
};
