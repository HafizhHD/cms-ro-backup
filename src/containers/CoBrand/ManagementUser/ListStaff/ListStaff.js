// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './listStaff.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';


class ListStaff extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            kirimforum: [],
            listForum: [],
            new: null

        }
    }

    componentDidMount() {
        this.daftarAdmin()
    }

    daftarAdmin = () => {
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cms/userFilter',
        })
            .then(response => {
                console.log(response.data.Data);
                this.setState({ listForum: response.data.Data })
            })
            .catch(error => {
                console.log(error + 'ini eror LIST ADMIN');
            });
    }

    onSave = (index) => {
        localStorage.setItem('idUser', this.state.listForum[index]._id)
        let idkomen = localStorage.getItem('idUser')
        console.log(idkomen)
        console.log(this.state.listForum[index].userName)
        let params =
        {
            whereValues:
                { _id: idkomen },
            newKeyValues:
            {
                userName: this.refs.email.value ? this.refs.email.value : this.state.listForum[index].userName,
                // password: this.refs.tempat.value ? this.refs.tempat.value : this.state.listForum[index].password,
                userType: this.refs.deskripsi.value ? this.refs.deskripsi.value : this.state.listForum[index].userType,
                cobrandEmail: this.refs.alamat.valu ? this.refs.alamat.value : this.state.listForum[index].cobrandEmail,
                // userLevel: this.refs.status.value ? this.refs.status.value : this.state.listForum[index].userLevel,
                emailUser: this.refs.lokasi.value ? this.refs.lokasi.value : this.state.listForum[index].emailUser,
                phone: this.refs.phone.value ? this.refs.phone.value : this.state.listForum[index].phone,
            }
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cms/userUpdate',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                // alert('Add Broadcast is success')
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/cms/userFilter',
                })
                    .then(response => {
                        console.log(response.data.Data);
                        this.setState({ listForum: response.data.Data })
                        this.setState({ new: null })
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST ADMIN');
                    });
            })
            .catch(error => {
                console.log(error + 'ini eror edit cms');
            });

    }

    onDelete = (index) => {
        localStorage.setItem('idUser', this.state.listForum[index]._id)
        let idkomen = localStorage.getItem('idUser')
        console.log(this.state.listForum[index]._id)
        console.log(idkomen)
        let params =
        {
            whereValues: {
                _id: idkomen,
            }
        };
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cms/userRemove',
            data: params,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response.data.Data);
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/cms/userFilter',
                })
                    .then(response => {
                        console.log(response.data.Data);
                        this.setState({ listForum: response.data.Data })
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST ADMIN');
                    });
            })
            .catch(error => {
                console.log(error + 'ini delete Cms admin');
            });
    }
    onEdit(index) {
        this.setState({ new: index })
        console.log(index) //null
        console.log(this.state.new)
    }

    render() {
        const { listForum, indexEdit } = this.state
        return (
            <div className='div'>
                <NavLink to="/tools/admin-staff/add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Create New Admin</span>
                </NavLink>
                <h1>List Daftar Admin</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Username</th>
                                <th>User Type</th>
                                <th className='h-email'>Cobrand Email</th>
                                <th>Email User</th>
                                <th>Phone</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(this.state.listForum)} */}
                            {this.state.listForum.map((item, index) => {
                                if (index == this.state.new) {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td><input placeholder={item.userName} ref="email"></input></td>
                                            <td><input placeholder={item.userType} ref="deskripsi"></input></td>
                                            <td><input placeholder={item.cobrandEmail} ref="alamat"></input></td>
                                            <td><input placeholder={item.emailUser} ref="lokasi"></input></td>
                                            <td><input placeholder={item.phone} ref="phone"></input></td>
                                            <td><Button variant="info" className='btn2' onClick={() => this.onSave(index)}>Save</Button></td>
                                            <td><Button variant="danger" className='btn' onClick={() => this.setState({ new: null })}>Cancel</Button></td>
                                        </tr>
                                    )
                                }
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.userType}</td>
                                        <td>{item.cobrandEmail}</td>
                                        <td>{item.emailUser}</td>
                                        <td>{item.phone}</td>
                                        <td><Button variant="warning" className='btn2' onClick={() => this.onEdit(index)}>Edit</Button></td>
                                        <td><Button variant="danger" className='btn' onClick={() => this.onDelete(index)}>Delete</Button></td>
                                    </tr>
                                )
                            })
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ListStaff


