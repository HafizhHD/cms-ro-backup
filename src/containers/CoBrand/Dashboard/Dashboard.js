import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import Table from './../../../components/UI/Table/TableWithFilter'
import { FiArrowRightCircle, FiAlertCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Heading from '../../../components/UI/Heading/Heading';
import axios from 'axios';
import columns from'./columns';
import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
import RKLoaderSpinner from '../../../components/UI/RKLoaderSpinner/RKLoader';
import { useHistory } from 'react-router';
import { getContentList, getProgramList, getUserList, getAppUsageList, getNotificationCategoryList, getNotificationList } from '../../../components/API/filter';
import {FaWhatsapp} from 'react-icons/fa'

import StackedChart from './component/StackedChart'
import BarChart from './component/BarChart'
import DonutChart from './component/DonutChart'

function Dashboard() {

    const [isLoading, setLoading] = useState(true);
    const [isLoadingSpinner, setLoadingSpinner] = useState(false);

    const localData = JSON.parse(localStorage.getItem('userData'));

    const absStart = new Date("2021-01-01");
    const today = new Date();
    today.setDate(today.getDate() + 1);

    const [period, setPeriod] = useState('today');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [userData, setUserData] = useState([]);
    const [countUser, setCountUser] = useState([0,0,0]);
    const [conProgData, setConProgData] = useState([]);
    const [userDataLabel, setUserDataLabel] = useState(["Orang tua: 0", "Anak: 0"]);
    const conProgDataLabel = ["Artikel", "Program"];
    const [topUsageData, setTopUsageData] = useState([]);
    const [topUsageLabel, setTopUsageLabel] = useState([]);
    const [notifData, setNotifData] = useState([]);
    const [notifLabel, setNotifLabel] = useState([]);
    const [topicCountLabel, setTopicCountLabel] = useState([]);
    const [topicCountData, setTopicCountData] = useState([]);
    const [topicViewLabel, setTopicViewLabel] = useState([]);
    const [topicViewData, setTopicViewData] = useState([]);
    const [usageStudyLevelData, setUsageStudyLevelData] = useState([]);
    const [colors, setColors] = useState([]);

    const topUsageLabelDummy = ["Youtube", "Google", "Facebook", "Twitter", "Chrome", "Telegram", "TikTok", "Mobile Legends", "Chess", "Minecraft"];
    const notifLabelDummy = ["Pembayaran", "Pemberitahuan", "Promosi", "Laporan"];
    const topicLabelDummy = ["Agama", "Pendidikan", "Kesehatan", "Keluarga", "Berita Internal", "Berita Nasional", "Berita Dunia", "Informasi Teknologi", "Olah Raga", "Umum"];
    
    const userDummy = [
        {
            name: "TK",
            data: [0, 12]
        },
        {
            name: "SD",
            data: [0, 50]
        },
        {
            name: "SMP",
            data: [0, 121]
        },
        {
            name: "SMA",
            data: [0, 68]
        },
        {
            name: "Parent",
            data: [250, 0]
        },
        {
            name: "Co-Parent",
            data: [99, 0]
        }
    ];
    const conProgDummy = [{data: [200, 50]}];
    const topUsageDummy = [500000, 153258, 67384, 53321, 39212, 19030, 4239, 3990, 3218, 1089];
    const notifDummy = [{data:[100, 231, 8 ,300]}];
    const topicCountDummy = [{data: [20,
        230,
        87,
        121,
        66,
        34,
        22,
        312,
        97,
        38]}];
    const topicViewDummy = [{data:[23000,
        18000,
        10000,
        9500,
        8700,
        6000,
        4000,
        21500,
        4200,
        1200]}];

    function retrieveDummy() {
        setCountUser([500, 349, 151]);
        setUserDataLabel(['Orang tua: 349', 'Anak: 151']);
        setUserData(userDummy);
        setConProgData(conProgDummy);
        setTopUsageLabel(topUsageLabelDummy);
        setTopUsageData(topUsageDummy);
        setNotifLabel(notifLabelDummy);
        setNotifData(notifDummy);
        setTopicCountLabel(topicLabelDummy);
        setTopicCountData(topicCountDummy);
        setTopicViewLabel(topicLabelDummy);
        setTopicViewData(topicViewDummy);
        setUsageStudyLevelData(usageStudyLevelDummy);
        setLoadingSpinner(false);
        setTimeout(() => {setLoading(true)},50);
        setTimeout(() => {setLoading(false)}, 80);
    }

    const usageStudyLevelDummy = [
        {"studyLevel": 'SD', "totalChild": 50, "totalChildOver": 35, "avgChildOver": 14, "standardUsage": 10, "totalChildUnder": 15, "avgChildUnder": 8},
        {"studyLevel": 'SMP', "totalChild": 121, "totalChildOver": 108, "avgChildOver": 16, "standardUsage": 12, "totalChildUnder": 13, "avgChildUnder": 11},
        {"studyLevel": 'SMA', "totalChild": 68, "totalChildOver": 54, "avgChildOver": 15, "standardUsage": 14, "totalChildUnder": 14, "avgChildUnder": 10},
    ]
    

    function retrieveData() {
        var tk = [0,0],
        sd = [0, 0],
        smp = [0,0],
        sma = [0,0],
        parent = [0,0],
        coparent = [0,0];

        var countingUser = [0,0,0];

        let paramUser = {
            whereKeyValues: {
                packageId: "com.roi.ruangortu",
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
                cobrandEmail: localData.cobrandEmail,
                programId: "",
                status: {"$in" : ["active", "inactive"]},
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
                cobrandEmail: localData.cobrandEmail,
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

        let paramUsage = {
            whereKeyValues: {
                dateCreate: {
                    "$gte": startDate.toISOString().split('T')[0],
                    "$lte": endDate.toISOString().split('T')[0]
                }
            },
            limit: Number.MAX_SAFE_INTEGER
        }

        let paramNotification = {
            whereKeyValues: {
                scheduleTime: {
                    "$gte": startDate.toISOString().split('T')[0],
                    "$lte": endDate.toISOString().split('T')[0]
                }
            },
            limit: Number.MAX_SAFE_INTEGER
        }

        let paramNotificationCategory = {
            limit: Number.MAX_SAFE_INTEGER
        }

        const promiseUser = getUserList(paramUser);
        const promiseContent = getContentList(paramContent);
        const promiseProgram = getProgramList(paramProgram);
        const promiseUsage = getAppUsageList(paramUsage);
        const promiseNotification = getNotificationList(paramNotification);
        const promiseNotificationCategory = getNotificationCategoryList(paramNotificationCategory);

        Promise.all([promiseUser, promiseContent, promiseProgram, promiseUsage, promiseNotification, promiseNotificationCategory]).then(responseAll => {
            // console.log(responseAll[0]);
            const dataUser = responseAll[0].data.users;
            countingUser[0] = dataUser.length;
            // // console.log(dataUser);
            for(var i = 0; i < dataUser.length; i++) {
                let x = dataUser[i];
                if(x.userType === 'parent') {
                    countingUser[1]++;
                    // // console.log("Parent email: " + x.parentEmail);
                    if(x.parentEmail === undefined) parent[0]++;
                    else coparent[0]++;
                }
                else if(x.userType === 'child') {
                    countingUser[2]++;
                    if(x.childInfo.StudyLevel === 'TK') tk[1]++;
                    else if(x.childInfo.StudyLevel === 'SD') sd[1]++;
                    else if(x.childInfo.StudyLevel === 'SMP') smp[1]++;
                    else if(x.childInfo.StudyLevel === 'SMA') sma[1]++;
                }
            }
            const userDataObj = [
                {
                    name: "TK",
                    data: tk
                },
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
            
            // console.log("Colors length: " + colors.length);
            setCountUser(countingUser);
            setUserData(userDataObj);
            setUserDataLabel(['Orang tua: ' + countingUser[1], 'Anak: ' + countingUser[2]]);

            const contentLength = responseAll[1].data.contents.length;
            console.log('Contents', responseAll[1].data.contents);
            console.log('Program', responseAll[2].data.programs);
            const programLength = responseAll[2].data.programs.length;

            const dataConProg = [contentLength, programLength];
            // // console.log(dataConProg);
            const conProgObj = [{
                data: dataConProg
            }];
            setConProgData(conProgObj);

            // // console.log(responseAll[3].data);

            const usageData = responseAll[3].data.appUsages;
            // // console.log(usageData);
            var usageLabel = [], usageFreq = [];
            for(var i = 0; i < usageData.length; i++) {
                let x = usageData[i].appUsages;
                // // console.log(x);
                for(var j = 0; j < x.length; j++) {
                    let y = x[j];
                    // // console.log(y);
                    if(y.usageHour !== undefined && y.usageHour.length > 0) {
                        if(!usageLabel.includes(y.appName)) {
                            usageLabel.push(y.appName);
                            usageFreq.push(0);
                        }
                        let idx = usageLabel.indexOf(y.appName);
                        usageFreq[idx] += y.usageHour.length;
                    }
                }
            }

            //1) combine the arrays:
            var list = [];
            for (var j = 0; j < usageLabel.length; j++) 
                list.push({'name': usageLabel[j], 'age': usageFreq[j]});

            //2) sort:
            list.sort(function(a, b) {
                return ((a.age < b.age) ? 1 : ((a.age == b.age) ? 0 : -1));
                //Sort could be modified to, for example, sort on the age 
                // if the name is the same.
            });

            //3) separate them back out:
            for (var k = 0; k < list.length; k++) {
                usageLabel[k] = list[k].name;
                usageFreq[k] = list[k].age;
            }
            // // console.log(usageLabel.slice(0,10));
            // // console.log(usageFreq.slice(0,10));

            setTopUsageData(usageFreq.slice(0,10));
            setTopUsageLabel(usageLabel.slice(0,10));

            // console.log(responseAll[4].data);
            // console.log(responseAll[5].data);
            var notifCat = [];
            var notifDat = [];
            responseAll[5].data.Data.map(e => {
                notifCat.push(e.category);
                notifDat.push(0);
            });
            responseAll[4].data.resultData.map(e => {
                for(var i = 0; i < notifDat.length; i++) {
                    if(e.category === notifCat[i]) {
                        notifDat[i]++;
                        break;
                    }
                }
            });
            setNotifData([{data: notifDat}]);
            setNotifLabel(notifCat);
            setTopicCountLabel([]);
            setTopicCountData([]);
            setTopicViewLabel([]);
            setTopicViewData([]);
            setUsageStudyLevelData([]);

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

        var colors2 = ['#44a6cc', '#cc44a6', '#a6cc44', '#44cca6', '#cca644', '#a644cc', '#117399', '#991173', '#739911', '#119973'];
        // for(var i = 0; i < 10; i++) {
        //     const colorPallete = "#" + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-3);
        //     colors2.push(colorPallete);
        // }
        setColors(colors2);
    }, []);

    useEffect(() => {
        var changedStartDate = new Date();
        var changedEndDate = today;
        switch(period) {
            case 'today':
                setStartDate(changedStartDate);
                setEndDate(changedEndDate);
                break;
            case 'yesterday': 
                changedStartDate.setDate(changedStartDate.getDate() - 1);
                changedEndDate.setDate(today.getDate() - 1);
                setStartDate(changedStartDate);
                setEndDate(changedEndDate);
                break;
            case 'week': 
                changedStartDate.setDate(changedStartDate.getDate() - 7);
                setEndDate(today);
                setStartDate(changedStartDate);
                break;
            case 'month': 
                changedStartDate.setDate(changedStartDate.getDate() - 30);
                setEndDate(today);
                setStartDate(changedStartDate);
                break;
            case 'year': 
                changedStartDate.setDate(changedStartDate.getDate() - 365);
                setEndDate(today);
                setStartDate(changedStartDate);
                break;
            case 'all': 
                setEndDate(today);
                setStartDate(absStart);
                break;
            case 'dummy':
                retrieveDummy();
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

            <div className="Dashboard_real_period">
                <button className={period === 'today' ? "Dashboard_real_period_option-active" : "Dashboard_real_period_option"}
                    onClick={() => {
                        if(period !== 'today') {
                            setLoadingSpinner(true);
                            setPeriod('today');
                        }
                    }}>Today</button>
                <button className={period === 'yesterday' ? "Dashboard_real_period_option-active" : "Dashboard_real_period_option"}
                    onClick={() => {
                        if(period !== 'yesterday') {
                            setLoadingSpinner(true);
                            setPeriod('yesterday');
                        }
                    }}>Yesterday</button>
                <button className={period === 'week' ? "Dashboard_real_period_option-active" : "Dashboard_real_period_option"}
                    onClick={() => {
                        if(period !== 'week') {
                            setLoadingSpinner(true);
                            setPeriod('week');
                        }
                    }}>7 Days</button>
                <button className={period === 'month' ? "Dashboard_real_period_option-active" : "Dashboard_real_period_option"}
                    onClick={() => {
                        if(period !== 'month') {
                            setLoadingSpinner(true);
                            setPeriod('month');
                        }
                    }}>30 Days</button>
                <button className={period === 'year' ? "Dashboard_real_period_option-active" : "Dashboard_real_period_option"}
                    onClick={() => {
                        if(period !== 'year') {
                            setLoadingSpinner(true);
                            setPeriod('year');
                        }
                    }}>365 Days</button>
                <button className={period === 'all' ? "Dashboard_real_period_option-active" : "Dashboard_real_period_option"}
                    onClick={() => {
                        if(period !== 'all') {
                            setLoadingSpinner(true);
                            setPeriod('all');
                        }
                    }}>All Time</button>
                <button className={period === 'dummy' ? "Dashboard_real_period_option-active" : "Dashboard_real_period_option"}
                    onClick={() => {
                        if(period !== 'dummy') {
                            setLoadingSpinner(true);
                            setPeriod('dummy');
                        }
                    }}>Dummy</button>
            </div>
            

            {/* Dashboard Cards  */}
            <div className="Dashboard_1">
                <div className="Dashboard_1_cards">
                    <div className="Dashboard_1_cards_card">
                        <div className="Dashboard_1_cards_card_item">
                            <div className="Dashboard_1_cards_card_item-heading">
                                <h3>{'Populasi User (Total: ' + countUser[0] + ')'}</h3>
                            </div>
                            

                            <StackedChart
                                    data={userData}
                                    label={userDataLabel}
                                    height={400}
                                    colors={colors}
                            />
                            
                            <div className="Dashboard_1_cards_card_item-details">
                                <p></p>
                                {/* <p>{'Orangtua: ' + countUser[1]}</p>
                                <p>{'Anak: ' + countUser[2]}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="Dashboard_1_cards_card">
                        <div className="Dashboard_1_cards_card_item">
                            <div className="Dashboard_1_cards_card_item-heading">
                                <h3>Top 10 Apps by Usage</h3>
                            </div>
                            

                            <DonutChart
                                    data={topUsageData}
                                    label={topUsageLabel}
                                    width={380}
                                    colors={colors}
                            />
                            
                            <div className="Dashboard_1_cards_card_item-details">
                                <p> </p>
                            </div>
                        </div>
                    </div>
                    <div className="Dashboard_1_cards_card">
                        <div className="Dashboard_1_cards_card_item">
                            <div className="Dashboard_1_cards_card_item-heading">
                                <h3>Jumlah Postingan Artikel &amp; Program Berdasarkan Topik</h3>
                            </div>
                            

                            <BarChart
                                    data={topicCountData}
                                    label={topicCountLabel}
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
                                <h3>Total Artikel &amp; Program</h3>
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
                    <div className="Dashboard_1_cards_card">
                        <div className="Dashboard_1_cards_card_item">
                            <div className="Dashboard_1_cards_card_item-heading">
                                <h3>Jumlah Kirim Notifikasi</h3>
                            </div>
                            

                            <BarChart
                                    data={notifData}
                                    label={notifLabel}
                                    height={350}
                            />
                            
                            <div className="Dashboard_1_cards_card_item-details">
                                <p> </p>
                            </div>
                        </div>
                    </div>
                    <div className="Dashboard_1_cards_card">
                        <div className="Dashboard_1_cards_card_item">
                            <div className="Dashboard_1_cards_card_item-heading">
                                <h3>Jumlah Pageview Artikel &amp; Program Berdasarkan Topik</h3>
                            </div>
                            

                            <BarChart
                                    data={topicViewData}
                                    label={topicViewLabel}
                                    height={600}
                            />
                            
                            <div className="Dashboard_1_cards_card_item-details">
                                <p> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Dashboard Cards  */}

            <div className="Dashboard_table">
                <Table
                    COLUMNS={columns}
                    DATA={usageStudyLevelData}
                />
            </div>

            {/* Dashboard Cards  */}
            {/* <div className="Dashboard_1_cards">
                <div className="Dashboard_1_cards_item">
                    <div className="Dashboard_1_cards_item-heading">
                        <h3>Total Program Views</h3>
                        <select
                            name="programTotalSelect"
                            value={programTotalSelect}
                            onChange={(e) => {
                                // console.log('bruh');
                                // console.log(e.currentTarget.value);
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
                                // console.log('bruh');
                                // console.log(e.currentTarget.value);
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
