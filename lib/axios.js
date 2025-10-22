import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
  withCredentials: true,
});
export default axiosInstance;
//https://pt.erome.com/a/avFJLWPZ
//https://pt.erome.com/a/kqHmtUn7
