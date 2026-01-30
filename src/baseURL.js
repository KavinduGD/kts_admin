import axios from "axios";

const adminAxios = axios.create({
  baseURL: "https://kts-backend.kavindu-gihan.tech",
});

export default adminAxios;
