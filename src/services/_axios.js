import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers = {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
};

const request = async (method, url, config) => {
    const strapiQuery = qs.stringify(config.strapi);

    if (strapiQuery) {
        url += `?${strapiQuery}`;
    }

    let response;

    try {
        response = await axios[method](url);
    } catch (error) {
        response = error.response;
    }

    return response?.data || {};
};

export default request;
