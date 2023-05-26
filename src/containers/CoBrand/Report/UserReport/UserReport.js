import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from './../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from './../../../../components/UI/RKLoaderInner/RKLoader.js';
import './UserReport.scss';
import { getUserList, getSchoolGroupList } from './../../../../components/API/filter.js'
import dummyData from './DummyData.json';
import {emailTester, absStart} from '../../GlobalParam'
import MUIDataTable from "mui-datatables";

const UserReport = () => {
    const [isLoading, setLoading] = useState(true);
    const [userDataUsed, setUserDataUsed] = useState('0');
    const [userData, setUserData] = useState();
    const [userChildInv, setUserChildInv] = useState();
    const [userParentChildless, setUserParentChildless] = useState();
    const [period, setPeriod] = useState('real');
    const cobrandComId = JSON.parse(localStorage.getItem('userData')).cobrandComunityId ?? ''
    const groupMitraAsuhId = JSON.parse(localStorage.getItem('userData')).groupMitraAsuhId ?? ''
    const schoolId = JSON.parse(localStorage.getItem('userData')).sekolah ?? ''

    const options = {
        filterType: "dropdown",
        selectableRows: true,
        responsive: "scroll",
    };
    const today = new Date();

    useEffect(() => {
        if(period === 'dummy') {
            var dumDat = dummyData;
            for(var i = 0; i < dumDat.length; i++) {
                var user = dumDat[i];
                if(user.startSub !== undefined) user['startSubscription'] = new Date(Date.parse(user.startSub));
                if(user.endSub !== undefined) user['endSubscription'] = new Date(Date.parse(user.endSub));
            }
            // console.log(dumDat);
            setUserData(dumDat);
            setLoading(false);
        }
        else {
            let gma = groupMitraAsuhId === '' ? '00000000' : groupMitraAsuhId; 
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
                console.log(response.data.users);
                // setUserData(response.data.users);
                var ud = response.data.users;
                var uci = [];
                var upc = [];
                for(var i = 0; i < ud.length; i++) {
                    let user = ud[i];
                    if(user.userType === 'child') {
                        // if(user.startSub !== undefined) user['startSubscription'] = new Date(user.startSub);
                        // if(user.endSub !== undefined) user['endSubscription'] = new Date(user.endSub);
                        if(user.subscriptions.length > 0) {
                            if(user.subscriptions[0].dateStart !== undefined) user['startSubscription'] = new Date(user.subscriptions[0].dateStart);
                            if(user.subscriptions[0].dateEnd !== undefined) user['endSubscription'] = new Date(user.subscriptions[0].dateEnd);
                            if(user.endSubscription < today) user['subscriptionStatus'] = 'Unsubscribed'
                            else {
                                user['subscriptionStatus'] = 'Subscribed'
                                user['subscriptionPlan'] = user.subscriptions[0].subscriptionPackageId;
                            }
                        }
                        else user['subscriptionStatus'] = 'Not Subscribed'
                        // console.log("Anjay");
                        var parentNames = [];
                        var parentEmails = [user.parentEmail, ...user.otherParentEmail];
                        for(var j = 0; j < ud.length; j++) {
                            let user2 = ud[j];
                            if(user.parentEmail === user2.emailUser){
                                parentNames.push(user2.nameUser);
                            }
                            else if(user.otherParentEmail.includes(user2.emailUser)) {
                                parentNames.push(user2.nameUser);
                            }
                        }
                        user['parentName'] = parentNames;
                        user['parentEmail'] = parentEmails;
                        // user['childrenName'] = [];
                        // user['childrenEmail'] = [];
                        // console.log(user.parentEmail);
                    }
                    // else {
                    //     var childNames = [];
                    //     var childEmails = [];
                    //     for(var j = 0; j < ud.length; j++) {
                    //         let user2 = ud[j];
                    //         if(user2.userType === 'child') {
                    //             if(user2.parentEmail === user.emailUser){
                    //                 childNames.push(user2.nameUser);
                    //                 childEmails.push(user2.emailUser);
                    //             }
                    //             else if(user2.otherParentEmail.includes(user.emailUser)) {
                    //                 childNames.push(user2.nameUser);
                    //                 childEmails.push(user2.emailUser);
                    //             }
                    //         }
                    //     }
                    //     // user['parentName'] = [];
                    //     // user['parentEmail'] = [];
                    //     user['childrenName'] = childNames;
                    //     user['childrenEmail'] = childEmails;
                    // }
                    // user['registerDate'] = new Date(user.dateCreated);
                }
                for(var i = 0; i < ud.length; i++) {
                    let user = ud[i];
                    user['registerDate'] = new Date(user.dateCreated);
                    if(user.userType === 'parent') {
                        var childNames = [];
                        var childEmails = [];
                        for(var j = 0; j < ud.length; j++) {
                            let user2 = ud[j];
                            if(user2.userType === 'child') {
                                if(user2.parentEmail.includes(user.emailUser)){
                                    childNames.push(user2.nameUser);
                                    childEmails.push(user2.emailUser);
                                }
                                else if(user2.otherParentEmail.includes(user.emailUser)) {
                                    childNames.push(user2.nameUser);
                                    childEmails.push(user2.emailUser);
                                }
                            }
                        }
                        // user['parentName'] = [];
                        // user['parentEmail'] = [];
                        user['childrenName'] = childNames;
                        user['childrenEmail'] = childEmails;
                        if(childEmails.length < 1) upc.push(user);
                    }
                    else {
                        if(user.status === 'invitation') uci.push(user);
                    }
                }
                console.log('uci', uci);
                console.log('upc', upc);
                setUserData(ud);
                setUserChildInv(uci);
                setUserParentChildless(upc);
                setLoading(false);
            })
            .catch(error => {
                // console.log(error);
                setLoading(false);
            })
            })
            }
    }, [, period]);

    if(isLoading) {
        return <RKLoader />;
    }
    return (
        <div className="Pengguna">
            <Heading
                headingName="Report Pengguna"
                routes={[
                    { name: 'Report'},
                    { name: 'Report Pengguna', path: '/report/user'  }
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
            <div className="Pengguna_filter">
                <h3>Tampilkan: </h3>
                <select onChange={(e) => {
                    setLoading(true);
                    console.log(e.target.value)
                    setUserDataUsed(e.target.value)
                    setLoading(false)}}>
                    <option value='0'>Semua</option>
                    <option value='1'>Anak yang Belum Aktivasi</option>
                    <option value='2'>Orang Tua yang Belum Mengundang Anak</option>
                </select>
            </div>
            <div className="Pengguna_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userDataUsed === '0' ? userData : (userDataUsed === '1' ? userChildInv : userParentChildless)}
                    showCheckbox={true}
                    notifContext={"Status Berlanggan"}
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

export default UserReport;
