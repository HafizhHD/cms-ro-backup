import axios from "axios";
import url from "./urlApi";

export const getProgramList = (query) => axios({
    method: 'post',
    url: url + '/cobrand/programFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getContentList = (query) => axios({
    method: 'post',
    url: url + '/cobrand/contentFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUserList = (query) => axios({
    method: 'post',
    url: url + '/user/userFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getRedzoneList = (query) => axios({
    method: 'post',
    url: url + '/cobrand/redZoneFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getAppUsageList = (query) => axios({
    method: 'post',
    url: url + '/user/appUsageFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getHKBPList = (query) => axios({
    method: 'post',
    url: url + '/cobrand/HKBPDataFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});