import axios from "axios";
import url from "./urlApi";
import baseApi from "./baseApi";

const token = localStorage.getItem("accessToken") ?? '';

export const getProgramList = (query) => baseApi(token, query, '/cobrand/programFilter');
// axios({
//     method: 'post',
//     url: url + '/cobrand/programFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const getContentList = (query) => baseApi(token, query, '/cobrand/contentFilter');
// axios({
//     method: 'post',
//     url: url + '/cobrand/contentFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getContentCommentList = (query) => baseApi(token, query, '/cobrand/commentContentFilter');
// axios({
//     method: 'post',
//     url: url + '/cobrand/commentContentFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getUserList = (query) => baseApi(token, query, '/user/userFilter');
// axios({
//     method: 'post',
//     url: url + '/user/userFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getRedzoneList = (query) => baseApi(token, query, '/cobrand/redZoneFilter');
// axios({
//     method: 'post',
//     url: url + '/cobrand/redZoneFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getAppUsageList = (query) => baseApi(token, query, '/user/appUsageFilter');
// axios({
//     method: 'post',
//     url: url + '/user/appUsageFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getDeviceScheduleList = (query) => baseApi(token, query, '/user/deviceUsageScheduleFilter');
// axios({
//     method: 'post',
//     url: url + '/user/deviceUsageScheduleFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getAppLimitList = (query) => baseApi(token, query, '/user/appUsageLimitFilter');
// axios({
//     method: 'post',
//     url: url + '/user/appUsageLimitFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getModeAsuhList = (query) => baseApi(token, query, '/user/childModeAsuhFilter');
// axios({
//     method: 'post',
//     url: url + '/user/childModeAsuhFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getAppDetailList = (query) => baseApi(token, query, '/user/appIconFilter');
// axios({
//     method: 'post',
//     url: url + '/user/appIconFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getNotificationList = (query) => baseApi(token, query, '/user/broadcastFilter');
// axios({
//     method: 'post',
//     url: url + '/user/broadcastFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getNotificationCategoryList = (query) => baseApi(token, query, '/cms/notificationCategoryFilter');
// axios({
//     method: 'post',
//     url: url + '/cms/notificationCategoryFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getAudienceList = (query) => baseApi(token, query, '/cms/audianceTargetFilter');
// axios({
//     method: 'post',
//     url: url + '/cms/audianceTargetFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getContentTopicList = (query) => baseApi(token, query, '/cms/contentTopicFilter');
// axios({
//     method: 'post',
//     url: url + '/cms/contentTopicFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getContentResponseList = (query) => baseApi(token, query, '/user/userContentResponFilter');
// axios({
//     method: 'post',
//     url: url + '/user/userContentResponFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getContentViewList = (query) => baseApi(token, query, '/user/userContentViewFilter');
// axios({
//     method: 'post',
//     url: url + '/user/userContentViewFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getProgramCategoryList = (query) => baseApi(token, query, '/cms/programCategoryFilter');
// axios({
//     method: 'post',
//     url: url + '/cms/programCategoryFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getProgramResponseList = (query) => baseApi(token, query, '/user/userProgramContentResponFilter');
// axios({
//     method: 'post',
//     url: url + '/user/userProgramContentResponFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

export const getAdminList = (query) => baseApi(token, query, '/cms/userFilter');
// axios({
//     method: 'post',
//     url: url + '/cms/userFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getCommunityList = (query) => baseApi(token, query, '/cobrand/cobrandComunityFilter');
// axios({
//     method: 'post',
//     url: url + '/cobrand/cobrandComunityFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getCommunityMemberList = (query) => baseApi(token, query, '/cobrand/cobrandComunityMemberFilter');
// axios({
//     method: 'post',
//     url: url + '/cobrand/cobrandComunityMemberFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getSchoolList = (query) => baseApi(token, query, '/cobrand/rekapDataSekolahFilter');
// axios({
//     method: 'post',
//     url: url + '/cobrand/rekapDataSekolahFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getSchoolGroupList = (query) => baseApi(token, query, '/cobrand/cobrandGroupMitraAsuhFilter');
// axios({
//     method: 'post',
//     url: url + '/cobrand/cobrandGroupMitraAsuhFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getPraytimeMessageList = (query) => baseApi(token, query, '/cobrand/prayAlertMessageFilter');
// axios({
//     method: 'post',
//     url: url + '/cobrand/prayAlertMessageFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getUserInstalledApps = (query) => baseApi(token, query, '/user/appDeviceFilter');
// axios({
//     method: 'post',
//     url: url + '/user/appDeviceFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

export const getAlwaysOnApps = (query) => baseApi(token, query, '/user/appAlwaysOnBySekolahFilter');
// axios({
//     method: 'post',
//     url: url + '/user/appAlwaysOnBySekolahFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

export const getAppActivityLog = (query) => baseApi(token, query, '/user/logVisitPageFilter');

export const getCMSActivityLog = (query) => baseApi(token, query, '/cms/logCMSFilter');

export const getHKBPList = (query) => baseApi(token, query, '/cobrand/HKBPDataFilter');
// axios({
//     method: 'post',
//     url: url + '/cobrand/HKBPDataFilter',
//     data: query,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });