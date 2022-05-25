// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './staff.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react'
import { Button } from 'react-bootstrap';

class ManagementStaff extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            send : false
           
        }
    }

    componentDidMount() {
    
    }
    addStaff = () => {
        let params =
        {
            userName: this.refs.email.value,
            password: this.refs.tempat.value,
            userType: this.refs.deskripsi.value,
            cobrandEmail: this.refs.alamat.value,
            userLevel: this.refs.status.value,
            emailUser: this.refs.lokasi.value,
            phone: this.refs.phone.value
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cms/userAdd',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                this.setState({send : true})
            })
            .catch(error => {
                console.log(error + 'ini eror add cms');
            });
        
    }
    render() {
        if (this.state.send == true) {
            return <Redirect to="/tools/admin-staff-management" />
        }
        return (
            <div className='div'>
                <h1>Daftar Admin</h1>
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
                    ref="phone"></input>
                </form>
                <Button className='btn' onClick={this.addStaff}>Daftar</Button>
            </div>
        )
    }
}

export default ManagementStaff


