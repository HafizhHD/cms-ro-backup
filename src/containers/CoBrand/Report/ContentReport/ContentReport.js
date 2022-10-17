import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../../components/UI/Table/TableWithFilter';
import columns from './columns';
import Heading from '../../../../components/UI/Heading/Heading';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader.js';
import './ContentReport.scss';
import dummyData from './DummyData.json'
import { getContentList, getContentResponseList, getContentViewList } from '../../../../components/API/filter.js'
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
        else {let params = userData.cobrandComunityId !== '' ? {
            whereKeyValues: {
                cobrandEmail: userData.cobrandEmail,
                status: {"$in" : ["active", "inactive"]},
                programId: "",
                cobrandComunityId: userData.cobrandComunityId
            },
            includeContentData:false,
            limit: Number.MAX_SAFE_INTEGER
        } : {
            whereKeyValues: {
                cobrandEmail: userData.cobrandEmail,
                status: {"$in" : ["active", "inactive"]},
                programId: ""
            },
            includeContentData:false,
            limit: Number.MAX_SAFE_INTEGER
        };;
        // console.log(params);
        getContentList(params)
        .then(response => {
            // console.log(response.data);
            var p = response.data.contents;
            // setContentData(response.data.contents);
            getContentResponseList({
                "whereKeyValues": {
                    "programId": ""
                }
            })
            .then(res => {
                var r = res.data.resultData;
                for(var i = 0; i < p.length; i++) {
                    var likes = 0;
                    for(var j = 0; j < r.length; j++) {
                        if(p[i]._id === r[j].contentId) likes += 1;
                    }
                    p[i]['totalLikes'] = likes;
                    console.log('Likes: ' + p[i].totalLikes);
                }
                getContentViewList({
                    "whereKeyValues": {
                        "programId": ""
                    }
                })
                .then(res2 => {
                    var r = res2.data.resultData;
                    for(var i = 0; i < p.length; i++) {
                        var views = 0;
                        for(var j = 0; j < r.length; j++) {
                            if(p[i]._id === r[j].contentId) views += 1;
                        }
                        p[i]['totalViews'] = views;
                        console.log('Views: ' + p[i].totalViews);
                    }
                    setContentData(p);
                    setLoading(false);
                })
                .catch(error => {
                    // console.log(error);
                    setLoading(false);
                })
            })
            .catch(error => {
                // console.log(error);
                setLoading(false);
            })
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
