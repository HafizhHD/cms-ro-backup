import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from './../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from './../../../../components/UI/RKLoaderInner/RKLoader.js';
import './UserReport.scss';
import { getUserList } from './../../../../components/API/filter.js'
import dummyData from './DummyData.json'
import MUIDataTable from "mui-datatables";

const UserReport = () => {
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
                if(user.startSub !== undefined) user['startSubscription'] = new Date(Date.parse(user.startSub));
                if(user.endSub !== undefined) user['endSubscription'] = new Date(Date.parse(user.endSub));
            }
            console.log(dumDat);
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
        console.log(params);
        getUserList(params)
        .then(response => {
            console.log(response.data);
            // setUserData(response.data.users);
            var ud = response.data.users;
            for(var i = 0; i < ud.length; i++) {
                let user = ud[i];
                if(user.userType === 'child') {
                    if(user.startSub !== undefined) user['startSubscription'] = new Date(user.startSub);
                    if(user.endSub !== undefined) user['endSubscription'] = new Date(user.endSub);
                    console.log("Anjay");
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
                    console.log(user.parentEmail);
                }
            }
            setUserData(ud);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })}
    }, [, period]);

    if(isLoading) {
        return <RKLoader />;
    }
    return (
        <div className="Pengguna">
            <Heading
                headingName="User Report"
                routes={[
                    { name: 'Report', path: '/report/user' },
                    { name: 'User Report' }
                ]}
            />
             <div className="Dashboard_period">
                <button className={period === 'real' ? "Dashboard_period_option-active" : "Dashboard_period_option"}
                    onClick={() => {
                        if(period !== 'real') {
                            setLoading(true);
                            setPeriod('real');
                        }
                    }}>Real</button>
                <button className={period === 'dummy' ? "Dashboard_period_option-active" : "Dashboard_period_option"}
                    onClick={() => {
                        if(period !== 'dummy') {
                            setLoading(true);
                            setPeriod('dummy');
                        }
                    }}>Dummy</button>
            </div>
            <div className="Pengguna_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userData}
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
