import axios from "axios";
import url from "./urlApi";

export const cobrandLogin = (query) => axios({
    method: 'post',
    url: url + '/cms/cmsLogin',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const cobrandRegister = (query) => axios({
    method: 'post',
    url: url + '/cobrand/register',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const cobrandEdit = (whereValues, newValues) => axios({
    method: 'post',
    url: url + '/cobrand/edit',
    data: {whereValues, newValues},
    headers: {
        'Content-Type': 'application/json',
    },
});