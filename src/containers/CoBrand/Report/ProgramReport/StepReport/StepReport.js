import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../../components/UI/RKLoaderInner/RKLoader.js';
import './StepReport.scss';
// import dummyData from './DummyData.json'
import { getContentList } from '../../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const ProgramReport = () => {
    const [isLoading, setLoading] = useState(true);
    const [stepData, setStepData] = useState();
    const [period, setPeriod] = useState('real');

    const options = {
        filterType: "dropdown",
        selectableRows: false,
        responsive: "scroll"
    };

    const userData = JSON.parse(localStorage.getItem('userData'));
    const _id = localStorage.getItem('stepReportSelected');

    useEffect(() => {

        if(period === 'dummy') {
            // setStepData(dummyData);
            setLoading(false);
        }
        else {let params={
            whereKeyValues: {
                cobrandEmail: userData.email,
                programId: _id
            },
            orderKeyValues: {
                nomerUrutTahapan: 1
            },
            includeContentData:false,
            limit: Number.MAX_SAFE_INTEGER
        };
        console.log(params);
        getContentList(params)
        .then(response => {
            console.log(response.data);
            setStepData(response.data.contents);
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
        <div className="Program">
            <Heading
                headingName="Report Tahap"
                routes={[
                    { name: 'Report' },
                    { name: 'Program Report', path: '/report/program' },
                    { name: 'Report Tahap', path: '/report/program/step' }
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
            <div className="Program_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={stepData}
                />
            </div>
            {/* <MUIDataTable
                data={programData}
                columns={columns}
                options={options}
            /> */}
        </div>
    )
}

export default ProgramReport;
