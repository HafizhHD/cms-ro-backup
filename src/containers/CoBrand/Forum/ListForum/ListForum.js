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
            new: null,

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

    onSave = (index) => {
        localStorage.setItem('idUser', this.state.listForum[index]._id)
        let idkomen = localStorage.getItem('idUser')
        console.log(idkomen)
        console.log(this.state.listForum[index].userEmail)
        let params =
        {
            whereValues:
                { _id: idkomen },
            newKeyValues:
            {
                // userEmail: this.refs.email.value ? this.refs.email.value : this.state.listForum[index].userEmail,
                cobrandEmail: this.refs.emailco.value ? this.refs.emailco.value : this.state.listForum[index].cobrandEmail,
                subject: this.refs.subject.value ? this.refs.subject.value : this.state.listForum[index].subject,
                comment: this.refs.comment.value ? this.refs.comment.value : this.state.listForum[index].comment,
            }
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/forumUpdate',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                // alert('Add Broadcast is success')
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/forumFilter',
                })
                    .then(response => {
                        console.log(response.data.Data);
                        this.setState({ listForum: response.data.Data })
                        this.setState({ new: null })
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST DISKUSI');
                    });
            })
            .catch(error => {
                console.log(error + 'ini eror edit BC');
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

    onEdit(index) {
        this.setState({ new: index })
        console.log(index) //null
        console.log(this.state.new)
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
                                if (index == this.state.new) {
                                    return (
                                        <tr>
                                            <td>{item._id}</td>
                                            <td><input placeholder={item.cobrandEmail} ref="emailco"></input></td>
                                            <td><input placeholder={item.subject} ref="subject"></input></td>
                                            <td><input placeholder={item.comment} ref="comment"></input></td>
                                            <td><Button variant="info" className='btn2' onClick={() => this.onSave(index)}>Save</Button></td>
                                            <td><Button variant="danger" className='btn' onClick={() => this.setState({ new: null })}>Cancel</Button></td>
                                        </tr>
                                    )
                                }
                                return (
                                    <tr>
                                        <td>{item._id}</td>
                                        <td>{item.cobrandEmail}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.comment}</td>
                                        <td><Button variant="warning" className='btn2' onClick={() => this.onEdit(index)}>Edit</Button></td>
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


