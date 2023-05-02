import axios from "axios";
import url from "./urlApi";
import baseApi from "./baseApi";

const token = localStorage.getItem("accessToken") ?? '';

export const programAdd = (query) => baseApi(token, query, '/cobrand/programAdd');
// axios({
//     method: 'post',
//     url: url + '/cobrand/programAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const programAddv2 = (query) => baseApi(token, query, '/cobrand/v2-programAdd');
// axios({
//     method: 'post',
//     url: url + '/cobrand/v2-programAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });


export const programEdit = (query) => baseApi(token, query, '/cobrand/programUpdate');
// axios({
//     method: 'post',
//     url: url + '/cobrand/programUpdate',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

export const programDelete = (query) => baseApi(token, query, '/cobrand/programRemove');
// axios({
//     method: 'post',
//     url: url + '/cobrand/programRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const contentAdd = (query) => baseApi(token, query, '/cobrand/contentAdd');
// axios({
//     method: 'post',
//     url: url + '/cobrand/contentAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const contentAddAsync = async (query) => await baseApi(token, query, '/cobrand/contentAdd');
// axios({
//     method: 'post',
//     url: url + '/cobrand/contentAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const contentEdit = (query) => baseApi(token, query, '/cobrand/contentUpdate');
// axios({
//     method: 'post',
//     url: url + '/cobrand/contentUpdate',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const contentDelete = (query) => baseApi(token, query, '/cobrand/contentRemove');
// axios({
//     method: 'post',
//     url: url + '/cobrand/contentRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const contentCommentUpdate = (query) => baseApi(token, query, '/cobrand/commentContentUpdate');
// axios({
//     method: 'post',
//     url: url + '/cobrand/commentContentUpdate',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const notificationAdd = (query) => baseApi(token, query, '/user/broadcastAdd');
// axios({
//     method: 'post',
//     url: url + '/user/broadcastAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const audienceAdd = (query) => baseApi(token, query, '/cms/audianceTargetAdd');
// axios({
//     method: 'post',
//     url: url + '/cms/audianceTargetAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const notifCategoryAdd = (query) => baseApi(token, query, '/cms/notificationCategoryAdd');
// axios({
//     method: 'post',
//     url: url + '/cms/notificationCategoryAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const programCategoryAdd = (query) => baseApi(token, query, '/cms/programCategoryAdd');
// axios({
//     method: 'post',
//     url: url + '/cms/programCategoryAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const contentTopicAdd = (query) => baseApi(token, query, '/cms/contentTopicAdd');
// axios({
//     method: 'post',
//     url: url + '/cms/contentTopicAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const adminAdd = (query) => baseApi(token, query, '/cms/userAdd');
// axios({
//     method: 'post',
//     url: url + '/cms/userAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const adminEdit = (query) => baseApi(token, query, '/cms/userUpdate');
// axios({
//     method: 'post',
//     url: url + '/cms/userUpdate',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const adminDelete = (query) => baseApi(token, query, '/cms/userRemove');
// axios({
//     method: 'post',
//     url: url + '/cms/userRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const communityAdd = (query) => baseApi(token, query, '/cobrand/cobrandComunityAdd');
// axios({
//     method: 'post',
//     url: url + '/cobrand/cobrandComunityAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const communityDelete = (query) => baseApi(token, query, '/cobrand/cobrandComunityRemove');
// axios({
//     method: 'post',
//     url: url + '/cobrand/cobrandComunityRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const communityMemberAddAsync = async (query) => await baseApi(token, query, '/cobrand/cobrandComunityMemberAdd');
// axios({
//     method: 'post',
//     url: url + '/cobrand/cobrandComunityMemberAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const communityMemberDelete = (query) => baseApi(token, query, '/cobrand/cobrandComunityMemberRemove');
// axios({
//     method: 'post',
//     url: url + '/cobrand/cobrandComunityMemberRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const schoolGroupAdd = (query) => baseApi(token, query, '/cobrand/cobrandGroupMitraAsuhAdd');
// axios({
//     method: 'post',
//     url: url + '/cobrand/cobrandGroupMitraAsuhAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const schoolGroupEdit = (query) => baseApi(token, query, '/cobrand/cobrandGroupMitraAsuhUpdate');
// axios({
//     method: 'post',
//     url: url + '/cobrand/cobrandGroupMitraAsuhUpdate',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const schoolGroupDelete = (query) => baseApi(token, query, '/cobrand/cobrandGroupMitraAsuhRemove');
// axios({
//     method: 'post',
//     url: url + '/cobrand/cobrandGroupMitraAsuhRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const screenTimeAdd = (query) => baseApi(token, query, '/cobrand/configurationAdd');
// axios({
//     method: 'post',
//     url: url + '/cobrand/configurationAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const praytimeMessageAdd = (query) => baseApi(token, query, '/cobrand/prayAlertMessageAdd');
// axios({
//     method: 'post',
//     url: url + '/cobrand/prayAlertMessageAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const praytimeMessageEdit = (query) => baseApi(token, query, '/cobrand/prayAlertMessageUpdate');
// axios({
//     method: 'post',
//     url: url + '/cobrand/prayAlertMessageUpdate',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const praytimeMessageDelete = (query) => baseApi(token, query, '/cobrand/prayAlertMessageRemove');
// axios({
//     method: 'post',
//     url: url + '/cobrand/prayAlertMessageRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const appUserEdit = (query) => baseApi(token, query, '/user/edit');
// axios({
//     method: 'post',
//     url: url + '/user/edit',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const appBlockLimitAdd = (query) => baseApi(token, query, '/user/appUsageLimitAdd');
// axios({
//     method: 'post',
//     url: url + '/user/appUsageLimitAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const appBlockLimitEdit = (query) => baseApi(token, query, '/user/appUsageLimitUpdate');
// axios({
//     method: 'post',
//     url: url + '/user/appUsageLimitUpdate',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const appBlockLimitDelete = (query) => baseApi(token, query, '/user/appUsageLimitAdd');
// axios({
//     method: 'post',
//     url: url + '/user/appUsageLimitRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const modeAsuhAdd = (query) => baseApi(token, query, '/user/childModeAsuhAdd');
// axios({
//     method: 'post',
//     url: url + '/user/childModeAsuhAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const modeAsuhEdit = (query) => baseApi(token, query, '/user/childModeAsuhUpdate');
// axios({
//     method: 'post',
//     url: url + '/user/childModeAsuhUpdate',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const modeAsuhDelete = (query) => baseApi(token, query, '/user/childModeAsuhRemove');
// axios({
//     method: 'post',
//     url: url + '/user/childModeAsuhRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const deviceScheduleAdd = (query) => baseApi(token, query, '/user/deviceUsageScheduleAdd');
// axios({
//     method: 'post',
//     url: url + '/user/deviceUsageScheduleAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const deviceScheduleEdit = (query) => baseApi(token, query, '/user/deviceUsageScheduleUpdate');
// axios({
//     method: 'post',
//     url: url + '/user/deviceUsageScheduleUpdate',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const deviceScheduleDelete = (query) => baseApi(token, query, '/user/deviceUsageScheduleRemove');
// axios({
//     method: 'post',
//     url: url + '/user/deviceUsageScheduleRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const alwaysOnAppsAdd = (query) => baseApi(token, query, '/user/appAlwaysOnBySekolahAdd');
// axios({
//     method: 'post',
//     url: url + '/user/appAlwaysOnBySekolahAdd',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

// export const alwaysOnAppsEdit = (query) => axios({
//     method: 'post',
//     url: url + '/user/appAlwaysOnBySekolahUpdate',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const alwaysOnAppsDelete = (query) => baseApi(token, query, '/user/appAlwaysOnBySekolahRemove');
// axios({
//     method: 'post',
//     url: url + '/user/appAlwaysOnBySekolahRemove',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
