import axios from 'axios';

// Создаем экземпляр axios с базовыми настройками
const apiClient = axios.create({
  // Замените на URL вашего ASP.NET Core API или используйте переменные окружения
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});


apiClient.interceptors.request.use(
  (config) => {
    // Здесь можно достать токен из localStorage/Zustand/Redux
    const token = localStorage.getItem('jwt_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


apiClient.interceptors.response.use(
  (response) => {

    return response;
  },
  (error) => {
  
    if (error.response) {
      if (error.response.status === 401) {
        console.error('...');
        
      }
      if (error.response.status === 404) {
        console.error(' (404).');
      }
    } else if (error.request) {
      console.error('Backend need to be fixed');
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;