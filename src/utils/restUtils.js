import axios from 'axios';

const axiosDefaults = {
    timeout: 20000,
    headers: {
    	'Accept' : 'application/json',
    	'Content-Type' : 'application/json'
       // Default headers can be added here.
    }
};

export default axios.create(axiosDefaults);
