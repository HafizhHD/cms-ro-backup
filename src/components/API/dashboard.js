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

export const programAddv2 = (query) => axios({
    method: 'post',
    url: url + '/cobrand/v2-programAdd',
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

export const contentTopicAdd = (query) => axios({
    method: 'post',
    url: url + '/cms/contentTopicAdd',
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

export const adminEdit = (query) => axios({
    method: 'post',
    url: url + '/cms/userUpdate',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const adminDelete = (query) => axios({
    method: 'post',
    url: url + '/cms/userRemove',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const screenTimeAdd = (query) => axios({
    method: 'post',
    url: url + '/cobrand/configurationAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const appUserEdit = (query) => axios({
    method: 'post',
    url: url + '/user/edit',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});