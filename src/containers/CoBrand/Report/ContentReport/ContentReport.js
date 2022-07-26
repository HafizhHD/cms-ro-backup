import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './ContentReport.scss';
import dummyData from './DummyData.json'
import { getContentList } from '../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const ContentReport = () => {
    const [isLoading, setLoading] = useState(true);
    const [contentData, setContentData] = useState();
    const [period, setPeriod] = useState('real');

    const options = {
        filterType: "dropdown",
        selectableRows: false,
        responsive: "scroll"
    };

    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        if(period === 'dummy') {
            setContentData(dummyData);
            setLoading(false);
        }
        else {let params={
            whereKeyValues: {
                cobrandEmail: userData.cobrandEmail,
                programId: "",
                status: {"$in" : ["active", "inactive"]}
            },
            orderKeyValues: {
                contentName: 1
            },
            includeContentData: false,
            limit: Number.MAX_SAFE_INTEGER
        };
        // console.log(params);
        getContentList(params)
        .then(response => {
            // console.log(response.data);
            setContentData(response.data.contents);
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
        <div className="Artikel">
            <Heading
                headingName="Report Artikel"
                routes={[
                    { name: 'Report'},
                    { name: 'Report Artikel', path: '/report/content'}
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
            <div className="Artikel_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={contentData}
                />
            </div>
            {/* <MUIDataTable
                data={contentData}
                columns={columns}
                options={options}
            /> */}
        </div>
    )
}

export default ContentReport;
