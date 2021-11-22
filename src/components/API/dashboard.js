import axios from "axios";

export const programAdd = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/programAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const programEdit = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/programUpdate',
    data: query,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const programDelete = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/programRemove',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const contentAdd = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const contentEdit = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const contentDelete = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentRemove',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});