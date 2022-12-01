import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import RKLoaderSpinner from '../../../../components/UI/RKLoaderSpinner/RKLoader.js';
import './MonitoringStatus.scss';
import { getUserList, getAppUsageList } from '../../../../components/API/filter.js'
import dummyData from './DummyData.json';
import {emailTester, absStart} from '../../GlobalParam'
import MUIDataTable from "mui-datatables";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const MonitoringStatus = () => {
    const [isLoading, setLoading] = useState(true);
    const [isLoadingSpinner, setLoadingSpinner] = useState(false);
    const [userData, setUserData] = useState();
    const [userDataRaw, setUserDataRaw] = useState([]);
    const [usageData, setUsageData] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isSubmit, setSubmit] = useState(false);
    const [period, setPeriod] = useState('real');
    const cobrandComId = JSON.parse(localStorage.getItem('userData')).cobrandComunityId
    
    const oneDay = 24 * 60 * 60 * 1000; 

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
        else {let params= cobrandComId !== '' ? {
            whereKeyValues: {
                packageId: "com.byasia.ruangortu",
                cobrandComunityId: cobrandComId,
                dateCreated: {
                    "$gte": absStart.toISOString().split("T")[0]
                },
                // emailUser: {
                //     "$nin": emailTester
                // }
            },
            orderKeyValues: {
                nameUser: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        } : {
            whereKeyValues: {
                packageId: "com.byasia.ruangortu",
                dateCreated: {
                    "$gte": absStart.toISOString().split("T")[0]
                },
                // emailUser: {
                //     "$nin": emailTester
                // }
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
            // setUserData(response.data.users);
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
            setUserDataRaw(userDataChild);
            let userLength = userDataChild.length;

            
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
                // console.log(response2.data);
                for(var i = 0; i < userLength; i++) {

                    var totalUsage = Array(userLength).fill(0),
                    socialUsage = Array(userLength).fill(0),
                    gamesUsage = Array(userLength).fill(0),
                    videoUsage = Array(userLength).fill(0);

                    let userEmail = userDataChild[i].emailUser;
                    // console.log("Email user: " + userEmail);
                    let appUsages = response2.data.appUsages
                    for(var j = 0; j < appUsages.length; j++) {
                        let x = appUsages[j];
                        if(x.emailUser === userEmail) {

                            // console.log("Yes Masuk! " + userEmail);
                            let y = x.appUsages;
                            for(var k = 0; k < y.length; k++) {
                                totalUsage[i] += y[k].duration;
                                if(y[k].appCategory === 'social') socialUsage[i] += y[k].duration;
                                if(y[k].appCategory === 'game') gamesUsage[i] += y[k].duration;
                                if(y[k].appCategory === 'video') videoUsage[i] += y[k].duration;
                            }
                        }
                    }
                    userDataChild[i]['screenTime'] = (totalUsage[i] / 3600000).toFixed(1);
                    userDataChild[i]['screenTimeSocialMedia'] = (socialUsage[i] / 3600000).toFixed(1);
                    userDataChild[i]['screenTimeGames'] = (gamesUsage[i] / 3600000).toFixed(1);
                    userDataChild[i]['screenTimeVideo'] = (videoUsage[i] / 3600000).toFixed(1);

                    // console.log(userDataChild[i]['screenTime']);

                    //10 adalah batas penggunaan yang ditentukan cobrand
                    if(userDataChild[i]['screenTime'] > 10) userDataChild[i]['screenTimeStatus'] = "Tidak Wajar";
                    else userDataChild[i]['screenTimeStatus'] = "Wajar";
                }
                setUserData(userDataChild);
                setLoading(false);
            })
        })
        .catch(error => {
            // console.log(error);
            setLoading(false);
        })}
    }, [,period]);

    useEffect(() => {
        setLoadingSpinner(true);
        var userDataChild = userDataRaw;
        let userLength = userDataChild.length;
        const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay));

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
            // console.log(response2.data);
            for(var i = 0; i < userLength; i++) {

                var totalUsage = Array(userLength).fill(0),
                socialUsage = Array(userLength).fill(0),
                gamesUsage = Array(userLength).fill(0),
                videoUsage = Array(userLength).fill(0);

                let userEmail = userDataChild[i].emailUser;
                // console.log("Email user: " + userEmail);
                let appUsages = response2.data.appUsages
                for(var j = 0; j < appUsages.length; j++) {
                    let x = appUsages[j];
                    if(x.emailUser === userEmail) {

                        // console.log("Yes Masuk! " + userEmail);
                        let y = x.appUsages;
                        for(var k = 0; k < y.length; k++) {
                            totalUsage[i] += y[k].duration;
                            if(y[k].appCategory === 'social') socialUsage[i] += y[k].duration;
                            if(y[k].appCategory === 'game') gamesUsage[i] += y[k].duration;
                            if(y[k].appCategory === 'video') videoUsage[i] += y[k].duration;
                        }
                    }
                }
                userDataChild[i]['screenTime'] = (totalUsage[i] / 3600000 / (diffDays + 1)).toFixed(1);
                userDataChild[i]['screenTimeSocialMedia'] = (socialUsage[i] / 3600000 / (diffDays + 1)).toFixed(1);
                userDataChild[i]['screenTimeGames'] = (gamesUsage[i] / 3600000 / (diffDays + 1)).toFixed(1);
                userDataChild[i]['screenTimeVideo'] = (videoUsage[i] / 3600000 / (diffDays + 1)).toFixed(1);
            }
            setUserData(userDataChild);
            setSubmit(false);
            setLoadingSpinner(false);
            setLoading(true);
            setLoading(false);
        })
    }, [isSubmit])

    if(isLoading) {
        return <RKLoader />;
    }
    return (
        <>
        {isLoadingSpinner ? <RKLoaderSpinner/> : null}
        <div className="Monitoring">
            <Heading
                headingName="Monitoring Activity"
                routes={[
                    { name: 'Report', path: '/report/monitoring-status' },
                    { name: 'Monitoring Activity' }
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
            <div className="Monitoring_datePicker">
                <div>
                    <p>Start Date</p>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        maxDate={endDate}
                    />
                </div>
                <div>
                    <p>End Date</p>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </div>
                <div>
                    <br/>
                    <button onClick={() => {
                        setSubmit(true);
                    }}>Submit</button>
                </div>
            </div>
            <div className="Monitoring_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userData}
                    showCheckbox={true}
                    notifContext={"Status Pemakaian"}
                />
            </div>
            {/* <MUIDataTable
                data={userData}
                columns={columns}
                options={options}
            /> */}
        </div>
        </>
    )
}

export default MonitoringStatus;
