// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './staff.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';

import React from 'react'
import { Button } from 'react-bootstrap';

class ManagementStaff extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
           

        }
    }

    componentDidMount() {
    
    }
    addRedzone = () => {
        let params =
        {
            cobrandEmail: this.refs.email.value,
            placeName: this.refs.tempat.value,
            description: this.refs.deskripsi.value,
            address: this.refs.alamat.value,
            redZoneStatus: this.refs.status.value,
            location: [this.refs.lokasi.value]
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneAdd',
            data: params,
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error + 'ini eror add redzone');
            });
        
    }
    render() {
        return (
            <div className='div'>
                <h1>Add CMS User</h1>
                <form className='form'>
                    <label>Username</label> 
                    <input className='input' placeholder=''
                       ref="email"
                    ></input>
                    <br></br>
                    <label>Password</label> 
                    <input className='input' placeholder=''
                    ref="tempat"></input>
                    <br></br>
                    <label>User Type</label> 
                    <input className='input' placeholder='CS / Cobrand'
                    ref="deskripsi"></input>
                    <br></br>
                    <label>Cobrand Email</label> 
                    <input className='input' placeholder=''
                    ref="alamat"></input>
                    <br></br>
                    <label>User Level</label> 
                    <input className='input' placeholder=''
                    ref="status"></input>
                    <br></br>
                    <label>Email User</label>
                    <input className='input' placeholder=''
                    ref="lokasi"></input>
                    <br></br>
                    <label>Phone</label>
                    <input className='input' placeholder=''
                    ref="lokasi"></input>
                </form>
                <Button className='btn' >Daftar</Button>
            </div>
        )
    }
}

export default ManagementStaff


