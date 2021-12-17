import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_MOVIE_DB_API_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        // or whatever you want, in key/value pair
    }
})


export default request