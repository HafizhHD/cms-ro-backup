import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from './../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from './../../../../components/UI/RKLoaderInner/RKLoader.js';
import './UserReport.scss';
import { getUserList } from './../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const UserReport = () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState();

    const options = {
        filterType: "dropdown",
        selectableRows: true,
        responsive: "scroll",
    };

    useEffect(() => {
        let params={
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
                    console.log("Anjay");
                    for(var j = 0; j < ud.length; j++) {
                        let user2 = ud[j];
                        if(user.parentEmail === user2.emailUser){
                            user['parentName'] = user2.nameUser;
                            break;
                        }
                    }
                }
            }
            setUserData(ud);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }, []);

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
