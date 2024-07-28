import axios from "axios";


const DataService = axios.create({
    baseURL : 'http://localhost:4200',
    timeout : 5000,
});

export default DataService;
