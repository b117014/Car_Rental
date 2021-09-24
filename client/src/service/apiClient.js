import axios from "axios";

let apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
});
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken");
  console.log('token',token)
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export { apiClient };
