import axios from 'axios';

//Availability base url
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER
});

export default instance;