import axios from "axios";

const API_LINK = process.env.REACT_APP_API_LINK;

export const axiosPostsInstance = axios.create({ baseURL: `${API_LINK}/posts` });
export const axiosUsersInstance = axios.create({ baseURL: `${API_LINK}/users` });
export const axiosBaseInstance = axios.create({ baseURL: API_LINK })