import axios from 'axios';

// Backend Instanz
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Login-Backend Instanz
const LoginApi = axios.create({
    baseURL: import.meta.env.VITE_LoginAPI_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export { api, LoginApi };
