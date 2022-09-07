import React, {useState, useEffect} from 'react';
import './Status.scss';
import RKLoader from '../../../components/UI/RKLoader/RKLoader';
import Logo from './../../../assets/img/Logo_4.png'
import { getContentList, getProgramList, getUserList, getAppUsageList, getNotificationCategoryList, getNotificationList } from '../../../components/API/filter';

function Status() {
    const [isLoading, setLoading] = useState(true);
    const [isLoadingSpinner, setLoadingSpinner] = useState(false);

    const localData = JSON.parse(localStorage.getItem('userData'));

    const absStart = new Date("2022-08-13");
    const today = new Date();
    today.setDate(today.getDate() + 1);

    const [period, setPeriod] = useState('today');
    const [endDate, setEndDate] = useState(today);
    const [userData, setUserData] = useState([]);
    const [countUser, setCountUser] = useState([0,0,0,0]);

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
    

    function retrieveData() {
        var tk = [0,0],
        sd = [0, 0],
        smp = [0,0],
        sma = [0,0],
        parent = [0,0],
        coparent = [0,0];

        var countingUser = [0,0,0,0,0];

        let paramUser = {
            whereKeyValues: {
                packageId: "com.byasia.ruangortu",
                dateCreated: {
                    "$gte": absStart.toISOString().split('T')[0],
                    "$lte": endDate.toISOString().split('T')[0]
                }
            },
            orderKeyValues: {
                nameUser: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        }

        const promiseUser = getUserList(paramUser);

        promiseUser.then(responseAll => {
            // console.log(responseAll[0]);
            const dataUser = responseAll.data.users;
            countingUser[0] = dataUser.length;
            // // console.log(dataUser);
            for(var i = 0; i < dataUser.length; i++) {
                let x = dataUser[i];
                if(x.userType === 'parent') {
                    countingUser[1]++;
                }
                else if(x.userType === 'child') {
                    if(x.status === "active") countingUser[2]++;
                    else countingUser[3]++;
                    for(var j = 0; j < x.subscriptions.length; j++) {
                        let y = x.subscriptions[j];
                        if(y.price > 0) {
                            countingUser[4]++;
                            break;
                        }
                    }
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

    if(isLoading) {
        return <RKLoader/>
    }

    return(
        <div className="status">

            <div className="status-top">
                <img src={Logo} className="status-top-img" alt="logo top" />
            </div>
            <div className="status-1">
                <h3>Jumlah User:</h3>
                <h1>{countUser[0]}</h1>
            </div>
            <div className="status-1">
                <h3>Jumlah User Orang Tua:</h3>
                <h1>{countUser[1]}</h1>
            </div>
            <div className="status-1">
                <h3>Jumlah User Anak Diundang:</h3>
                <h1>{countUser[3]}</h1>
            </div>
            <div className="status-1">
                <h3>Jumlah User Anak Aktif:</h3>
                <h1>{countUser[2]}</h1>
            </div>
            <div className="status-1">
                <h3>Jumlah User Anak Berbayar:</h3>
                <h1>{countUser[4]}</h1>
            </div>
        </div>
    );
}

export default Status;