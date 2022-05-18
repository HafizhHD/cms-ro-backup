import React, { useState, useEffect, Suspense, lazy } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import './Report.scss';
import './../Program/Program.scss'
import { BiCaretDown, BiCaretUp, BiMinus } from 'react-icons/bi';
import axios from 'axios';
import RKLoader from './../../../components/UI/RKLoaderInner/RKLoader.js';
import { getHKBPList, getUserList } from '../../../components/API/filter';
import TableProgram from './../../../components/UI/Table/Table';
import columns from './../Program/components/Columns';
import Data from './../Program/components/MOCK_DATA.json';
import { deleteProgram } from '../../../store/actions/dashboard';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import {connect} from 'react-redux';
import { getProgramList } from '../../../components/API/filter';
const ChartAsync = lazy(() => import('./component/Chart'));

const Report = ({

}) => {
    const [isLoading, setLoading] = useState(true);

    const [isUpdatingRegistered, setUpdatingRegistered] = useState(false);
    const [isUpdatingActive, setUpdatingActive] = useState(false);
    const [isUpdatingRessort, setUpdatingRessort] = useState(false);
    const [isUpdatingHuria, setUpdatingHuria] = useState(false);

    const [userType, setUserType] = useState('all');
    const [userTypeActive, setUserTypeActive] = useState('all');
    const [selectedDistrik, setDistrik] = useState('');
    const [selectedRessort, setRessort] = useState('');

    const [countUser, setCountUser] = useState(0);
    const [countActive, setCountActive] = useState(0);
    const [countInactive, setCountInactive] = useState(0);
    const [countUserDistrik, setCountUserDistrik] = useState([]);
    const [countUserRessort, setCountUserRessort] = useState([]);
    const [countUserHuria, setCountUserHuria] = useState([]);

    const [stringHKBP, setStringHKBP] = useState();
    const [userData, setUserData] = useState();

    const [showModal, setShowModal] = useState(false);

    const [programList, setProgramList] = useState();
    const [programDeleting, setProgramDeleting] = useState(null);

    /*
    const submitModal = () => {
        alert('ok')
    }
    */
    
    const user1Data = JSON.parse(localStorage.getItem('userData'));
    const params = {
        whereKeyValues: {
            cobrandEmail: user1Data.email
        },
        limit: Number.MAX_SAFE_INTEGER
    };

    
    function retrieveList() {
        getProgramList(params)
        .then(response => {
            setProgramList(response.data);
            console.log(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        });
    }
    
    useEffect(() => {
        setLoading(true);
        if(localStorage.getItem('programDeleting')) {
            setProgramDeleting(localStorage.getItem('programDeleting'));
            localStorage.removeItem('programDeleting');
        }
        retrieveList();
    }, []);

    useEffect(() => {
        if(programDeleting) {
            setLoading(true);
        }
    }, [programDeleting]);

    useEffect(() => {
        let countingUserDistrik = [];
        /*let HKBPString = {
            stringDistrik: [],
            stringRessort: [],
            stringHuria: []
        };*/
        let HKBPString = {};

        //Get All User Database
        const promiseX = getUserList({limit: Number.MAX_SAFE_INTEGER});

        //List HKBP
        const promise1 = getHKBPList({limit: Number.MAX_SAFE_INTEGER});

        Promise.all([promiseX, promise1]).then(response => {

            console.log(response[1].data);

            response[1].data.HKBPData.forEach(e => {
                if(!(e.distrik in HKBPString)) HKBPString = Object.assign(HKBPString, {[e.distrik]: {}});
                if(!(("Ressort " + e.ressort) in HKBPString[e.distrik])) HKBPString[e.distrik] = Object.assign(HKBPString[e.distrik], {["Ressort " + e.ressort]: []});
                if(!HKBPString[e.distrik]["Ressort " + e.ressort].includes("Huria " + e.nama)) HKBPString[e.distrik]["Ressort " + e.ressort].push("Huria " + e.nama);
            });
            console.log(HKBPString);

            setStringHKBP(HKBPString);

            Object.keys(HKBPString).forEach(elements => {
                let countUserPerDistrik = 0;
                response[0].data.users.forEach(e => {
                    if(e.namaHkbp && e.namaHkbp.includes(elements) && e.namaHkbp !== '') countUserPerDistrik += 1;
                });
                countingUserDistrik.push(countUserPerDistrik);
            });

            setUserData(response[0].data.users);
            setCountUserDistrik(countingUserDistrik);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        let params={
            whereKeyValues: {
                packageId: "com.asia.ruangortu"
            },
            limit: Number.MAX_SAFE_INTEGER
        };
        if(userType !== 'all') {
            params.whereKeyValues = {
                userType: userType,
                packageId: "com.asia.ruangortu"
            }
        }
        console.log(params);
        getUserList(params)
        .then(response => {
            setCountUser(response.data.users.length);
            setUpdatingRegistered(false);
        })
        .catch(error => {
            console.log(error);
            setUpdatingRegistered(false);
        });
    }, [isUpdatingRegistered]);

    useEffect(() => {
        let params={
            whereKeyValues: {
                status: 'active',
                packageId: "com.asia.ruangortu"
// bagian active user all --> filter bisa
            },
            limit: Number.MAX_SAFE_INTEGER
        };
        if(userTypeActive !== 'all') {
            params.whereKeyValues = {
                userType: userTypeActive,
                status: 'active',
                packageId: "com.asia.ruangortu"

//parameter child & parent
            }
        }
        console.log(params);
        getUserList(params)
        .then(response => {
            setCountActive(response.data.users.length);
            let params2={
                whereKeyValues: {
                    packageId: "com.asia.ruangortu"
                    // persen jumlah pengguna
                },
                limit: Number.MAX_SAFE_INTEGER

            };
            if(userTypeActive !== 'all') {
                params2.whereKeyValues = {
                    userType: userTypeActive,
                    packageId: "com.asia.ruangortu"
                    // yang inactive
                }
            }
            getUserList(params2)
            .then(response2 => {
                setCountInactive(response2.data.users.length-response.data.users.length);
                setUpdatingActive(false);
            })
            .catch(error => {
                console.log(error);
                setUpdatingActive(false);
            });
        })
        .catch(error => {
            console.log(error);
            setUpdatingActive(false);
        });
    }, [isUpdatingActive]);

    useEffect(() => {
        if(isUpdatingRessort) {
            let countingUserRessort = [];
            Object.keys(stringHKBP[selectedDistrik]).forEach(elements => {
                let countUserPerRessort = 0;
                userData.forEach(e => {
                    if(e.namaHkbp && e.namaHkbp.includes(elements) && e.namaHkbp.includes(selectedDistrik)
                        && e.namaHkbp !== '') countUserPerRessort += 1;
                });
                countingUserRessort.push(countUserPerRessort);
            });
            console.log(Object.keys(stringHKBP[selectedDistrik]));
            setCountUserRessort(countingUserRessort);
            setUpdatingRessort(false);
        }
    }, [isUpdatingRessort]);

    useEffect(() => {
        if(isUpdatingHuria) {
            let countingUserHuria = [];
            stringHKBP[selectedDistrik][selectedRessort].forEach(elements => {
                let countUserPerHuria = 0;
                userData.forEach(e => {
                    if(e.namaHkbp && e.namaHkbp.includes(elements) && e.namaHkbp.includes(selectedRessort) && 
                        e.namaHkbp.includes(selectedDistrik)&& e.namaHkbp !== '') countUserPerHuria += 1;
                });
                countingUserHuria.push(countUserPerHuria);
            });
            console.log(stringHKBP[selectedDistrik][selectedRessort]);
            setCountUserHuria(countingUserHuria);
            setUpdatingHuria(false);
        }
    }, [isUpdatingHuria]);

    // untuk report penggunaan all user - package id nya yg d bedain
    useEffect(() => {
        const body = {
            whereKeyValues: {
                packageId: "com.asia.ruangortu"
            }
        }
        axios({
            method: 'get',
            url: 'https://rk.defghi.biz.id:8080/api/user/getAllUser',
            data: body
        })

        // axios.get("https://rk.defghi.biz.id:8080/api/user/getAllUser", body)
            .then(response => {
                console.log(response.data);

            })
            .catch(error => {
                console.log(error);
            });
    },[])

    if(isLoading) {
        return <RKLoader />
    }

    return (
        <>
        <div className="Report">

            <div className="Report_heading">
                <h1>USER REPORT</h1>
            </div>
            <section className="UserReport">
                <div className="UserReport_totaluser">

                    <div className="Report_card">
                        <div className="Report_card_heading">
                            <h3>Total Registered User (Email)</h3>
                            <FiAlertCircle className="Report_card_icon" />
                        </div>
                        <div className="Report_card_content">
                            <div className="Report_card_content_type">
                                <select
                                    name="userType"
                                    value={userType}
                                    onChange={(e) => {
                                        console.log('bruh');
                                        console.log(e.currentTarget.value);
                                        setUserType(e.currentTarget.value);
                                        setUpdatingRegistered(true);
                                    }}>
                                    <option value="all">All</option>
                                    <option value="parent">Parent</option>
                                    <option value="child">Child</option>
                                </select>
                            </div>
                            <div className="Report_card_content-data">
                                <div className="Report_card_content-data-left">
                                    <h1>{countUser}</h1>
                                </div>
                                <div className="Report_card_content-data-right">
                                    <div>
                                        <div className="labelTitle"></div>
                                        <h5>Total Registered User</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="UserReport_totalactive">

                    <div className="Report_card">
                        <div className="Report_card_heading">
                            <h3>Total Active User</h3>
                            <FiAlertCircle className="Report_card_icon" />
                        </div>
                        <div className="Report_card_content">
                            <div className="Report_card_content_type">
                                <select
                                    name="userTypeActive"
                                    value={userTypeActive}
                                    onChange={(e) => {
                                        console.log('bruh');
                                        console.log(e.currentTarget.value);
                                        setUserTypeActive(e.currentTarget.value);
                                        setUpdatingActive(true);
                                    }}>
                                    <option value="all">All</option>
                                    <option value="parent">Parent</option>
                                    <option value="child">Child</option>
                                </select>
                            </div>
                            <div className="Report_card_content-data">
                                <div className="Report_card_content-data-left">
                                    <h1>{countActive}</h1>
                                    <div>
                                        <>
                                            <h5 className="text-normal">{countInactive} ({(countInactive/(countActive+countInactive)*100).toFixed(1)}%)</h5>
                                        </>
                                    </div>
                                </div>
                                <div className="Report_card_content-data-right">
                                    <div>
                                        <div className="labelTitle"></div>
                                        <h5>Total Active User</h5>
                                    </div>
                                    <div className="mt-small">
                                        <div className="labelWarning"></div>
                                        <h5>Total Inactive/Invited User</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
        <div>
            <div className="Report_heading">
                    <h1>PROGRAM REPORT</h1>
                </div>
            <div className="Program__table">
                <TableProgram 
                    COLUMNS={columns(setProgramDeleting)} 
                    DATA={programList.programs}  
                />
            </div>
        </div>
        </>
    )
}

export default Report;