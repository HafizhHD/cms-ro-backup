// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './listBc.scss'
// import { Formik } from 'formik';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Redirect } from 'react-router-dom';

class EditUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            kirimforum: [],
            message: [],
            indexEdit: null,
            edit: false,
            new: null,
            dataUpdate: [],
            send: false

        }
    }

    componentDidMount() {
        this.daftarMessage()
    }

    daftarMessage = () => {
        let params = {
            whereKeyValues: {
                packageId: "com.byasia.ruangortu"
            }
        };
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/user/userFilter',
            data: params,
        })
            .then(response => {
                console.log(response.data.users);
                this.setState({ message: response.data.users})
            })
            .catch(error => {
                console.log(error + 'ini eror LIST Users');
            });
    }

    onSave = (index) => {
        localStorage.setItem('idUser', this.state.message[index]._id)
        let idkomen = localStorage.getItem('idUser')
        console.log(idkomen)
        console.log(this.state.message[index].nameUser)
        let params =
        {
            whereValues:
                { _id: idkomen },
            newValues:
            {
                phoneNumber: this.refs.email.value ? this.refs.email.value : this.state.message[index].phoneNumber,
                dateCreated: this.state.message[index].dateCreated.split('T')[0],
                userType: this.refs.deskripsi.value ? this.refs.deskripsi.value : this.state.message[index].userType,
                nameUser: this.refs.alamat.value ? this.refs.alamat.value : this.state.message[index].nameUser,
                emailUser: this.refs.status.value ? this.refs.status.value : this.state.message[index].emailUser,
                status: this.refs.new.value ? this.refs.new.value : this.state.message[index].status,
            
            }
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/user/edit',
            data: params,
        })
            .then(response => {
                console.log(response.data.users);
                // alert('Add Broadcast is success')
                let params = {
                    whereKeyValues: {
                        packageId: "com.byasia.ruangortu"
                    }
                };
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/user/userFilter',
                    data: params,
                })
                    .then(response => {
                        console.log(response.data.users);
                        this.setState({ message: response.data.users})
                        this.setState({new : null})
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST Users');
                    });
            })
            .catch(error => {
                console.log(error + 'ini eror edit BC');
            });
    }
    
    showTableBody = () => {
        const { qty } = this.state
        return (
            <tbody>
                {this.state.message.map((item, index) => {
                    if (index == this.state.new) {
                        return (
                            <tr key={index}>
                                <td><input type="text" placeholder={item.emailUser} ref="status"></input></td>
                                <td><input placeholder={item.nameUser}  ref="alamat"></input></td>
                                <td><input placeholder={item.phoneNumber} ref="email"></input></td>
                                <td>{item.dateCreated.split('T')[0]}</td>
                                <td><input placeholder={item.userType} ref="deskripsi"></input></td>
                                <td><input placeholder={item.status} ref="new"></input></td>
                                <td><Button variant="info" className='btn2' onClick={() => this.onSave(index)}>Save</Button></td>
                                <td><Button variant="danger" className='btn' onClick={() => this.setState({ new: null })}>Cancel</Button></td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            <td>{item.emailUser}</td>
                            <td>{item.nameUser}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.dateCreated.split('T')[0]}</td>
                            <td>{item.userType}</td>
                            <td>{item.status}</td>
                            <td><Button variant="warning" className='btn2' onClick={() => this.onEdit(index)}>Edit</Button></td>
                            <td><Button variant="danger" className='btn' onClick={() => this.onDelete(index)}>Delete</Button></td>
                        </tr>
                    )
                })

                }
            </tbody>
        )
    }

    onDelete = (index) => {
        localStorage.setItem('idUser', this.state.message[index]._id)
        let idkomen = localStorage.getItem('idUser')
        console.log(this.state.message[index]._id)
        console.log(idkomen)
        let params =
        {
            whereValues: {
                _id: idkomen,
            }
        };
        let param = {
            userId: idkomen
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/user/remove',
            data: param,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log('suces delete')
                console.log(response.data);
                let params = {
                    whereKeyValues: {
                        packageId: "com.byasia.ruangortu"
                    }
                };
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/user/userFilter',
                    data: params,
                })
                    .then(response => {
                        console.log(response.data.users);
                        this.setState({ message: response.data.users})
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST Users');
                    });
            })
            .catch(error => {
                console.log(error + 'ini delete user');
            });
    }

    onEdit(index) {
        this.setState({ new: index })
        console.log(index) //null
        console.log(this.state.new)
    }

    render() {
        // if (this.state.edit == true) {
        //     return <Redirect to="/cms/notifications-edit" />
        // }
        const { indexEdit } = this.state
        return (
            <div className='div'>
                {/* <NavLink to="/cms/notifications-add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Create New Notification</span>
                </NavLink> */}
                <h1>Edit User</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Nama</th>
                                <th className='h-email'>No Telp</th>
                                <th>Tgl Register</th>
                                <th>Tipe User</th>
                                <th>Status User</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        {this.showTableBody()}
                    </Table>
                </div>
            </div>
        )
    }
}

export default EditUser


