import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import RKLoaderSpinner from '../../../../components/UI/RKLoaderSpinner/RKLoader.js';
import './AppActivityLog.scss';
import { getUserList, getAppActivityLog, getSchoolGroupList } from '../../../../components/API/filter.js'
// import dummyData from './DummyData.json';
import {emailTester, absStart} from '../../GlobalParam'
import MUIDataTable from "mui-datatables";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AppActivityLog = () => {
    const [isLoading, setLoading] = useState(true);
    const [isLoadingSpinner, setLoadingSpinner] = useState(false);
    const [userData, setUserData] = useState();
    const [userDataRaw, setUserDataRaw] = useState([]);
    const [usageData, setUsageData] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isSubmit, setSubmit] = useState(false);
    const [period, setPeriod] = useState('real');
    const cobrandComId = JSON.parse(localStorage.getItem('userData')).cobrandComunityId ?? ''
    const groupMitraAsuhId = JSON.parse(localStorage.getItem('userData')).groupMitraAsuhId ?? ''
    const schoolId = JSON.parse(localStorage.getItem('userData')).sekolah ?? ''
    
    const oneDay = 24 * 60 * 60 * 1000; 

    const options = {
        filterType: "dropdown",
        selectableRows: false,
        responsive: "scroll",
    };

    useEffect(() => {
        if(period === 'dummy') {
            setUserData([]);
            setLoading(false);
        }
        else {let gma = groupMitraAsuhId === '' ? '00000000' : groupMitraAsuhId; 
        let prm = {
            whereKeyValues: {
                groupMitraAsuhId: gma
            }
        }
        getSchoolGroupList(prm)
        .then(rsp => {
            let schoolList = rsp.data.Data[0] ? rsp.data.Data[0].memberSekolah : [];
            let params = 
            schoolId !== '' ? {
                whereKeyValues: {
                    packageId: "com.byasia.ruangortu",
                    "childInfo.schoolName": schoolId,
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
            } :
            groupMitraAsuhId !== '' ? {
                whereKeyValues: {
                    packageId: "com.byasia.ruangortu",
                    "childInfo.schoolName": {
                        "$in": schoolList
                    },
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
            } : 
            cobrandComId !== '' ? {
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
            setUserDataRaw(userDataDummy);
            let userLength = userDataDummy.length;
            let ed = new Date();
            ed.setDate(endDate.getDate()+1);

            
            let params2 = {
                whereKeyValues: {
                    dateCreate: {
                        "$gte": startDate.toISOString().split('T')[0],
                        "$lte": ed.toISOString().split('T')[0],
                    }
                },
                limit: Number.MAX_SAFE_INTEGER
            }
            getAppActivityLog(params2)
            .then(response2 => {
                console.log(response2.data);
                let appAct = response2.data.resultData;
                for(var i = 0; i < userLength; i++) {
                    var appCounter = 0;
                    for(var j = 0; j < appAct.length; j++) {
                        if(userDataDummy[i].emailUser === appAct[j].emailUser) {
                            appCounter++;
                        }
                    }
                    userDataDummy[i]["appOpened"] = appCounter;
                }
                userDataDummy.sort((a, b) => b.appOpened - a.appOpened)
                setUserData(userDataDummy);
                setLoading(false);
            })
        })
        .catch(error => {
            // console.log(error);
            setLoading(false);
        })}
        )}
    }, [,period]);

    useEffect(() => {
        setLoadingSpinner(true);
        var userDataDummy = userDataRaw;
        let userLength = userDataDummy.length;
        const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay));
        let ed = new Date();
        ed.setDate(endDate.getDate()+1);

        let params2 = {
            whereKeyValues: {
                dateCreate: {
                    "$gte": startDate.toISOString().split('T')[0],
                    "$lte": ed.toISOString().split('T')[0],
                }
            },
            orderKeyValues: {
                dateCreate: -1
            },
            limit: Number.MAX_SAFE_INTEGER
        }
        getAppActivityLog(params2)
        .then(response2 => {
            console.log(response2.data);
            let appAct = response2.data.resultData;
            for(var i = 0; i < userLength; i++) {
                var appCounter = 0;
                for(var j = 0; j < appAct.length; j++) {
                    if(userDataDummy[i].emailUser === appAct[j].emailUser) {
                        appCounter++;
                    }
                }
                userDataDummy[i]["appOpened"] = appCounter;
            }
            userDataDummy.sort((a, b) => b.appOpened - a.appOpened)
            setUserData(userDataDummy);
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
        <div className="AppLog">
            <Heading
                headingName="Log Aktivitas Aplikasi"
                routes={[
                    { name: 'Report', path: '/report/app-activity-log' },
                    { name: 'Log Aktivitas Aplikasi' }
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
            <div className="AppLog_datePicker">
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
            <div className="AppLog_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userData}
                    showCheckbox={false}
                    notifContext={"Status Pemakaian Aplikasi"}
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

export default AppActivityLog;
