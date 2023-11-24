import axios from "axios";
import API from "../api/apiNode";

let response = [];

export default {
  async login(body) {
    console.log(body);
    response = await axios.post(`${API.node}portafolio/v1/auth/login`, body);
  },
};
