import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const request = async (method, url, data) => {
    // -- Initialization --
    const config = {};

    // -- Strapi Query --
    const strapiQuery = qs.stringify(data.strapi);

    if (strapiQuery) {
        url += `?${strapiQuery}`;
    }

    // -- Authorization --
    const token = localStorage.getItem('token');

    if (token) {
        config.headers = { Authorization: `Bearer ${token}` };
    } else {
        config.headers = {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
        };
    }

    // -- Post / Get Method --
    let response;

    if (data.data) {
        try {
            response = await axios[method](url, data.data, config);
        } catch (error) {
            response = error.response;
        }
    } else {
        try {
            response = await axios[method](url, config);
        } catch (error) {
            response = error.response;
        }
    }

    return response?.data || {};
};

export default request;
