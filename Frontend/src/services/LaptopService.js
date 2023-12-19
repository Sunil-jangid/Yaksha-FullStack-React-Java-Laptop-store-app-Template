import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8081';
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const LaptopService = {
    getAllLaptops: async () => {
        // write your logic here
        return null;
    },

    getLaptopById: async (id) => {
        // write your logic here
        return null;
    },

    createLaptop: async (laptop) => {
        // write your logic here
        return null;
    },

    updateLaptop: async (id, laptop) => {
        // write your logic here
        return null;
    },

    deleteLaptop: async (id) => {
        // write your logic here
        return null;
    },

    searchLaptopsByName: async (name) => {
        // write your logic here
        return null;
    },

    searchLaptopsByPrice: async (price) => {
        // write your logic here
        return null;
    },

    searchLaptopsByBrand: async (brand) => {
        // write your logic here
        return null;
    },
};

export default LaptopService;
