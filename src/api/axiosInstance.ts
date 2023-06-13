import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_URL || "https://todo-app-frontend.herokuapp.com"


const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
