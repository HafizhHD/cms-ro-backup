// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './topikset.scss'
// import { Formik } from 'formik';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Redirect } from 'react-router-dom';

class ListTopik extends React.Component {
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
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cms/contentTopicFilter',
        })
            .then(response => {
                console.log(response.data.Data);
                this.setState({ message: response.data.Data })
            })
            .catch(error => {
                console.log(error + 'ini eror LIST Topic');
            });
    }

    // masih bug di save
    onSave = (index) => {
        localStorage.setItem('idUser', this.state.message[index]._id)
        let idkomen = localStorage.getItem('idUser')
        console.log(idkomen)
        console.log(this.state.message[index].topicName)
        let params =
        {
            whereValues:
                { _id: idkomen },
            newKeyValues:
            {
                topicName: this.refs.alamat.value ? this.refs.alamat.value : this.state.message[index].topicName,
                dateCreated: this.refs.email.value ? this.refs.email.value : this.state.message[index].dateCreated

            }
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cms/contentTopicUpdate',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                console.log(response.data);
                // alert('Add Broadcast is success')
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/cms/contentTopicFilter',
                })
                    .then(response => {
                        console.log(response.data.Data);
                        this.setState({ message: response.data.Data })
                        this.setState({new : null})
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST Topic');
                    });
            })
            .catch(error => {
                console.log(error + 'ini eror edit topic');
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
                                {/* <td><input type="text" placeholder={item._id} ref="status"></input></td> */}
                                {/* <td>{item._id}</td> */}
                                <td>{index + 1}</td>
                                <td><input placeholder={item.topicName}  ref="alamat"></input></td>
                                <td><input placeholder={item.dateCreated} type="datetime-local" ref="email"></input></td>
                                {/* <td><input placeholder={item.messageSubject} ref="tempat"></input></td>
                                <td><input placeholder={item.messageContent} ref="deskripsi"></input></td> */}
                                <td><Button variant="info" className='btn2' onClick={() => this.onSave(index)}>Save</Button></td>
                                <td><Button variant="danger" className='btn' onClick={() => this.setState({ new: null })}>Cancel</Button></td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            {/* <td>{item._id}</td> */}
                            <td>{index + 1}</td>
                            <td>{item.topicName}</td>
                            <td>{item.dateCreated}</td>
                            {/* <td>{item.messageSubject}</td>
                            <td>{item.messageContent}</td> */}
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
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cms/contentTopicRemove',
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
                    url: 'https://as01.prod.ruangortu.id:8080/api/cms/contentTopicFilter',
                })
                    .then(response => {
                        console.log(response.data.Data);
                        this.setState({ message: response.data.Data })
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST Topic');
                    });
            })
            .catch(error => {
                console.log(error + 'ini delete topic');
            });
    }

    onEdit(index) {
        this.setState({ new: index })
        console.log(index) //null
        console.log(this.state.new)
    }

    render() {
        if (this.state.edit == true) {
            return <Redirect to="/cms/messaging-edit" />
        }
        const { indexEdit } = this.state
        return (
            <div className='div'>
                <NavLink to="/tools/setting-topik-add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Create New Topic</span>
                </NavLink>
                <h1>List Topic</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Topic Name</th>
                                <th className='h-email'>Date Create</th>
                                {/* <th>Subject</th>
                                <th>Message</th> */}
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

export default ListTopik


