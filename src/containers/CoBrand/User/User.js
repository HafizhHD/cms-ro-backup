import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from './../../../components/UI/Table/Table';
import columns from './columns';
import Heading from './../../../components/UI/Heading/Heading'
import RKLoader from './../../../components/UI/RKLoader/RKLoader.js';
import './User.scss';
import { getUserList } from './../../../components/API/filter'

const User = () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState();

    useEffect(() => {
        let params={
            whereKeyValues: {},
            packageId: "com.byasia.ruangortu",
            limit: Number.MAX_SAFE_INTEGER
        };
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

    // const renderRowSubComponent = useCallback(
    //     ({ row }) => (
    //         <Detail userSelected={row.values.emailUser}/>
    //         /*<pre
    //             style={{
    //             fontSize: '10px',
    //             }}
    //         >
    //             <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
    //         </pre>*/
    //     ),
    //     []
    // );

    if(isLoading) {
        return <RKLoader />;
    }
    return (
        <div className="Pengguna">
            <Heading
                headingName="Helpdesk"
                routes={[
                    { name: 'Helpdesk', path: '/helpdesk' },
                    { name: 'Pengguna' }
                ]}
            />
            <div className="Pengguna_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userData}
                />
            </div>
        </div>
    )
}

export default User;
