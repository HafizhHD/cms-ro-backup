import axios from "axios";

export const cobrandLogin = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/cobrandLogin',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const cobrandRegister = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/register',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const cobrandEdit = (whereValues, newValues) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/edit',
    data: {whereValues, newValues},
    headers: {
        'Content-Type': 'application/json',
    },
});