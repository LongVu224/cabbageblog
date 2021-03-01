import axios from 'axios';

//Availability base url
const instance = axios.create({
    baseURL: `https://still-hollows-50555.herokuapp.com/`
});

export default instance;