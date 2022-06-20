import React, { useState, useEffect } from 'react';
import TableDetail from './../../../../../components/UI/Table/Table';
import columns from './columns';
// import Heading from '../../../../../components/UI/Heading/Heading';
import axios from 'axios';
import './Detail.scss';
import { Modal, Button } from 'react-bootstrap'

const URL = `https://as01.prod.ruangortu.id:8080`

// https://rk.defghi.biz.id:8080

const Detail = ({ userSelected }) => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [relativesData, setRelativesData] = useState();
    const [isUpdating, setUpdating] = useState(false);
    const [isDeleting, setDeleting] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    // const handleShow = () => setShow(true);

    useEffect(() => {
        console.log(userSelected);
        let params = {
            whereKeyValues: {
                emailUser: userSelected
            }
        };
        console.log(params);
        axios({
            method: 'post',
            url: `${URL}/api/user/userFilter`,
            data: params,
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log(response.data);
                setUserData(response.data.users[0]);
                let params2 = {
                    whereKeyValues: {}
                };
                if (response.data.users[0].userType === 'parent') {
                    params2 = {
                        whereKeyValues: {
                            parentEmail: userSelected
                        }
                    };
                }
                else if (response.data.users[0].userType === 'child') {
                    params2 = {
                        whereKeyValues: {
                            emailUser: response.data.users[0].parentEmail
                        }
                    }
                }
                console.log(params2);
                axios({
                    method: 'post',
                    url: `${URL}/api/user/userFilter`,
                    data: params2,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response2 => {
                        console.log(response2);
                        setRelativesData(response2.data.users);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                        setLoading(false);
                    })
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, []);


    useEffect(() => {
        if (isUpdating) {
            setLoading(true);
            let stats = userData.status === 'active' ? 'inactive' : 'active';

            let param = {
                whereValues: {
                    emailUser: userData.cobrandEmailUser
                },
                newValues: {
                    status: stats
                }
            }
            console.log(param);
            axios({
                method: 'post',
                url: `${URL}/api/user/edit`,
                data: param,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    console.log("Response data: ", response.data);
                    setUpdating(false);
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error);
                    setUpdating(false);
                });
            setLoading(false);
        }
    }, [isUpdating]);

    useEffect(() => {
        if (isDeleting) {
            setLoading(true);
            let param = {
                userId: userData._id
            }
            console.log(param);
            axios({
                method: 'post',
                url: `${URL}/api/user/remove`,
                data: param,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    console.log("Response data: ", response.data);
                    setDeleting(false);
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error);
                    setDeleting(false);
                });
            setLoading(false);
        }
    }, [isDeleting]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="Detail">
            {/* DIV ORANG TUA/ANAK YANG DIPILIH */}

            <div className="Detail_detail">
                <div className="Detail_detail_photo">
                    <img src={userData.imagePhoto} />
                </div>
                <div className="Detail_detail_detail">
                    <div className="Detail_detail_detail_group">
                        <div className="Detail_detail_detail_group_field">
                            <h5>Nama</h5>
                        </div>
                        <div className="Detail_detail_detail_group_colon">
                            <h5>: </h5>
                        </div>
                        <div className="Detail_detail_detail_group_value">
                            <h5>{userData.nameUser}</h5>
                        </div>
                    </div>
                    <div className="Detail_detail_detail_group">
                        <div className="Detail_detail_detail_group_field">
                            <h5>Tgl. Lahir</h5>
                        </div>
                        <div className="Detail_detail_detail_group_colon">
                            <h5>: </h5>
                        </div>
                        <div className="Detail_detail_detail_group_value">
                            <h5>{userData.birdDate ? userData.birdDate.split('T')[0] : ''}</h5>
                        </div>
                    </div>
                    <div className="Detail_detail_detail_group">
                        <div className="Detail_detail_detail_group_field">
                            <h5>Email</h5>
                        </div>
                        <div className="Detail_detail_detail_group_colon">
                            <h5>: </h5>
                        </div>
                        <div className="Detail_detail_detail_group_value">
                            <h5>{userData.cobrandEmailUser}</h5>
                        </div>
                    </div>
                    <div className="Detail_detail_detail_group">
                        <div className="Detail_detail_detail_group_field">
                            <h5>Peran</h5>
                        </div>
                        <div className="Detail_detail_detail_group_colon">
                            <h5>: </h5>
                        </div>
                        <div className="Detail_detail_detail_group_value">
                            <h5>{userData.userType === 'parent' ? userData.parentStatus : 'Anak'}</h5>
                        </div>
                    </div>
                    <div className="Detail_detail_detail_group">
                        <br />
                    </div>
                    <div className="Detail_detail_detail_button">
                        <div className="Detail_detail_detail_button_active">
                        <button onClick={() => {
                                {userData.status === 'active' ? setShow(true) : setShow1(true)}
                                setShow(true)
                            // {userData.status === 'invitation' ? null : (<button onClick={() => {
                            //     setShow(true)
                                // setUpdating(true);
                            }}>{userData.status === 'active' ? `Set to Inactive` : `Set to Active`}
                            </button>
                        </div>
                        <div className="Detail_detail_detail_group_colon">
                            <h2> </h2>
                        </div>
                        <div className="Detail_detail_detail_button_delete">
                            <button onClick={() => {
                                setDeleting(true);
                            }}>Delete User</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Detail_table">

                {/* DIV ORANG TUA/ANAK YANG MEMILIKI HUBUNGAN DENGAN YANG DIPILIH */}
                <div className="Detail_table_title">
                    <h2>{userData.userType === 'parent' ? 'List Anak' : 'List Orang Tua'}</h2>
                </div>
                <TableDetail
                    COLUMNS={columns}
                    DATA={relativesData}
                />
            </div>
            <Modal show={show} onHide={handleClose} className="modal" >
                <Modal.Header closeButton>
                    <Modal.Title>Non Aktifkan Pengguna</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apakah anda yakin untuk Non-Aktifkan Pengguna ini?</Modal.Body>
                <Button variant="secondary" onClick={handleClose} className="prev">
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => setUpdating(true)}  className="submit">
                    Submit
                </Button>
            </Modal>
            <Modal show={show1} onHide={handleClose1} className="modal" >
                <Modal.Header closeButton>
                    <Modal.Title>Aktifkan Pengguna</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apakah anda yakin untuk Aktifkan Pengguna ini?</Modal.Body>
                <Button variant="secondary" onClick={handleClose1} className="prev">
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => setUpdating(true)}  className="submit">
                    Submit
                </Button>
            </Modal>
        </div>
    )
}

export default Detail;
