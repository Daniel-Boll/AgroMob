import axios from "axios";
import { BASE_URL } from "../utils/utils";

const api = axios.create({
  baseURL: `http://${BASE_URL}:3333`,
});

export default api;
