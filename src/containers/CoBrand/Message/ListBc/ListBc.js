// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './listBc.scss'
// import { Formik } from 'formik';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap'
import '../../../../components/UI/Table/Table.scss'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Redirect } from 'react-router-dom';

class ListBc extends React.Component {
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
            url: 'https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter',
            data: {limit: Number.MAX_SAFE_INTEGER}
        })
            .then(response => {
                console.log(response.data.resultData);
                // console.log(response.data);
                this.setState({ message: response.data.resultData })
            })
            .catch(error => {
                // console.log(error + 'ini eror LIST DISKUSI');
            });
    }

    onSave = (index) => {
        localStorage.setItem('idUser', this.state.message[index]._id)
        let idkomen = localStorage.getItem('idUser')
        // console.log(idkomen)
        // console.log(this.state.message[index].destination)
        let params =
        {
            whereValues:
                { _id: idkomen },
            newKeyValues:
            {
                destination: this.refs.email.value ? this.refs.email.value : this.state.message[index].destination,
                messageSubject: this.refs.tempat.value ? this.refs.tempat.value : this.state.message[index].messageSubject,
                messageContent: this.refs.deskripsi.value ? this.refs.deskripsi.value : this.state.message[index].messageContent,
                scheduleTime: this.refs.alamat.value ? this.refs.alamat.value : this.state.message[index].scheduleTime,
                mediaType: this.refs.status.value ? this.refs.status.value : this.state.message[index].mediaType,
                category: this.refs.category.value ? this.refs.category.value : this.state.message[index].category,

            }
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/user/broadcastUpdate',
            data: params,
        })
            .then(response => {
                // console.log(response.data);
                // console.log(response.data);
                // alert('Add Broadcast is success')
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter',
                    data: {limit: Number.MAX_SAFE_INTEGER}
                })
                    .then(response => {
                        // console.log(response.data.resultData);
                        // console.log(response.data);
                        this.setState({ message: response.data.resultData })
                        this.setState({ new: null })
                        // this.setState({send : true})
                    })
                    .catch(error => {
                        // console.log(error + 'ini eror LIST DISKUSI');
                    });
            })
            .catch(error => {
                // console.log(error + 'ini eror edit BC');
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
                                {/* <td><input type="text" placeholder={item.mediaType} ref="status"></input></td> */}
                                <td>
                                    <select className='select' ref="status">
                                        <option value="Email" >Email</option>
                                        <option value="Device" >Device</option>
                                        <option value="Semua" >Semua</option>
                                    </select>
                                </td>
                                <td><input placeholder={item.scheduleTime} type="datetime-local" ref="alamat"></input></td>
                                <td><input placeholder={item.destination} ref="email"></input></td>
                                <td><input placeholder={item.messageSubject} ref="tempat"></input></td>
                                {/* <td><input placeholder={item.category} ref="category"></input></td> */}
                                <td>
                                    <select ref="category">
                                        <option value="Pembayaran">Pembayaran</option>
                                        <option value="Pemberitahuan">Pemberitahuan</option>
                                        <option value="Promosi">Promosi</option>
                                        <option value="Informasi & Teknologi">Informasi & Teknologi</option>
                                        <option value="Laporan">Laporan</option>
                                    </select>
                                </td>
                                <td><input placeholder={item.messageContent} ref="deskripsi"></input></td>
                                <td><Button variant="info" className='btn998' onClick={() => this.onSave(index)}>Save</Button></td>
                                <td><Button variant="danger" className='btn998' onClick={() => this.setState({ new: null })}>Cancel</Button></td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            <td>{item.mediaType}</td>
                            <td>{item.scheduleTime}</td>
                            <td>{item.destination.slice(0, 30) + (item.destination.length > 30 ? "..." : "")}</td>
                            <td>{item.messageSubject}</td>
                            <td>{item.category}</td>
                            <td>{item.messageContent}</td>
                            <td><Button variant="warning" className='btn998' onClick={() => this.onEdit(index)}>Edit</Button></td>
                            <td><Button variant="danger" className='btn998' onClick={() => this.onDelete(index)}>Delete</Button></td>
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
        // console.log(this.state.message[index]._id)
        // console.log(idkomen)
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
                // console.log(params)
                // console.log(response.data);
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter',
                    data: {limit: Number.MAX_SAFE_INTEGER}
                })
                    .then(response => {
                        // console.log(response.data.resultData);
                        this.setState({ message: response.data.resultData })
                    })
                    .catch(error => {
                        // console.log(error + 'ini eror LIST BC');
                    });
            })
            .catch(error => {
                // console.log(error + 'ini delete broadcast');
            });
    }

    onEdit(index) {
        this.setState({ indexEdit: index })
        this.setState({ new: index })
        // console.log(this.state.indexEdit)
        // console.log(index) //null
        // console.log(this.state.new)
    }

    render() {
        if (this.state.edit == true) {
            return <Redirect to="/cms/notifications/add" />
        }
        const { indexEdit } = this.state
        return (
            <div className='div'>
                <NavLink to="/cms/notifications/add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Buat Notifikasi Baru</span>
                </NavLink>
                <h1>List Notification</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Media</th>
                                <th>Time</th>
                                <th className='h-email'>Destination</th>
                                <th>Subject</th>
                                <th>Category</th>
                                <th>Message</th>
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

export default ListBc


