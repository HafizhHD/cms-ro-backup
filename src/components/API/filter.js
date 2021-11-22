import axios from "axios";

export const getProgramList = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/programFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getContentList = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUserList = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/user/userFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getHKBPList = (query) => axios({
    method: 'post',
    url: 'https://rk.defghi.biz.id:8080/api/cobrand/HKBPDataFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});