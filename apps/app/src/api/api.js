import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_BASE_URL);

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
    headers: { Authorization: API_KEY}
});

export const fetchDatasets = async () => {
    try {
        const response = await instance.get('/dataset');

        return response.data;
    } catch (error) {
        console.error('Error fetching datasets: ', error);

        throw error;
    }
};