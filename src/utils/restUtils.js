import axios from 'axios';

const axiosDefaults = {
    timeout: 20000,
    headers: {
    	'Accept' : 'application/json',
    	'Content-Type' : 'application/json'
       // Default headers can be added here.
    },
    baseURL: 'http://localhost:8090'
};

export default axios.create(axiosDefaults);
