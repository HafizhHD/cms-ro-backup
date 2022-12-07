import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './MonitoringContent.scss';
import dummyData from './DummyData.json'
import {emailTester, absStart} from '../../GlobalParam'
import { getUserList, getContentResponseList, getContentList, getSchoolGroupList } from '../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const MonitoringContent = () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [usageData, setUsageData] = useState();
    const [period, setPeriod] = useState('real');
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail ?? '';
    const cobrandComId = JSON.parse(localStorage.getItem('userData')).cobrandComunityId ?? '';
    const groupMitraAsuhId =  JSON.parse(localStorage.getItem('userData')).groupMitraAsuhId ?? '';
    const schoolId =  JSON.parse(localStorage.getItem('userData')).sekolah ?? '';

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
                let params=
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
                console.log(response.data);
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

                let paramsContentRes = {
                    whereKeyValues: {
                        programId: ""
                    },
                    orderKeyValues: {
                        dateCreated: -1
                    },
                    limit: Number.MAX_SAFE_INTEGER
                }

                getContentResponseList(paramsContentRes)
                .then(res2 => {
                    let paramContent = {
                        whereKeyValues: {
                            programId: "",
                            cobrandEmail: cobrandEmail
                        },
                        orderKeyValues: {
                            dateCreated: -1
                        },
                        limit: Number.MAX_SAFE_INTEGER,
                        includeContentData: false
                    }
                    const cont = getContentList(paramContent);
                    Promise.all([cont])
                    .then(res3 => {
                        let x = res2.data.resultData;
                        console.log('x', x);
                        for(var j = 0; j < userLength; j++) {
                            let y = userDataChild[j];
                            console.log('y', y);
                            for(var k = 0; k < x.length; k++) {
                                if(x[k].emailUser === y.emailUser) {
                                    userDataChild[j]["contentId"] = x[k].contentId;
                                    userDataChild[j]["response"] = x[k].respon;
                                    let z = res3[0].data.contents;
                                    console.log('z', z);
                                    for(var l = 0; l < z.length; l++) {
                                        if(z[l]._id === x[k].contentId) {
                                            userDataChild[j]["contentName"] = z[l].contentName;
                                            break;
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                        setUserData(userDataChild);
                        setLoading(false);

                    })
                })

            })
            .catch(error => {
                // console.log(error);
                setLoading(false);
            })})}
    }, [, period]);

    if(isLoading) {
        return <RKLoader />;
    }
    return (
        <div className="Controlling">
            <Heading
                headingName="Monitoring Artikel"
                routes={[
                    { name: 'Report'},
                    { name: 'Monitoring Artikel', path: '/report/monitoring-content'  }
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
                    notifContext={"Status content yang dibaca anak"}
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

export default MonitoringContent;
