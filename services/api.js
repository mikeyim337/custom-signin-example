import Axios from "axios";

let urls = {
    test: `http://localhost:3334`,
    development: 'http://localhost:8080/v1',
    production: 'https://random.org/v1',
}
const api = Axios.create({
    baseURL: urls[process.env.NODE_ENV],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        
    },
    
});

export default api;
