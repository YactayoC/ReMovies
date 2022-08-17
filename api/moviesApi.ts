import axios from 'axios';

const moviesAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default moviesAPI;