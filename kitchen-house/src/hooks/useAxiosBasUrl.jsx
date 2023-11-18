import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const useAxiosBasUrl = () => {
    return axiosSecure;
};

export default useAxiosBasUrl;
