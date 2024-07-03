import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const request = async (method, url, options) => {
    // -- Initialization --
    const config = {};

    const data = options?.data || null;
    const strapi = options?.strapi;

    // -- Strapi Query --
    if (strapi) {
        const strapiQuery = qs.stringify(strapi);

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

    // -- Fetch Process --
    let response;

    if (['get', 'delete'].includes(method)) {
        try {
            response = await axios[method](url, config);
        } catch (error) {
            response = error.response;
        }
    } else {
        try {
            response = await axios[method](url, data, config);
        } catch (error) {
            response = error.response;
        }
    }

    return response?.data || {};
};

export default request;
