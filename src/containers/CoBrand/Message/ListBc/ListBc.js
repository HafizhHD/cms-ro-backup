// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './listBc.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';


class ListBc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            kirimforum: [],
            message: [],
            indexEdit: null

        }
    }

    componentDidMount() {
        this.daftarMessage()

    }

    daftarMessage = () => {
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter',
        })
            .then(response => {
                console.log(response.data.resultData);
                console.log(response.data);
                this.setState({ message: response.data.resultData })
            })
            .catch(error => {
                console.log(error + 'ini eror LIST DISKUSI');
            });
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
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/user/broadcastRemove',
            data: params,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(params)
                console.log(response.data);
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter',
                })
                    .then(response => {
                        console.log(response.data.resultData);
                        this.setState({ message: response.data.resultData })
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST BC');
                    });
            })
            .catch(error => {
                console.log(error + 'ini delete broadcast');
            });
    }

    render() {
        const { indexEdit } = this.state
        return (
            <div className='div'>
                <NavLink to="/cms/messaging-add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Create New Broadcast</span>
                </NavLink>
                <h1>List Message Broadcast</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead> 
                            <tr>
                                <th>Media</th>
                                <th>Time</th>
                                <th className='h-email'>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(this.state.message)} */}
                            {this.state.message ? this.state.message.map((item, index) => {
                                if (indexEdit == index) {
                                    return (
                                        <tr>
                                            <td>{item.mediaType}</td>
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
                                        <td>{item.mediaType}</td>
                                        <td>{item.scheduleTime}</td>
                                        <td>{item.destination}</td>
                                        <td>{item.messageSubject}</td>
                                        <td>{item.messageContent}</td>
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

export default ListBc


