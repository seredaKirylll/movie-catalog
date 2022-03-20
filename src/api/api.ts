import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/'

let requestConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    params: {
        api_key: 'c991e1fa323ba61216e2bdd67eda45d3',
    },
}

const axiosInstance: AxiosInstance = axios.create(requestConfig)

export default axiosInstance
