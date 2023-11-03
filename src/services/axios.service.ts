import axios from "axios";

import {accessToken, baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(request => {
    const access = accessToken;
    if (access) {
        request.headers.Authorization = `Bearer ${access}`;
    }
    return request;
})

export {
    axiosService
}