import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from './../../../components/UI/Table/Table';
import columns from './columns';
import Heading from './../../../components/UI/Heading/Heading'
import RKLoader from './../../../components/UI/RKLoaderInner/RKLoader';
import './User.scss';
import { getUserList } from './../../../components/API/filter'
import Detail from './Detail/Detail';
import {emailTester, absStart} from '../GlobalParam'
import { Redirect } from 'react-router-dom';

const User = () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [time, setTime] = useState(false);

    useEffect(() => {
        let params={
            whereKeyValues: {packageId: "com.byasia.ruangortu", 
            dateCreated: {
                "$gte": absStart.toISOString().split("T")[0]
            },
            emailUser: {
                "$nin": emailTester
            }},
            orderKeyValues: {nameUser: 1},
            limit: Number.MAX_SAFE_INTEGER
        };
        // console.log(params);
        getUserList(params)
        .then(response => {
            // console.log(response.data);
            setUserData(response.data.users);
            setLoading(false);
        })
        .catch(error => {
            // console.log(error);
            setLoading(false);
        })
    }, []);

    const renderRowSubComponent = useCallback(
        ({ row }) => (
            <Detail userSelected={row.values.emailUser}/>
            
        ),
        []
    );

    if(isLoading) {
        return <RKLoader />;
    }
    return (
        <div className="Pengguna">
            <Heading
                headingName="Manajemen Pengguna"
                routes={[
                    { name: 'Manajemen Data'},
                    { name: 'Pengguna' , path: '/cms/user' }
                ]}
            />
            {/* <button onClick={() => setTime(true)} className='btn3'>Edit User</button> */}
            <div className="Pengguna_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={userData}
                    renderRowSubComponent={renderRowSubComponent}
                />
            </div>
        </div>
    )
}

export default User;
