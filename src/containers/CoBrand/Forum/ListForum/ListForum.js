// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './listForum.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';


class ListForum extends React.Component {
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
        this.daftarForum()
    }

    daftarForum = () => {
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/forumFilter',
        })
            .then(response => {
                console.log(response.data.Data);
                this.setState({ listForum: response.data.Data })
            })
            .catch(error => {
                console.log(error + 'ini eror LIST DISKUSI');
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
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/forumRemove',
            data: params,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response.data.Data);
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/forumFilter',
                })
                    .then(response => {
                        console.log(response.data.Data);
                        this.setState({ listForum: response.data.Data })
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST DISKUSI');
                    });
            })
            .catch(error => {
                console.log(error + 'ini delete forum DISKUSI');
            });
    }

    render() {
        const { listForum, indexEdit } = this.state
        return (
            <div className='div'>
                <NavLink to="/cms/forum-add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Create New Forum</span>
                </NavLink>
                <h1>List Forum Diskusi</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>ID List Forum</th>
                                <th className='h-email'>Cobrand Email</th>
                                <th>Subject</th>
                                <th>Comment</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(this.state.listForum)} */}
                            {this.state.listForum ? this.state.listForum.map((item, index) => {
                                if (indexEdit == index) {
                                    return (
                                        <tr>
                                            <td>{item._id}</td>
                                            <td>{item.cobrandEmail}</td>
                                            <td>{item.subject}</td>
                                            <td>{item.comment}</td>
                                            {/* <td><Button variant="danger" className='btn2' onClick={() => onSave(index)}>Save</Button></td>
                                        <td><Button variant="danger" className='btn' onClick={setIndex(index)}>Cancel</Button></td> */}
                                        </tr>
                                    )
                                }
                                return (
                                    <tr>
                                        <td>{item._id}</td>
                                        <td>{item.cobrandEmail}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.comment}</td>
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

export default ListForum


