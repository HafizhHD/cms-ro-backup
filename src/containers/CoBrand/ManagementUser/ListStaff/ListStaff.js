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
            // indexEdit: null

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

    render() {
        const { listForum, indexEdit } = this.state
        return (
            <div className='div'>
                <NavLink to="/tools/admin-staff-add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Create New Admin</span>
                </NavLink>
                <h1>List Daftar Admin</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>User Type</th>
                                <th className='h-email'>Cobrand Email</th>
                                <th>Email User</th>
                                <th>Phone</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(this.state.listForum)} */}
                            {this.state.listForum ? this.state.listForum.map((item, index) => {
                                if (indexEdit == index) {
                                    return (
                                        <tr>
                                            <td>{item.userType}</td>
                                            <td>{item.cobrandEmail}</td>
                                            <td>{item.subject}</td>
                                            <td>{item.phone}</td>
                                            {/* <td><Button variant="danger" className='btn2' onClick={() => onSave(index)}>Save</Button></td>
                                        <td><Button variant="danger" className='btn' onClick={setIndex(index)}>Cancel</Button></td> */}
                                        </tr>
                                    )
                                }
                                return (
                                    <tr>
                                        <td>{item.userType}</td>
                                        <td>{item.cobrandEmail}</td>
                                        <td>{item.emailUser}</td>
                                        <td>{item.phone}</td>
                                        {/* <td><Button variant="danger" className='btn2' onClick={() => onEdit(index)}>Edit</Button></td> */}
                                        <td><Button variant="danger" className='btn' onClick={() => this.onDelete(index)}>Delete</Button></td>
                                    </tr>
                                )
                            })
                                :
                                ''
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ListStaff


