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

export const getDeviceScheduleList = (query) => axios({
    method: 'post',
    url: url + '/user/deviceUsageScheduleFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getAppLimitList = (query) => axios({
    method: 'post',
    url: url + '/user/appUsageLimitFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getModeAsuhList = (query) => axios({
    method: 'post',
    url: url + '/user/childModeAsuhFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getAppDetailList = (query) => axios({
    method: 'post',
    url: url + '/user/appIconFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getNotificationList = (query) => axios({
    method: 'post',
    url: url + '/user/broadcastFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const getHKBPList = (query) => axios({
    method: 'post',
    url: url + '/cobrand/HKBPDataFilter',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    }
});