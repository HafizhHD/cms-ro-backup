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

export const contentAddAsync = async (query) => await axios({
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

export const communityAdd = (query) => axios({
    method: 'post',
    url: url + '/cobrand/cobrandComunityAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const communityDelete = (query) => axios({
    method: 'post',
    url: url + '/cobrand/cobrandComunityRemove',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const communityMemberAddAsync = async (query) => await axios({
    method: 'post',
    url: url + '/cobrand/cobrandComunityMemberAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const communityMemberDelete = (query) => axios({
    method: 'post',
    url: url + '/cobrand/cobrandComunityMemberRemove',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const schoolGroupAdd = (query) => axios({
    method: 'post',
    url: url + '/cobrand/cobrandGroupMitraAsuhAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const schoolGroupDelete = (query) => axios({
    method: 'post',
    url: url + '/cobrand/cobrandGroupMitraAsuhRemove',
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

export const praytimeMessageAdd = (query) => axios({
    method: 'post',
    url: url + '/cobrand/prayAlertMessageAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const praytimeMessageEdit = (query) => axios({
    method: 'post',
    url: url + '/cobrand/prayAlertMessageUpdate',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const praytimeMessageDelete = (query) => axios({
    method: 'post',
    url: url + '/cobrand/prayAlertMessageRemove',
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

export const appBlockLimitAdd = (query) => axios({
    method: 'post',
    url: url + '/user/appUsageLimitAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const appBlockLimitEdit = (query) => axios({
    method: 'post',
    url: url + '/user/appUsageLimitUpdate',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const appBlockLimitDelete = (query) => axios({
    method: 'post',
    url: url + '/user/appUsageLimitRemove',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const modeAsuhAdd = (query) => axios({
    method: 'post',
    url: url + '/user/childModeAsuhAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const modeAsuhEdit = (query) => axios({
    method: 'post',
    url: url + '/user/childModeAsuhUpdate',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const modeAsuhDelete = (query) => axios({
    method: 'post',
    url: url + '/user/childModeAsuhRemove',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const deviceScheduleAdd = (query) => axios({
    method: 'post',
    url: url + '/user/deviceUsageScheduleAdd',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const deviceScheduleEdit = (query) => axios({
    method: 'post',
    url: url + '/user/deviceUsageScheduleUpdate',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const deviceScheduleDelete = (query) => axios({
    method: 'post',
    url: url + '/user/deviceUsageScheduleRemove',
    data: query,
    headers: {
        'Content-Type': 'application/json',
    },
})