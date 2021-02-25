import axios from 'axios';

//Availability base url
const instance = axios.create({
    baseURL: `http://localhost:4000/api`
});

export default instance;