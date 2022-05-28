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

class ListKoment extends React.Component {
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
        const id = localStorage.getItem('contentSelected');
        console.log(id);
        let params =
        {
            whereKeyValues: {
                contentId: id,
            }
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter',
            // data: params,
        })
            .then(response => {
                console.log(response.data.resultData);
                console.log(response.data);
                this.setState({ message: response.data.resultData })
            })
            .catch(error => {
                console.log(error + 'ini eror LIST koment');
            });
    }

    // status 500
    onSave = (index) => {
        localStorage.setItem('idUser', this.state.message[index]._id)
        let idkomen = localStorage.getItem('idUser')
        console.log(idkomen)
        console.log(this.state.message[index].emailUser)
        let params =
        {
            whereValues:
                { _id: idkomen },
            newKeyValues:
            {
                emailUser: this.refs.status.value ? this.refs.status.value : this.state.message[index].emailUser,
                status: this.refs.alamat.value ? this.refs.alamat.value : this.state.message[index].status,
                comment: this.refs.email.value ? this.refs.email.value : this.state.message[index].comment,
                dateCreated: this.refs.tempat.value ? this.refs.tempat.value : this.state.message[index].dateCreated,
                contentId: this.state.message[index].contentId,
            
            }
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentUpdate',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                // alert('Add Broadcast is success')
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter',
                    // data: params,
                })
                    .then(response => {
                        console.log(response.data.resultData);
                        console.log(response.data);
                        this.setState({ message: response.data.resultData })
                        this.setState({new : null})
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST koment');
                    });
            })
            .catch(error => {
                console.log(error + 'ini eror edit koment');
            });
    }
    
    showTableBody = () => {
        const { qty } = this.state
        return (
            <tbody>
                {this.state.message ? this.state.message.map((item, index) => {
                    if (index == this.state.new) {
                        return (
                            <tr key={index}>
                                <td><input type="text" placeholder={item.emailUser} ref="status"></input></td>
                                <td><input placeholder={item.status}  ref="alamat"></input></td>
                                <td><input placeholder={item.comment} ref="email"></input></td>
                                <td><input placeholder={item.dateCreated} ref="tempat" type="datetime-local"></input></td>
                                <td>{item.contentId}</td>
                                {/* <td><input placeholder={item.contentId} ref="deskripsi"></input></td> */}
                                <td><Button variant="info" className='btn2' onClick={() => this.onSave(index)}>Save</Button></td>
                                <td><Button variant="danger" className='btn' onClick={() => this.setState({ new: null })}>Cancel</Button></td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            <td>{item.emailUser}</td>
                            <td>{item.status}</td>
                            <td>{item.comment}</td>
                            <td>{item.dateCreated}</td>
                            <td>{item.contentId}</td>
                            <td><Button variant="warning" className='btn2' onClick={() => this.onEdit(index)}>Edit</Button></td>
                            <td><Button variant="danger" className='btn' onClick={() => this.onDelete(index)}>Delete</Button></td>
                        </tr>
                    )
                })
                : "TIDAQK A"

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
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentRemove',
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
                    url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter',
                })
                    .then(response => {
                        console.log(response.data.resultData);
                        this.setState({ message: response.data.resultData })
                    })
                    .catch(error => {
                        console.log(error + 'ini eror LIST koment');
                    });
            })
            .catch(error => {
                console.log(error + 'ini delete komen');
            });
    }

    onEdit(index) {
        this.setState({ indexEdit: index })
        this.setState({ new: index })
        console.log(this.state.indexEdit)
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
                {/* <NavLink to="/cms/messaging-add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Create New Notification</span>
                </NavLink> */}
                <h1>List Komentar</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Email User</th>
                                <th>Status</th>
                                <th className='h-email'>Komentar</th>
                                <th>Date Create</th>
                                <th>content Id</th>
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

export default ListKoment

