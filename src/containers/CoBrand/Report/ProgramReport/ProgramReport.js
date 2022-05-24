import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/Table';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './ProgramReport.scss';
import { getProgramList } from '../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const ProgramReport = () => {
    const [isLoading, setLoading] = useState(true);
    const [programData, setProgramData] = useState();

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
                programName: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        };
        console.log(params);
        getProgramList(params)
        .then(response => {
            console.log(response.data);
            setProgramData(response.data.programs);
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
        <div className="Program">
            <Heading
                headingName="Program Report"
                routes={[
                    { name: 'Report', path: '/report/program' },
                    { name: 'Program Report' }
                ]}
            />
            {/* <div className="Pengguna_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userData}
                />
            </div> */}
            <MUIDataTable
                data={programData}
                columns={columns}
                options={options}
            />
        </div>
    )
}

export default ProgramReport;
