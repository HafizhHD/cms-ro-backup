import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from '../../../components/UI/Table/Table';
import TablePenggunaCheck from '../../../components/UI/Table/TableUserControl';
import columns from './columns';
import Heading from '../../../components/UI/Heading/Heading'
import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
import './Notification.scss';
import { FiPlus } from 'react-icons/fi';
import { getNotificationList } from '../../../components/API/filter'
// import Detail from './Detail/Detail';
import {emailTester, absStart} from '../GlobalParam'
import { Redirect, NavLink, useHistory } from 'react-router-dom';
import { connect } from 'formik';

const Notification = (
    // isCurLoading,
    // onChildrenControl
) => {
    const history = useHistory();
    const [isLoading, setLoading] = useState(true);
    const [notificationData, setNotificationData] = useState([]);
    const [time, setTime] = useState(false);
    const cobrandComId = JSON.parse(localStorage.getItem('userData')).cobrandComunityId ?? ''

    const controlUsers = (stringEmail, modeAsuh) => {
        setLoading(true);
    }

    useEffect(() => {
        let params=cobrandComId ? {
            whereKeyValues: {
                appId: "com.byasia.ruangortu",
                cobrandComunityId: cobrandComId,
                category: {
                    "$nin": ['Informasi']
                }
            },
            orderKeyValues: {
                scheduleTime: -1
            },
            limit: Number.MAX_SAFE_INTEGER
        } : {
            whereKeyValues: {
                appId: "com.byasia.ruangortu",
                category: {
                    "$nin": ['Informasi']
                }
            },
            orderKeyValues: {
                scheduleTime: -1
            },
            limit: Number.MAX_SAFE_INTEGER
        };
        // console.log(params);
        getNotificationList(params)
        .then(response => {
            console.log(response.data);
            setNotificationData(response.data.resultData);
            setLoading(false);
        })
        .catch(error => {
            // console.log(error);
            setLoading(false);
        })
    }, []);

    // const renderRowSubComponent = useCallback(
    //     ({ row }) => (
    //         <Detail userSelected={row.values.emailUser}/>
            
    //     ),
    //     []
    // );

    if(isLoading) {
        return <RKLoader />;
    }
    return (
        <div className="Notification">
            <Heading
                headingName="Notifikasi"
                routes={[
                    { name: 'Manajemen Data'},
                    { name: 'Notifikasi' , path: '/cms/notifications' }
                ]}
            />
            <NavLink to="/cms/notifications/add" id="add_content">
                <FiPlus className="IconAdd" />
               <span>Buat Notifikasi Baru</span>  
            </NavLink>
            {/* <button onClick={() => setTime(true)} className='btn3'>Edit User</button> */}
            <div className="Notification_table">
                <TablePengguna
                    COLUMNS={columns}
                    DATA={notificationData}
                    // renderRowSubComponent={renderRowSubComponent}
                    // showCheckbox={sekolah === '' && cobrandComId === '' && groupMitraAsuhId === '' ? false : true}
                    // controlUsers={controlUsers}
                />
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     // console.log(state.auth.isLoading);
//     return {
//         isCurLoading: state.auth.isLoading
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onChildrenControl: ( stringEmail, modeAsuh, history ) =>
//             dispatch(childrenControl( stringEmail, modeAsuh, history ))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (User);
export default Notification;
