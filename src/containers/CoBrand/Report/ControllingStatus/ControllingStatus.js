import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/Table';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './ControllingStatus.scss';
import { getUserList, getAppUsageList } from '../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const ControllingStatus = () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [usageData, setUsageData] = useState();

    const options = {
        filterType: "dropdown",
        selectableRows: false,
        responsive: "scroll",
    };

    useEffect(() => {
        let params={
            whereKeyValues: {
                packageId: "com.byasia.ruangortu",
                userType: "child"
            },
            orderKeyValues: {
                nameUser: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        };
        console.log(localStorage.getItem('userFilter'));
        if(localStorage.getItem('userFilter')) params.whereKeyValues = JSON.parse(localStorage.getItem('userFilter'));
        console.log(params);
        getUserList(params)
        .then(response => {
            console.log(response.data);
            setUserData(response.data.users);
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
        <div className="Controlling">
            <Heading
                headingName="Controlling Status"
                routes={[
                    { name: 'Report', path: '/report/controlling-status' },
                    { name: 'Controlling Status' }
                ]}
            />
            {/* <div className="Pengguna_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userData}
                />
            </div> */}
            <MUIDataTable
                data={userData}
                columns={columns}
                options={options}
            />
        </div>
    )
}

export default ControllingStatus;
