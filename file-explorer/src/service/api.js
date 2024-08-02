import axios from 'axios';

const api = axios.create({
    URL: 'https://localhost:5000/api'
});

export default api;
