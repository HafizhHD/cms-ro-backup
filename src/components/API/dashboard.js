import axios from "axios";
import url from "./urlApi"

export const programAdd = (query) => axios({
    method: 'post',
    url: url + '/cobrand/programAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const programEdit = (query) => axios({
    method: 'post',
    url: url + '/cobrand/programUpdate',
    data: query,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const programDelete = (query) => axios({
    method: 'post',
    url: url + '/cobrand/programRemove',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const contentAdd = (query) => axios({
    method: 'post',
    url: url + '/cobrand/contentAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const contentEdit = (query) => axios({
    method: 'post',
    url: url + '/cobrand/contentUpdate',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const contentDelete = (query) => axios({
    method: 'post',
    url: url + '/cobrand/contentRemove',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const notificationAdd = (query) => axios({
    method: 'post',
    url: url + '/user/broadcastAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const audienceAdd = (query) => axios({
    method: 'post',
    url: url + '/cms/audianceTargetAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const notifCategoryAdd = (query) => axios({
    method: 'post',
    url: url + '/cms/notificationCategoryAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const programCategoryAdd = (query) => axios({
    method: 'post',
    url: url + '/cms/programCategoryAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const adminAdd = (query) => axios({
    method: 'post',
    url: url + '/cms/userAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});
