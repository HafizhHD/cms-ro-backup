// USER
import { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../Program/Table/Table';
import Columns from './columns.js';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Detail from './Detail/Detail';

import Modal from '../../../components/UI/Modal/Modal';

USER-MANAGEMENT
    const [isLoading, setLoading] = useState(true);
    const [userData2, setUserData2] = useState();

    useEffect(() => {
        let params={
            whereKeyValues: {},
            limit: Number.MAX_SAFE_INTEGER
        };
        console.log(localStorage.getItem('userFilter'));
        if(localStorage.getItem('userFilter')) params.whereKeyValues = JSON.parse(localStorage.getItem('userFilter'));
        console.log(params);
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/user/userFilter',
            data: params,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log(response.data);
            setUserData2(response.data.users);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }, []);

    const renderRowSubComponent = useCallback(
        ({ row }) => (
            <Detail userSelected={row.values.emailUser}/>
        ),
        []
    );


    // <h2>USER - management</h2>
    //         <div className="Pengguna_table">
    //                 <TablePengguna
    //                     COLUMNS={columns}
    //                     // DATA={userData2}
    //                     // renderRowSubComponent={renderRowSubComponent}
    //                 />
    //         </div>