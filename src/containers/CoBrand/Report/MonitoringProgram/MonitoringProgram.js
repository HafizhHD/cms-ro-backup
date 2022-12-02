import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './MonitoringProgram.scss';
import dummyData from './DummyData.json';
import {emailTester, absStart} from '../../GlobalParam'
import { getUserList, getContentResponseList, getProgramList, getContentList } from '../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const MonitoringProgram = () => {
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
        // console.log('masuk sini');
        if(period === 'dummy') {
            setUserData(dummyData);
            // console.log('masuk sini hay!');
            setLoading(false);
            setLoading(false);
        }
        else {let params=
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
                    groupMitraAsuhId: groupMitraAsuhId,
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
                    programId: {
                        "$nin": [""]
                    }
                },
                orderKeyValues: {
                    dateCreated: -1
                },
                limit: Number.MAX_SAFE_INTEGER
            }

            getContentResponseList(paramsContentRes)
            .then(res2 => {
                let paramProgram = {
                    whereKeyValues: {
                        cobrandEmail: cobrandEmail
                    },
                    orderKeyValues: {
                        dateCreated: -1
                    },
                    limit: Number.MAX_SAFE_INTEGER
                }
                let paramContent = {
                    whereKeyValues: {
                        programId: {
                            "$nin": [""]
                        },
                        cobrandEmail: cobrandEmail
                    },
                    orderKeyValues: {
                        dateCreated: -1
                    },
                    limit: Number.MAX_SAFE_INTEGER
                }
                const prog = getProgramList(paramProgram);
                const cont = getContentList(paramContent);
                Promise.all([prog, cont])
                .then(res3 => {
                    let x = res2.data.resultData;
                    console.log('x', x);
                    for(var j = 0; j < userLength; j++) {
                        let y = userDataChild[j];
                        console.log('y', y);
                        for(var k = 0; k < x.length; k++) {
                            if(x[k].emailUser === y.emailUser) {
                                userDataChild[j]["contentId"] = x[k].contentId;
                                userDataChild[j]["programId"] = x[k].programId;
                                userDataChild[j]["response"] = x[k].respon;
                                let z = res3[1].data.contents;
                                console.log('z', z);
                                for(var l = 0; l < z.length; l++) {
                                    if(z[l]._id === x[k].contentId) {
                                        const dateFormat = {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        }
                                        userDataChild[j]["stepName"] = z[l].contentName;
                                        userDataChild[j]["stepNumber"] = z[l].nomerUrutTahapan;
                                        userDataChild[j]["stepPeriod"] = new Date(z[l].startDate).toLocaleDateString("id-ID", dateFormat) + " - " + new Date(z[l].endDate).toLocaleDateString("id-ID", dateFormat);
                                        break;
                                    }
                                }
                                let aa = res3[0].data.programs;
                                console.log('aa', aa);
                                for(var m = 0; m < aa.length; m++) {
                                    if(aa[m]._id === x[k].programId) {
                                        userDataChild[j]["programName"] = aa[m].programName;
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
        })}
    }, [, period]);

    if(isLoading) {
        return <RKLoader />;
    }
    return (
        <div className="Controlling">
            <Heading
                headingName="Monitoring Program"
                routes={[
                    { name: 'Report'},
                    { name: 'Monitoring Program', path: '/report/monitoring-program'  }
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
                    notifContext={"Status program yang dijalani anak"}
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

export default MonitoringProgram;
