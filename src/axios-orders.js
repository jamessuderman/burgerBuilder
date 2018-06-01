import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-477e3.firebaseio.com/'
});

export default instance;