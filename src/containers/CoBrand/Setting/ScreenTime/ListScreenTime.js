// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './addset.scss'
// import { Formik } from 'formik';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap'
import '../../../../components/UI/Table/Table.scss'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Redirect } from 'react-router-dom';
import { ThreeSixty } from '@mui/icons-material';

class ListScreenTime extends React.Component {
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
            send: false,
            cobrandEmail: JSON.parse(localStorage.getItem('userData')).cobrandEmail

        }
    }

    componentDidMount() {
        this.daftarMessage()
    }

    daftarMessage = () => {
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/configurationFilter',
            data: {
                whereKeyValues: {
                    cobrandEmail: this.state.cobrandEmail
                }
            }
        })
            .then(response => {
                // console.log(response.data.Data);
                this.setState({ message: response.data.Data })
            })
            .catch(error => {
                // console.log(error + 'ini eror list screentime');
            });
    }

    // masih bug di save
    onSave = (index) => {
        localStorage.setItem('idUser', this.state.message[index]._id)
        let idkomen = localStorage.getItem('idUser')
        // console.log(idkomen)
        // console.log(this.state.message[index].cobrandEmail)
        let params =
        {
            whereValues:
                { _id: idkomen },
            newKeyValues:
            {
                cobrandEmail : this.refs.alamat.value ? this.refs.alamat.value : this.state.message[index].cobrandEmail,
                dateCreated: this.refs.email.value ? this.refs.email.value : this.state.message[index].dateCreated,
                controlParameterName: this.refs.tempat.value ? this.refs.tempat.value : this.state.message[index].controlParameterName,
                controlParameterValue : this.refs.deskripsi.value ? this.refs.deskripsi.value : this.state.message[index].controlParameterValue,
                // unit: this.refs.unit.value ? this.refs.unit.value : this.state.message[index].unit,
            }
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/configurationUpdate',
            data: params,
        })
            .then(response => {
                // console.log(response.data);
                // console.log(response.data);
                // alert('Add Broadcast is success')
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/configurationFilter',
                })
                    .then(response => {
                        // console.log(response.data.Data);
                        this.setState({ message: response.data.Data })
                        this.setState({new : null})
                    })
                    .catch(error => {
                        // console.log(error + 'ini eror LIST screentime');
                    });
            })
            .catch(error => {
                // console.log(error + 'ini eror edit Screentime');
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
                                <td><input placeholder={item.cobrandEmail}  ref="alamat"></input></td>
                                <td><input placeholder={item.dateCreated} type="datetime-local" ref="email"></input></td>
                                <td><input placeholder={item.controlParameterName} ref="tempat"></input></td>
                                <td><input placeholder={item.controlParameterValue} ref="deskripsi"></input></td>
                                {/* <td><input placeholder={item.unit} ref="unit"></input></td> */}
                                <td><Button variant="info" className='btn998' onClick={() => this.onSave(index)}>Save</Button></td>
                                <td><Button variant="danger" className='btn998' onClick={() => this.setState({ new: null })}>Cancel</Button></td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            {/* <td>{item._id}</td> */}
                            <td>{index + 1}</td>
                            <td>{item.cobrandEmail}</td>
                            <td>{item.dateCreated}</td>
                            <td>{item.controlParameterName}</td>
                            <td>{item.controlParameterValue} {item.unit}</td>
                            {/* <td>{item.unit}</td> */}
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
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/configurationRemove',
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
                    url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/configurationFilter',
                })
                    .then(response => {
                        // console.log(response.data.Data);
                        this.setState({ message: response.data.Data })
                    })
                    .catch(error => {
                        // console.log(error + 'ini eror LIST screentime');
                    });
            })
            .catch(error => {
                // console.log(error + 'ini delete screentime');
            });
    }

    onEdit(index) {
        this.setState({ new: index })
        // console.log(index) //null
        // console.log(this.state.new)
    }

    render() {
        return (
            <div className='div'>
                <NavLink to="/tools/setting/screentime/add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Tambah Standar Screentime</span>
                </NavLink>
                <h1>Standar Screentime</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Cobrand Email</th>
                                <th className='h-email'>Date Create</th>
                                <th>Name</th>
                                <th>Standart Screentime</th>
                                {/* <th>Unit</th> */}
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

export default ListScreenTime


