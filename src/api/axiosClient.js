import axios from "axios";
import queryString from 'query-string';

import configApi from "./configApi";

const axiosClient = axios.create({
    baseURL: configApi.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: configApi.apiKey})
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    
    }
        return response;
    }, (error) => {
        throw error;
    });

export default axiosClient;