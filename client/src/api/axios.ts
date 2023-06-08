import axios from 'axios';

const SERVER_HOSTNAME = 'localhost';
const SERVER_PORT = 3000;

const baseURL = `http://${SERVER_HOSTNAME}:${SERVER_PORT}`;
export const axiosInstance = axios.create({ baseURL: baseURL });

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		return Promise.reject(error);
	}
);
