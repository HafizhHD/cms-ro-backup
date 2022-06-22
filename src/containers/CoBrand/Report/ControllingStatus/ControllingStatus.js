import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './ControllingStatus.scss';
import dummyData from './DummyData.json'
import { getUserList, getModeAsuhList, getDeviceScheduleList, getAppLimitList, getAppDetailList } from '../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const ControllingStatus = () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [usageData, setUsageData] = useState();
    const [period, setPeriod] = useState('real');

    const options = {
        filterType: "dropdown",
        selectableRows: false,
        responsive: "scroll",
    };

    useEffect(() => {
        if(period === 'dummy') {
            setUserData(dummyData);
            setLoading(false);
        }
        else {let params={
            whereKeyValues: {
                packageId: "com.byasia.ruangortu",
            },
            orderKeyValues: {
                nameUser: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        };
        // console.log(params);
        getUserList(params)
        .then(response => {
            // console.log(response.data);
            var userDataDummy = response.data.users;
            var userDataChild = [];
            for(var i = 0; i < userDataDummy.length; i++) {
                let user = userDataDummy[i];
                if(user.userType === 'child') {
                    // console.log("Anjay");
                    var parentNames = [];
                    var parentEmails = [user.parentEmail, ...user.otherParentEmail];
                    for(var j = 0; j < userDataDummy.length; j++) {
                        let user2 = userDataDummy[j];
                        if(user.parentEmail === user2.emailUser){
                            parentNames.push(user2.nameUser);
                        }
                        else if(user.otherParentEmail.includes(user2.emailUser)) {
                            parentNames.push(user2.nameUser);
                        }
                    }
                    user['parentName'] = parentNames;
                    user['parentEmail'] = parentEmails;
                    userDataChild.push(user);
                }
            }
            let userLength = userDataChild.length;

            let paramsAll = {
                limit: Number.MAX_SAFE_INTEGER
            }

            const promiseAsuh = getModeAsuhList(paramsAll);
            const promiseSchedule = getDeviceScheduleList(paramsAll);
            const promiseLimit = getAppLimitList(paramsAll);
            const promiseAppDetail = getAppDetailList(paramsAll);

            Promise.all([promiseAsuh, promiseSchedule, promiseLimit, promiseAppDetail]).then(responseAll => {
                // console.log(responseAll[0]);
                // console.log(responseAll[1]);
                // console.log(responseAll[2]);
                // console.log(responseAll[3]);

                const asuhList = responseAll[0].data.childModeAsuhs;
                const scheduleList = responseAll[1].data.deviceUsageSchedules;
                const limitList = responseAll[2].data.appUsageLimit;
                const appDetailList = responseAll[3].data.appIcons;

                for(var i = 0; i < userLength; i++) {
                    let user = userDataChild[i];
                    var found = false;
                    for(var j = 0; j < asuhList.length && !found; j++) {
                        if(user.emailUser === asuhList[j].emailUser) {
                            user['modeAsuh'] = "On";
                            found = true;
                        }
                    }
                    if(!found) user['modeAsuh'] = "Off";
                }

                for(var i = 0; i < userLength; i++) {
                    let user = userDataChild[i];
                    var blockedApps = [];
                    var limitedApps = [];
                    for(var j = 0; j < limitList.length; j++) {
                        if(user.emailUser === limitList[j].emailUser) {
                            if(limitList[j].limit > 0) {
                                // console.log('Mantap2');
                                for(var k = 0; k < appDetailList.length; k++) {
                                    if(limitList[j].appId === appDetailList[k].appId) {
                                        // console.log('Mantap2-1');
                                        limitedApps.push(appDetailList[k].appName);
                                        break;
                                    }
                                }
                            }
                            else if(limitList[j].limit === 0) {
                                // console.log('Mantap21');
                                for(var k = 0; k < appDetailList.length; k++) {
                                    if(limitList[j].appId === appDetailList[k].appId){
                                        // console.log('Mantap21-1');
                                        blockedApps.push(appDetailList[k].appName);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if(blockedApps.length > 0) user['blockedApps'] = blockedApps;
                    if(limitedApps.length > 0) user['limitedApps'] = limitedApps;
                    // if(!found) user['usageScheduleStatus'] = "Off";
                }

                for(var i = 0; i < userLength; i++) {
                    let user = userDataChild[i];
                    var lockFound = false, scheduleFound = false;
                    for(var j = 0; j < scheduleList.length && (!lockFound || !scheduleFound); j++) {
                        if(user.emailUser === scheduleList[j].emailUser) {
                            if(scheduleList[j].scheduleType === 'terjadwal') {
                                if(scheduleList[j].deviceUsageEndTime === scheduleList[j].deviceUsageStartTime) {
                                    user['lockScreenStatus'] = 'On';
                                    lockFound = true;
                                }
                                else {
                                    user['usageScheduleStatus'] = "On";
                                    scheduleFound = true;
                                }
                            }
                            else {
                                user['usageScheduleStatus'] = "On";
                                scheduleFound = true;
                            }
                        }
                    }
                    if(!scheduleFound) user['usageScheduleStatus'] = "Off";
                    if(!lockFound) user['lockScreenStatus'] = "Off";
                }
                setUserData(userDataChild);
                setLoading(false);
            })

        })
        .catch(error => {
            // console.log(error);
            setLoading(false);
        })}
    }, [, period]);

    if(isLoading) {
        return <RKLoader />;
    }
    return (
        <div className="Controlling">
            <Heading
                headingName="Controlling Status"
                routes={[
                    { name: 'Report'},
                    { name: 'Controlling Status', path: '/report/controlling-status'  }
                ]}
            />
            <div className="Dashboard_period">
               <button className={period === 'real' ? "Dashboard_period_option-active" : "Dashboard_period_option"}
                   onClick={() => {
                       if(period !== 'real') {
                           setLoading(true);
                           setPeriod('real');
                       }
                   }}>Prod</button>
               <button className={period === 'dummy' ? "Dashboard_period_option-active" : "Dashboard_period_option"}
                   onClick={() => {
                       if(period !== 'dummy') {
                           setLoading(true);
                           setPeriod('dummy');
                       }
                   }}>Dummy</button>
           </div>
            <div className="Controlling_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userData}
                    showCheckbox={true}
                    notifContext={"Status Pembatasan Gadget Anak"}
                />
            </div>
            {/* <MUIDataTable
                data={userData}
                columns={columns}
                options={options}
            /> */}
        </div>
    )
}

export default ControllingStatus;
