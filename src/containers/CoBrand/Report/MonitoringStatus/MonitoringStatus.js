import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/Table';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './MonitoringStatus.scss';
import { getUserList, getAppUsageList } from '../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const MonitoringStatus = () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [usageData, setUsageData] = useState();
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);

    const options = {
        filterType: "dropdown",
        selectableRows: false,
        responsive: "scroll",
    };

    useEffect(() => {
        let params={
            whereKeyValues: {
                packageId: "com.byasia.ruangortu"
            },
            orderKeyValues: {
                nameUser: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        };
        console.log(params);
        getUserList(params)
        .then(response => {
            console.log(response.data);
            // setUserData(response.data.users);
            var userDataDummy = response.data.users;
            var userDataChild = [];
            for(var i = 0; i < userDataDummy.length; i++) {
                let user = userDataDummy[i];
                if(user.userType === 'child') {
                    console.log("Anjay");
                    for(var j = 0; j < userDataDummy.length; j++) {
                        let user2 = userDataDummy[j];
                        if(user.parentEmail === user2.emailUser){
                            user['parentName'] = user2.nameUser;
                            break;
                        }
                    }
                    userDataChild.push(user);
                }
            }
            let userLength = userDataChild.length;
            let startDate = dateRange[0];
            let endDate = dateRange[1];

            
            let params2 = {
                whereKeyValues: {
                    appUsageDate: {
                        "$gte": startDate.toISOString().split('T')[0],
                        "$lte": endDate.toISOString().split('T')[0],
                    }
                },
                limit: Number.MAX_SAFE_INTEGER
            }
            getAppUsageList(params2)
            .then(response2 => {
                console.log(response2.data);
                for(var i = 0; i < userLength; i++) {

                    var totalUsage = Array(userLength).fill(0),
                    socialUsage = Array(userLength).fill(0),
                    gamesUsage = Array(userLength).fill(0),
                    videoUsage = Array(userLength).fill(0);

                    let userEmail = userDataChild[i].emailUser;
                    console.log("Email user: " + userEmail);
                    let appUsages = response2.data.appUsages
                    for(var j = 0; j < appUsages.length; j++) {
                        let x = appUsages[j];
                        if(x.emailUser === userEmail) {

                            console.log("Yes Masuk! " + userEmail);
                            let y = x.appUsages;
                            for(var k = 0; k < y.length; k++) {
                                totalUsage[i] += y[k].duration;
                                if(y[k].appCategory === 'social') socialUsage[i] += y[k].duration;
                                if(y[k].appCategory === 'game') gamesUsage[i] += y[k].duration;
                                if(y[k].appCategory === 'video') videoUsage[i] += y[k].duration;
                            }
                        }
                    }
                    userDataChild[i]['screenTime'] = (totalUsage[i] / 3600000).toFixed(2);
                    userDataChild[i]['screenTimeSocialMedia'] = (socialUsage[i] / 3600000).toFixed(2);
                    userDataChild[i]['screenTimeGames'] = (gamesUsage[i] / 3600000).toFixed(2);
                    userDataChild[i]['screenTimeVideo'] = (videoUsage[i] / 3600000).toFixed(2);
                }
                setUserData(userDataChild);
                setLoading(false);
            })
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }, []);

    if(isLoading) {
        return <RKLoader />;
    }
    return (
        <div className="Monitoring">
            <Heading
                headingName="Monitoring Status"
                routes={[
                    { name: 'Report', path: '/report/monitoring-status' },
                    { name: 'Monitoring Status' }
                ]}
            />
            {/* <div className="Pengguna_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userData}
                />
            </div> */}
            <MUIDataTable
                data={userData}
                columns={columns}
                options={options}
            />
        </div>
    )
}

export default MonitoringStatus;
