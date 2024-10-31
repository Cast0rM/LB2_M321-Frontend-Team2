import axios from 'axios';

// Backend instance for general API requests
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // URL de tu API principal
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Login API instance
const LoginApi = axios.create({
    baseURL: import.meta.env.VITE_LoginAPI_URL, // URL de tu API de login
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

// Request interceptor for the main API to add the token
api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for the main API for error handling
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('API Error:', error.response ? error.response.data : error.message);
        return Promise.reject(error);
    }
);

// Exporting named exports for both APIs
export { api, LoginApi };
