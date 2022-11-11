import React, { useState, useEffect, useCallback } from 'react';
import TablePengguna from './../../../components/UI/Table/Table';
import columns from './columns';
import Heading from './../../../components/UI/Heading/Heading'
import RKLoader from './../../../components/UI/RKLoaderInner/RKLoader';
import './User.scss';
import { getUserList, getCommunityMemberList, getSchoolGroupList } from './../../../components/API/filter'
import Detail from './Detail/Detail';
import {emailTester, absStart} from '../GlobalParam'
import { Redirect } from 'react-router-dom';

const User = () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    const [time, setTime] = useState(false);
    const cobrandComId = JSON.parse(localStorage.getItem('userData')).cobrandComunityId
    const groupMitraAsuhId = JSON.parse(localStorage.getItem('userData')).groupMitraAsuhId
    const sekolah = JSON.parse(localStorage.getItem('userData')).sekolah

    useEffect(() => {
        let params=cobrandComId ? {
            whereKeyValues: {
                packageId: "com.byasia.ruangortu",
                // cobrandComunityId: cobrandComId,
                dateCreated: {
                    "$gte": absStart.toISOString().split("T")[0]
                },
                emailUser: {
                    "$nin": emailTester
                }
            },
            orderKeyValues: {
                nameUser: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        } : {
            whereKeyValues: {
                packageId: "com.byasia.ruangortu",
                dateCreated: {
                    "$gte": absStart.toISOString().split("T")[0]
                },
                emailUser: {
                    "$nin": emailTester
                }
            },
            orderKeyValues: {
                nameUser: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        };
        // console.log(params);
        getUserList(params)
        .then(response => {
            console.log(response.data);
            if(sekolah) {
                console.log('Ini sekolah: ' + sekolah);
                let users = [];
                for(var i = 0; i < response.data.users.length; i++){
                    console.log('EmailUser user: ' + response.data.users[i].emailUser)
                    if(sekolah === response.data.users[i].sekolah){
                        users.push(response.data.users[i]);
                    }
                }
                setUserData(users);
                setLoading(false);
            }
            else if(groupMitraAsuhId) {
                console.log('Ini grupMA ' + groupMitraAsuhId);
                let param = {
                    whereKeyValues: {
                        groupMitraAsuhId: groupMitraAsuhId
                    }
                }
                getSchoolGroupList(param)
                .then(res => {
                    console.log(res.data);
                    let x = res.data.Data[0].memberSekolah
                    let users = [];
                    for(var i = 0; i < response.data.users.length; i++){
                        console.log('EmailUser user: ' + response.data.users[i].emailUser)
                        for(var j = 0; j < x.length; j++) {
                            console.log('Sekolaa ' + x[j]);
                            if(x[j] === response.data.users[i].sekolah){
                                users.push(response.data.users[i]);
                                break;
                            }
                        }
                    }
                    setUserData(users);
                    setLoading(false);
                })
            }
            else if(cobrandComId) {
                console.log('Ini comunityId: ' + cobrandComId);
                let param = {
                    whereKeyValues: {
                        cobrandComunityId: {
                            '$regex': cobrandComId
                        }
                    }
                }
                getCommunityMemberList(param)
                .then(res => {
                    console.log(res.data);
                    let users = [];
                    for(var i = 0; i < response.data.users.length; i++){
                        console.log('EmailUser user: ' + response.data.users[i].emailUser)
                        for(var j = 0; j < res.data.Data.length; j++) {
                            console.log('EmailUser komun: ' + res.data.Data[j].emailUser);
                            if(res.data.Data[j].emailUser === response.data.users[i].emailUser){
                                users.push(response.data.users[i]);
                                break;
                            }
                        }
                    }
                    setUserData(users);
                    setLoading(false);
                })
            }
            else {
                setUserData(response.data.users);
                setLoading(false);
            }
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
