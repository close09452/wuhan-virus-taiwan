import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://wuhan-virus-taiwan.firebaseio.com'
})

export default instance;