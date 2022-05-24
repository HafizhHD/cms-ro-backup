// import { useState, useEffect } from 'react';
// import './User.scss';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import TablePengguna from '../Program/Table/Table';
// import columns from './columns';

// import {connect} from 'react-redux';

import React from 'react'
import axios from 'axios';
import { Table, Button } from 'react-bootstrap'

const URL = `https://as01.prod.ruangortu.id:8080`

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            indexSave: null,
            emailDetail: '',
            dataChild: [],
            dataParent: ''

        }
    }

    componentDidMount() {
        this.getList()

    }
    getList = () => {
        let params = {
            whereKeyValues: {},
            limit: Number.MAX_SAFE_INTEGER
        };
        console.log(localStorage.getItem('userFilter'));
        if (localStorage.getItem('userFilter')) params.whereKeyValues = JSON.parse(localStorage.getItem('userFilter'));
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
                this.setState({ userData: response.data.users })
                console.log(this.state.userData)
            })
            .catch(error => {
                console.log(error + 'ini eror lit user');

            })
    }

    onSave = (index) => {
        this.setState({ indexSave: index })
        localStorage.setItem('idUser', this.state.userData[index].emailUser)
        // console.log(this.state.userData[index].emailUser)
        this.setState({ emailDetail: localStorage.getItem('idUser') })
        // console.log(this.state.emailDetail);
        this.detailUser()
    }

    detailUser = () => {
        console.log(this.state.emailDetail);
        let params = {
            whereKeyValues: {
                emailUser: this.state.emailDetail
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
                console.log(response.data.users[0]);
                this.setState({ dataParent: response.data.users[0] })
                console.log(this.state.dataParent)

                let params2 = {
                    whereKeyValues: {}
                };
                if (response.data.users[0].userType === 'parent') {
                    params2 = {
                        whereKeyValues: {
                            parentEmail: this.state.emailDetail
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
                        console.log(response2.data.users[0]);
                        this.setState({ dataChild: response2.datausers[0] });
                        console.log(this.state.dataChild)
                    })
                    .catch(error => {
                        console.log(error);
                        // setLoading(false);
                    })
            })
            .catch(error => {
                console.log(error + 'eror detail user');
                // setLoading(false);
            })
    }

    detailchild = () => {
        
        return(
            <div>
                {this.detailUser()}
                <h1>ini detail child</h1> 
                {this.setState({indexSave : null})}
            </div>
        )
        // {this.setState({ indexSave: null })}
        // <div>
        //     <div className="Detail_detail_photo">
        //         <img src={this.state.dataParent.imagePhoto} />
        //     </div>
        //     <div className="Detail_detail_detail">
        //         <div className="Detail_detail_detail_group">
        //             <div className="Detail_detail_detail_group_field">
        //                 <h5>Nama</h5>
        //             </div>
        //             <div className="Detail_detail_detail_group_colon">
        //                 <h5>: </h5>
        //             </div>
        //             <div className="Detail_detail_detail_group_value">
        //                 <h5>{this.state.dataChild.nameUser}</h5>
        //             </div>
        //         </div>
        //         <div className="Detail_detail_detail_group">
        //             <div className="Detail_detail_detail_group_field">
        //                 <h5>Tgl. Lahir</h5>
        //             </div>
        //             <div className="Detail_detail_detail_group_colon">
        //                 <h5>: </h5>
        //             </div>
        //             <div className="Detail_detail_detail_group_value">
        //                 {/* <h5>{userData.birdDate ? userData.birdDate.split('T')[0] : ''}</h5> */}
        //             </div>
        //         </div>
        //         <div className="Detail_detail_detail_group">
        //             <div className="Detail_detail_detail_group_field">
        //                 <h5>Email</h5>
        //             </div>
        //             <div className="Detail_detail_detail_group_colon">
        //                 <h5>: </h5>
        //             </div>
        //             <div className="Detail_detail_detail_group_value">
        //                 {/* <h5>{userData.emailUser}</h5> */}
        //             </div>
        //         </div>
        //         <div className="Detail_detail_detail_group">
        //             <div className="Detail_detail_detail_group_field">
        //                 <h5>Peran</h5>
        //             </div>
        //             <div className="Detail_detail_detail_group_colon">
        //                 <h5>: </h5>
        //             </div>
        //             <div className="Detail_detail_detail_group_value">
        //                 {/* <h5>{userData.userType === 'parent' ? userData.parentStatus : 'Anak'}</h5> */}
        //             </div>
        //         </div>
        //         <div className="Detail_detail_detail_group">
        //             <br />
        //         </div>
        //         <div className="Detail_detail_detail_button">
        //             <div className="Detail_detail_detail_button_active">
        //                 {/* <button 
        //                 onClick={() => {
        //                     // {userData.status === 'active' ? setShow(true) : setShow1(true)}
        //                     // setShow(true)
        //                     // {userData.status === 'invitation' ? null : (<button onClick={() => {
        //                     //     setShow(true)
        //                     // setUpdating(true);
        //                 }}>{userData.status === 'active' ? `Set to Inactive` : `Set to Active`}
        //                 </button> */}
        //             </div>
        //             <div className="Detail_detail_detail_group_colon">
        //                 <h2> </h2>
        //             </div>
        //             <div className="Detail_detail_detail_button_delete">
        //                 <button onClick={() => {
        //                     // setDeleting(true);
        //                 }}>Delete User</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    }


    render() {
        const { userData, dataParent } = this.state
        return (
            <div >
                <h1>User</h1>
                <Table  className='komentar' striped bordered hover >
                    <thead>
                        <tr>
                            <th className='h-email'>Nama</th>
                            <th>No Telp</th>
                            <th>Tanggal Registrasi</th>
                            <th>Type User</th>
                            <th>User Status</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(this.state.userData)}
                        {this.state.userData ? this.state.userData.map((item, index) => {
                            if (this.state.indexSave == index) {
                                return (
                                        <tr>
                                            <td>{item.nameUser}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.dateCreated}</td>
                                            <td>{item.userType}</td>
                                            <td>{item.status}</td>
                                            <td><Button variant="info" className='btn'
                                                onClick={() => this.detailchild}>Hide</Button></td>
                                        </tr>

                                )
                            }
                            return (
                                <tr>
                                    <td>{item.nameUser}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.dateCreated}</td>
                                    <td>{item.userType}</td>
                                    <td>{item.status}</td>
                                    <td><Button variant="danger" className='btn'
                                        onClick={() => this.onSave(index)}
                                    >Detail </Button></td>
                                </tr>
                            )
                        })

                            :
                            ''
                        }

                    </tbody>
                    {/* <tbody>
                        {console.log(this.state.userData)}
                        {this.state.userData ? this.state.userData.map((item, index) => (
                            <tr>
                                <td>{item.nameUser}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.dateCreated}</td>
                                <td>{item.userType}</td>
                                <td><Button variant="danger" className='btn' onClick={() => {
                                    this.setState({ indexEdit: item._id});
                                }}>Detail</Button></td>

                            </tr>
                        ))
                            :
                            ''
                        }

                    </tbody>
                     */}
                </Table>
            </div>
        )
    }
}

export default User

