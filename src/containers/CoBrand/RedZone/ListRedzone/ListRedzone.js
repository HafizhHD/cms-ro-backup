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
// import Heading from './../../../../components/UI/Heading/Heading';
import MapComponent, { accessToken } from './../../../../components/UI/Map/Map';
import InputComponent from './../../../../components/UI/Input/Input';
class ListRedzone extends React.Component {
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
            send: false.valueOf,
            mapSeacrh :''

        }
    }

    componentDidMount() {
        this.daftarMessage()
    }

    daftarMessage = () => {
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneFilter',
        })
            .then(response => {
                // console.log(response.data.Data);
                this.setState({ message: response.data.Data })
            })
            .catch(error => {
                // console.log(error + 'ini eror LIST redzone');
            });
    }

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
                cobrandEmail: this.refs.status.value ? this.refs.status.value : this.state.message[index].cobrandEmail,
                address: this.refs.tempat.value ? this.refs.tempat.value : this.state.message[index].address,
                location: this.refs.alamat.value ? this.refs.alamat.value : this.state.message[index].location,
                redZoneStatus: this.refs.email.value ? this.refs.email.value : this.state.message[index].redZoneStatus,

            }
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneUpdate',
            data: params,
        })
            .then(response => {
                // console.log(response.data);
                // alert('Add Broadcast is success')
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneFilter',
                })
                    .then(response => {
                        // console.log(response.data.Data);
                        this.setState({ message: response.data.Data })
                        this.setState({ new: null })
                    })
                    .catch(error => {
                        // console.log(error + 'ini eror LIST redzone');
                    });
            })
            .catch(error => {
                // console.log(error + 'ini eror edit redzone');
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
                                <td>{index + 1}</td>
                                <td><input type="text" placeholder={item.cobrandEmail} ref="status"></input></td>
                                <td><input placeholder={item.location} ref="alamat"></input></td>
                                <td><input placeholder={item.redZoneStatus} ref="email"></input></td>
                                <td><input placeholder={item.address} ref="tempat"></input></td>
                                <td><Button variant="info" className='btn2' onClick={() => this.onSave(index)}>Save</Button></td>
                                <td><Button variant="danger" className='btn' onClick={() => this.setState({ new: null })}>Cancel</Button></td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.cobrandEmail}</td>
                            <td>{item.location}</td>
                            <td>{item.redZoneStatus}</td>
                            <td>{item.address}</td>
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
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneRemove',
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
                    url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneFilter',
                })
                    .then(response => {
                        // console.log(response.data.Data);
                        this.setState({ message: response.data.Data })
                        this.setState({ new: null })
                    })
                    .catch(error => {
                        // console.log(error + 'ini eror LIST redzone');
                    });
            })
            .catch(error => {
                // console.log(error + 'ini delete broadcast');
            });
    }

    onEdit(index) {
        this.setState({ new: index })
        // console.log(index) //null
        // console.log(this.state.new)
    }

    render() {
        if (this.state.edit == true) {
            return <Redirect to="/cms/notifications-edit" />
        }
        const { indexEdit } = this.state
        return (
            <div className='div'>
                {/* <Heading headingName="Redzone" routes={[
                    { name: 'Data Redzone' },
                    { path: '/redzone', name: 'List Redzone' }
                ]} /> */}

                {/* <div className="RedZone__map">
                    <div className="RedZone__heading">
                        <h3>Map View</h3>
                        <InputComponent
                            className="Input-control"
                            type="text"
                            placeholder="Search"
                            name="search"
                            onChange={(e) => {
                                // console.log(e.currentTarget.value);
                                let urlBuilder = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(e.currentTarget.value) + '.json?access_token=' + accessToken;
                                axios({
                                    method: 'get',
                                    url: urlBuilder
                                })
                                    .then(response => {
                                        //// console.log("Response data: ", response.data);
                                        this.setState({mapSeacrh : response.data.features[0]});
                                    })
                                    .catch(error => {
                                        // console.log(error);
                                    });
                            }}
                        />
                    </div>
                    <div className="RedZone__data">
                        <MapComponent search={this.state.mapSearch} />
                    </div>
                </div> */}
                <NavLink to="/cms/redzone/add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Create New Redzone</span>
                </NavLink>
                <h1>List Redzone</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Cobrand Email</th>
                                <th className='h-email'>Location</th>
                                <th>Status</th>
                                <th>Address</th>
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

export default ListRedzone


