import axios from 'axios';

// Skapa en Axios-instans med standardkonfiguration
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Exempel API-funktioner
export const exampleService = {
  getAll: () => api.get('/examples'),
  getById: (id) => api.get(`/examples/${id}`),
  create: (data) => api.post('/examples', data),
  update: (id, data) => api.put(`/examples/${id}`, data),
  delete: (id) => api.delete(`/examples/${id}`)
};

export default api;