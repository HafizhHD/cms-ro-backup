import React, { useState, useEffect, Suspense, lazy } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import './Report.scss';
import { BiCaretDown, BiCaretUp, BiMinus } from 'react-icons/bi';
import axios from 'axios';
import RKLoader from './../../../components/UI/RKLoaderInner/RKLoader.js';
import { getHKBPList, getUserList } from '../../../components/API/filter';
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
            whereKeyValues: {},
            limit: Number.MAX_SAFE_INTEGER
        };
        if(userType !== 'all') {
            params.whereKeyValues = {
                userType: userType
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
                status: 'active'
            },
            limit: Number.MAX_SAFE_INTEGER
        };
        if(userTypeActive !== 'all') {
            params.whereKeyValues = {
                userType: userTypeActive,
                status: 'active'
            }
        }
        console.log(params);
        getUserList(params)
        .then(response => {
            setCountActive(response.data.users.length);
            let params2={
                whereKeyValues: {},
                limit: Number.MAX_SAFE_INTEGER
            };
            if(userTypeActive !== 'all') {
                params2.whereKeyValues = {
                    userType: userTypeActive
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


    if(isLoading) {
        return <RKLoader />
    }

    return (
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
                                    {/*<div>
                                        {countVariables.countUserToday > 0 ? (
                                            <>
                                                <BiCaretUp className="iconSuccess" />
                                                <h5 className="text-success">{countVariables.countUserToday} (+{(countVariables.countUserToday/countVariables.countUser*100).toFixed(1)}%)</h5>
                                            </>
                                        ) : (
                                            countVariables.countUserToday === 0 ? (
                                                <>
                                                    <BiMinus className="iconNormal" />
                                                    <h5 className="text-normal">{countVariables.countUserToday} (+0%)</h5>
                                                </>
                                            ) : (
                                                <>
                                                    <BiCaretDown className="iconDanger" />
                                                    <h5 className="text-danger">{countVariables.countUserToday} (-100%)</h5>
                                                </>
                                            )
                                        )}
                                    </div>*/}
                                </div>
                                <div className="Report_card_content-data-right">
                                    <div>
                                        <div className="labelTitle"></div>
                                        <h5>Total Registered User</h5>
                                    </div>
                                    {/*<div className="mt-small">
                                        <div className={countVariables.countUserToday > 0 ? "labelSuccess" : (
                                            countVariables.countUserToday === 0 ? "labelWarning" : "labelDanger"
                                        )}></div>
                                        <h5>Daily Update Registered User</h5>
                                    </div>*/}
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
                                        {/*<BiCaretUp className="iconSuccess" />
                                        <h5 className="text-success">36 (+100%)</h5>*/}
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
                
                {/*<div className="UserReport_totaladdon">
                    <div className="Report_card">
                        <div className="Report_card_heading">
                            <h3>Total Add-on Voucher</h3>
                            <FiAlertCircle className="Report_card_icon" />
                        </div>
                        <div className="Report_card_content">
                            <div className="Report_card_content-data">
                                <div className="Report_card_content-data-left">
                                    <h1>2314</h1>
                                    <div>
                                        <BiCaretDown className="iconDanger" />
                                        <h5 className="text-danger">14 (-2,6%)</h5>
                                    </div>
                                </div>
                                <div className="Report_card_content-data-right">
                                    <div>
                                        <div className="labelTitle"></div>
                                        <h5>Total User Register</h5>
                                    </div>
                                    <div className="mt-small">
                                        <div className="labelWarning"></div>
                                        <h5>Daily Update User Register</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/
                                        }
            </section>
            <section className="Demography">
                <div className="Demography_userdistrik">
                    <div className="Report_card">
                        <div className="Report_card_heading">
                            <h3>Jumlah User Per Distrik</h3>
                            <FiAlertCircle className="Report_card_icon" />
                        </div>
                        <div className="Report_card_content">
                            <div className="Report_card_content_type">
                                
                            </div>
                            <div className="Report_card_content-chart">
                                <ChartAsync chartType="pie" chartLabel={Object.keys(stringHKBP)} chartData={countUserDistrik}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Demography_userressort">
                    <div className="Report_card">
                        <div className="Report_card_heading">
                            <h3>Jumlah User Per Ressort</h3>
                            <FiAlertCircle className="Report_card_icon" />
                        </div>
                        <div className="Report_card_content">
                            <div className="Report_card_content_type">
                                <select
                                    name="selectedDistrik"
                                    value={selectedDistrik}
                                    onChange={(e) => {
                                        console.log('bruh');
                                        console.log(e.currentTarget.value);
                                        setDistrik(e.currentTarget.value);
                                        setUpdatingRessort(true);
                                        setRessort('');
                                    }}>
                                    <option value="" disabled>-- Pilih Distrik --</option>
                                    {Object.keys(stringHKBP).map(e => {
                                        return <option value={e}>{e}</option>
                                    })}
                                </select>
                            </div>
                            <div className="Report_card_content-chart">
                                {selectedDistrik === '' || isUpdatingRessort ? <h2>Pilih Distrik Terlebih Dahulu</h2>
                                    : <ChartAsync chartType="pie" chartLabel={Object.keys(stringHKBP[selectedDistrik])} chartData={countUserRessort}/>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Demography_userhuria">
                    <div className="Report_card">
                        <div className="Report_card_heading">
                            <h3>Jumlah User Per Huria</h3>
                            <FiAlertCircle className="Report_card_icon" />
                        </div>
                        <div className="Report_card_content">
                            <div className="Report_card_content_type">
                                <select
                                    name="selectedRessort"
                                    value={selectedRessort}
                                    onChange={(e) => {
                                        console.log('bruh');
                                        console.log(e.currentTarget.value);
                                        setRessort(e.currentTarget.value);
                                        setUpdatingHuria(true);
                                    }}>
                                    <option value="" disabled>-- Pilih Ressort --</option>
                                    {selectedDistrik !== '' ? (
                                        Object.keys(stringHKBP[selectedDistrik]).map(e => {
                                            return <option value={e}>{e}</option>
                                        }
                                    )) : <option value="0" disabled>-- Pilih Distrik Terlebih Dahulu --</option>}
                                </select>
                            </div>
                            <div className="Report_card_content-chart">
                            {selectedDistrik === ''  || isUpdatingHuria ? <h2>Pilih Distrik Terlebih Dahulu Pada Bagian "Jumlah User Per Ressort"</h2>
                                    : (selectedRessort === '' || isUpdatingHuria ? <h2>Pilih Ressort Terlebih Dahulu</h2>
                                    : <ChartAsync chartType="pie" chartLabel={stringHKBP[selectedDistrik][selectedRessort]} chartData={countUserHuria}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<div className="Report_heading">
                <h1 className="mt-medium">CO-BRANDING REPORT</h1>
            </div>
            <section className="CoBrand">
                <div className="CoBrand_register">
                    <div className="Report_card">
                        <div className="Report_card_heading">
                            <h3>Total Co Branding Register</h3>
                            <FiAlertCircle className="Report_card_icon" />
                        </div>
                        <div className="Report_card_content">
                            <div className="Report_card_content-data">
                                <div className="Report_card_content-data-left">
                                    <h1>300</h1>
                                    <div>
                                        <BiCaretUp className="iconSuccess" />
                                        <h5 className="text-success">36 (+22,3%)</h5>
                                    </div>
                                </div>
                                <div className="Report_card_content-data-right">
                                    <div>
                                        <div className="labelTitle"></div>
                                        <h5>Total Co-Branding Register</h5>
                                    </div>
                                    <div className="mt-small">
                                        <div className="labelWarning"></div>
                                        <h5>Daily Update Co-Branding Register</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CoBrand_totalactive">
                    <div className="Report_card">
                        <div className="Report_card_heading">
                            <h3>Total Active Co Branding</h3>
                            <FiAlertCircle className="Report_card_icon" />
                        </div>
                        <div className="Report_card_content">
                            <div className="Report_card_content-data">
                                <div className="Report_card_content-data-left">
                                    <h1>256</h1>
                                    <div>
                                        <BiCaretDown className="iconDanger" />
                                        <h5 className="text-danger">14 (-22,3%)</h5>
                                    </div>
                                </div>
                                <div className="Report_card_content-data-right">
                                    <div>
                                        <div className="labelTitle"></div>
                                        <h5>New Active Co-Branding</h5>
                                    </div>
                                    <div className="mt-small">
                                        <div className="labelWarning"></div>
                                        <h5>Daily Active Co-Branding Update</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CoBrand_programactive">
                    <div className="Report_card">
                        <div className="Report_card_heading">
                            <h3> New Active Program</h3>
                            <FiAlertCircle className="Report_card_icon" />
                        </div>
                        <div className="Report_card_content">
                            <Suspense fallback={<p>Loading...</p>}>
                                <BarChartAsync />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>
                                    */}

        </div>
    )
}

export default Report;