import axios from "axios";

export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL as string,
    headers: {
        "X-CoinAPI-Key": process.env.REACT_APP_API_KEY as string,
    },
});
