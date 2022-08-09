import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './CommercialReport.scss';
import { getUserList } from '../../../../components/API/filter.js'
import dummyData from './DummyData.json'
import MUIDataTable from "mui-datatables";

const CommercialReport = () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [period, setPeriod] = useState('real');

    const options = {
        filterType: "dropdown",
        selectableRows: true,
        responsive: "scroll",
    };

    useEffect(() => {
        if(period === 'dummy') {
            var dumDat = dummyData;
            for(var i = 0; i < dumDat.length; i++) {
                var user = dumDat[i];
                if(user.payDate !== undefined) user['paymentDate'] = new Date(Date.parse(user.payDate));
            }
            // console.log(dumDat);
            setUserData(dumDat);
            setLoading(false);
        }
        else {let params={
            whereKeyValues: {
                packageId: "com.byasia.ruangortu"
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
            var userDataPayment = [];
            for(var i = 0; i < userDataChild.length; i++) {
                for( var j = 0; j < userDataChild[i].subscriptions.length; j++) {
                    let user = userDataChild[i].subscriptions[j];
                    let adminFee = 0;
                    if(user.price > 0) {
                        user['nameUser'] = userDataChild[i].nameUser;
                        user['emailUser'] = userDataChild[i].emailUser;
                        user['parentName'] = userDataChild[i].parentName;
                        user['parentEmail'] = userDataChild[i].parentEmail;
                        user['childInfo'] = {schoolName: userDataChild[i].childInfo.schoolName}
                        user['paymentAmount'] = user.price;
                        user['paymentDate'] = new Date(Date.parse(user.dateCreated));
                        user['adminFee'] = adminFee;
                        user['taxAmount'] = user.price * 0.1;
                        user['cleanAmount'] = user.price * 0.9 - adminFee;
                        user['myAmount'] = (user.price * 0.9 - adminFee)/2;
                        user['theirAmount'] = (user.price * 0.9 - adminFee)/2;
                        userDataPayment.push(user);
                    }
                }
            }
            setUserData(userDataPayment);
            setLoading(false);
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
        <div className="Commercial">
            <Heading
                headingName="Laporan Keuangan Terestimasi"
                routes={[
                    { name: 'Report'},
                    { name: 'Laporan Keuangan', path: '/report/commercial'  }
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
            <div className="Commercial_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userData}
                    showCheckbox={true}
                    notifContext={"Status Pembayaran"}
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

export default CommercialReport;
