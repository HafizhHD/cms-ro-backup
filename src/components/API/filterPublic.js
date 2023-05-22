import axios from "axios";
import url from "./urlApi";

export const getUserList = (query) => axios({
    method: 'post',
    url: url + '/user/userFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});