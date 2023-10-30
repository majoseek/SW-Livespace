import axios from 'axios';

export const extractIdFromUrl = (url: string) => {
    const match = url.match(/\/(\d+)(?:\/|$)/);
    return match ? parseInt(match[1], 10) : 0;
};

export const fetchData = async <T>(url: string): Promise<T> => {
    const response = await axios.get(url);
    return response.data;
};
