import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './ContentReport.scss';
import { getContentList } from '../../../../components/API/filter.js'
import MUIDataTable from "mui-datatables";

const ContentReport = () => {
    const [isLoading, setLoading] = useState(true);
    const [contentData, setContentData] = useState();

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
                contentName: 1
            },
            includeContentData: false,
            limit: Number.MAX_SAFE_INTEGER
        };
        console.log(params);
        getContentList(params)
        .then(response => {
            console.log(response.data);
            setContentData(response.data.contents);
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
        <div className="Content">
            <Heading
                headingName="Content Report"
                routes={[
                    { name: 'Report', path: '/report/content' },
                    { name: 'Content Report' }
                ]}
            />
            <div className="Content_table">
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
