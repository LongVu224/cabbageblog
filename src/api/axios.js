import axios from 'axios';

//Availability base url
const instance = axios.create({
    baseURL: `http://localhost:4000/`
    //heroku: https://still-hollows-50555.herokuapp.com/
    //local: http://localhost:4000/
});

export default instance;