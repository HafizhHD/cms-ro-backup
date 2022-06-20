import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './RedzoneReport.scss';
import { getRedzoneList } from '../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const RedzoneReport = () => {
    const [isLoading, setLoading] = useState(true);
    const [redzoneData, setRedzoneData] = useState();

    const options = {
        filterType: "dropdown",
        selectableRows: false,
        responsive: "scroll"
    };

    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        let params={
            whereKeyValues: {
                cobrandEmail: userData.email
            },
            orderKeyValues: {
                placeName: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        };
        console.log(params);
        getRedzoneList(params)
        .then(response => {
            console.log(response.data);
            setRedzoneData(response.data.Data);
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
        <div className="Redzone">
            <Heading
                headingName="Report Redzone"
                routes={[
                    { name: 'Report'},
                    { name: 'Report Redzone', path: '/report/redzone'  }
                ]}
            />
            <div className="Redzone_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={redzoneData}
                />
            </div>
            {/* <MUIDataTable
                data={redzoneData}
                columns={columns}
                options={options}
            /> */}
        </div>
    )
}

export default RedzoneReport;
