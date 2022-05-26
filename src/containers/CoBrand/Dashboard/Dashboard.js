import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import { FiArrowRightCircle, FiAlertCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Heading from '../../../components/UI/Heading/Heading';
import axios from 'axios';
import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
import RKLoaderSpinner from '../../../components/UI/RKLoaderSpinner/RKLoader';
import { useHistory } from 'react-router';
import { getContentList, getProgramList, getUserList } from '../../../components/API/filter';
import {FaWhatsapp} from 'react-icons/fa'

import StackedChart from './component/StackedChart'
import BarChart from './component/BarChart'

function Dashboard() {

    const [isLoading, setLoading] = useState(true);
    const [isLoadingSpinner, setLoadingSpinner] = useState(false);

    const localData = JSON.parse(localStorage.getItem('userData'));

    const absStart = new Date("2021-01-01");
    const today = new Date();

    const [period, setPeriod] = useState('today');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [userData, setUserData] = useState([]);
    const [conProgData, setConProgData] = useState([]);
    const userDataLabel = ["Parent", "Child"];
    const conProgDataLabel = ["Content", "Program"];

    function retrieveData() {
        var sd = [0, 0],
        smp = [0,0],
        sma = [0,0],
        parent = [0,0],
        coparent = [0,0];

        let paramUser = {
            whereKeyValues: {
                packageId: "com.byasia.ruangortu",
                dateCreated: {
                    "$gte": startDate.toISOString().split('T')[0],
                    "$lte": endDate.toISOString().split('T')[0]
                }
            },
            orderKeyValues: {
                nameUser: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        }

        let paramContent = {
            whereKeyValues: {
                cobrandEmail: localData.email,
                dateCreated: {
                    "$gte": startDate.toISOString().split('T')[0],
                    "$lte": endDate.toISOString().split('T')[0]
                }
            },
            orderKeyValues: {
                contentName: 1
            },
            includeContentData: false,
            limit: Number.MAX_SAFE_INTEGER
        }

        let paramProgram = {
            whereKeyValues: {
                cobrandEmail: localData.email,
                dateCreated: {
                    "$gte": startDate.toISOString().split('T')[0],
                    "$lte": endDate.toISOString().split('T')[0]
                }
            },
            orderKeyValues: {
                programName: 1
            },
            includeThumbnailData: false,
            limit: Number.MAX_SAFE_INTEGER
        }

        const promiseUser = getUserList(paramUser);
        const promiseContent = getContentList(paramContent);
        const promiseProgram = getProgramList(paramProgram);

        Promise.all([promiseUser, promiseContent, promiseProgram]).then(responseAll => {
            const dataUser = responseAll[0].data.users;
            console.log(dataUser);
            for(var i = 0; i < dataUser.length; i++) {
                let x = dataUser[i];
                if(x.userType === 'parent') {
                    console.log("Parent email: " + x.parentEmail);
                    if(x.parentEmail === undefined) parent[0]++;
                    else coparent[0]++;
                }
                else if(x.userType === 'child') {
                    if(x.childInfo.StudyLevel === 'SD') sd[1]++;
                    else if(x.childInfo.StudyLevel === 'SMP') smp[1]++;
                    else if(x.childInfo.StudyLevel === 'SMA') sma[1]++;
                }
            }
            const userDataObj = [
                {
                    name: "SD",
                    data: sd
                },
                {
                    name: "SMP",
                    data: smp
                },
                {
                    name: "SMA",
                    data: sma
                },
                {
                    name: "Parent",
                    data: parent
                },
                {
                    name: "Co-Parent",
                    data: coparent
                }
            ]
            setUserData(userDataObj);

            const contentLength = responseAll[1].data.contents.length;
            console.log(responseAll[1].data.contents);
            console.log(responseAll[2].data.programs);
            const programLength = responseAll[2].data.programs.length;

            const dataConProg = [contentLength, programLength];
            console.log(dataConProg);
            const conProgObj = [{
                data: dataConProg
            }];
            setConProgData(conProgObj);

            if(isLoading) setLoading(false);
            else if(isLoadingSpinner) {
                setLoadingSpinner(false);
                setLoading(true);
                setLoading(false);
            }
        });
    }

    useEffect(() => {
        retrieveData();

    }, [, endDate]);

    useEffect(() => {
        var changedStartDate = new Date();
        var changedEndDate = new Date();
        switch(period) {
            case 'today':
                setStartDate(changedStartDate);
                setEndDate(changedEndDate);
                break;
            case 'yesterday': 
                changedStartDate.setDate(today.getDate() - 1);
                changedEndDate.setDate(today.getDate() - 1);
                setStartDate(changedStartDate);
                setEndDate(changedEndDate);
                break;
            case 'week': 
                changedStartDate.setDate(today.getDate() - 7);
                setEndDate(today);
                setStartDate(changedStartDate);
                break;
            case 'month': 
                changedStartDate.setDate(today.getDate() - 30);
                setEndDate(today);
                setStartDate(changedStartDate);
                break;
            case 'year': 
                changedStartDate.setDate(today.getDate() - 365);
                setEndDate(today);
                setStartDate(changedStartDate);
                break;
            case 'all': 
                setEndDate(today);
                setStartDate(absStart);
                break;
            default:
                break;           
        }
    }, [period]);

    if(isLoading) {
        return <RKLoader/>
    }

    return (
        <>
        {isLoadingSpinner ? <RKLoaderSpinner/> : null}
        <div className="Dashboard">
            <div className='div1'>
                <Heading headingName="DASHBOARD" />
                <a className='wa2' href='http://wa.me/628119004410' target="_blank"><FaWhatsapp className='whatshap'/> Need Help? Click Here!</a>
            </div>

            <div className="Dashboard_period">
                <button className={period === 'today' ? "Dashboard_period_option-active" : "Dashboard_period_option"}
                    onClick={() => {
                        setLoadingSpinner(true);
                        setPeriod('today');
                    }}>Today</button>
                <button className={period === 'yesterday' ? "Dashboard_period_option-active" : "Dashboard_period_option"}
                    onClick={() => {
                        setLoadingSpinner(true);
                        setPeriod('yesterday');
                    }}>Yesterday</button>
                <button className={period === 'week' ? "Dashboard_period_option-active" : "Dashboard_period_option"}
                    onClick={() => {
                        setLoadingSpinner(true);
                        setPeriod('week');
                    }}>7 Days</button>
                <button className={period === 'month' ? "Dashboard_period_option-active" : "Dashboard_period_option"}
                    onClick={() => {
                        setLoadingSpinner(true);
                        setPeriod('month');
                    }}>30 Days</button>
                <button className={period === 'year' ? "Dashboard_period_option-active" : "Dashboard_period_option"}
                    onClick={() => {
                        setLoadingSpinner(true);
                        setPeriod('year');
                    }}>365 Days</button>
                <button className={period === 'all' ? "Dashboard_period_option-active" : "Dashboard_period_option"}
                    onClick={() => {
                        setLoadingSpinner(true);
                        setPeriod('all');
                    }}>All Time</button>
            </div>
            

            {/* Dashboard Cards  */}
            <div className="Dashboard_1">
                <div className="Dashboard_1_cards">
                    <div className="Dashboard_1_cards_card">
                        <div className="Dashboard_1_cards_card_item">
                            <div className="Dashboard_1_cards_card_item-heading">
                                <h3>User Population</h3>
                            </div>
                            

                            <StackedChart
                                    data={userData}
                                    label={userDataLabel}
                                    height={400}
                            />
                            
                            <div className="Dashboard_1_cards_card_item-details">
                                <p> </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="Dashboard_1_cards_card">
                        <div className="Dashboard_1_cards_card_item">
                            <div className="Dashboard_1_cards_card_item-heading">
                                <h3>User Population</h3>
                            </div>
                            

                            <StackedChart
                                    data={userData}
                                    label={userDataLabel}
                            />
                            
                            <div className="Dashboard_1_cards_card_item-details">
                                <p> </p>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="Dashboard_1_cards">
                    <div className="Dashboard_1_cards_card">
                        <div className="Dashboard_1_cards_card_item">
                            <div className="Dashboard_1_cards_card_item-heading">
                                <h3>Total Content &amp; Program</h3>
                            </div>
                            

                            <BarChart
                                    data={conProgData}
                                    label={conProgDataLabel}
                                    height={200}
                            />
                            
                            <div className="Dashboard_1_cards_card_item-details">
                                <p> </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="Dashboard_1_cards_card">
                        <div className="Dashboard_1_cards_card_item">
                            <div className="Dashboard_1_cards_card_item-heading">
                                <h3>User Population</h3>
                            </div>
                            

                            <StackedChart
                                    data={userData}
                                    label={userDataLabel}
                            />
                            
                            <div className="Dashboard_1_cards_card_item-details">
                                <p> </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* End Dashboard Cards  */}

            {/* Dashboard Cards  */}
            {/* <div className="Dashboard_1_cards">
                <div className="Dashboard_1_cards_item">
                    <div className="Dashboard_1_cards_item-heading">
                        <h3>Total Program Views</h3>
                        <select
                            name="programTotalSelect"
                            value={programTotalSelect}
                            onChange={(e) => {
                                console.log('bruh');
                                console.log(e.currentTarget.value);
                                setProgramTotalSelect(e.currentTarget.value);
                                setUpdatingActive(true);
                            }}>
                            <option value="1">Today</option>
                            <option value="2">Last 7 Days</option>
                            <option value="3">Last 30 Days</option>
                            <option value="4">Last 365 Days</option>
                            <option value="5">All Time</option>
                        </select>
                    </div>
                    <h1>{programTotal}</h1>
                    
                    
                    <div className="Dashboard_1_cards_item-details">
                        <NavLink to="/program">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard_1_cards_item-icon" />
                        </NavLink>
                    </div>
                </div>
                <div className="Dashboard_1_cards_item">
                    <div className="Dashboard_1_cards_item-heading">
                        <h3>Total Content Views</h3>
                        <select
                            name="contentTotalSelect"
                            value={contentTotalSelect}
                            onChange={(e) => {
                                console.log('bruh');
                                console.log(e.currentTarget.value);
                                setContentTotalSelect(e.currentTarget.value);
                                setUpdatingActive(true);
                            }}>
                            <option value="1">Today</option>
                            <option value="2">Last 7 Days</option>
                            <option value="3">Last 30 Days</option>
                            <option value="4">Last 365 Days</option>
                            <option value="5">All Time</option>
                        </select>
                    </div>
                    <h1>{contentTotal}</h1>
                    <div className="Dashboard_1_cards_item-details">
                        <NavLink to="/content">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard_1_cards_item-icon" />
                        </NavLink>
                    </div>
                </div>
            </div> */}
            {/* End Dashboard Cards  */}



        </div>
        </>
    )
}

export default Dashboard
