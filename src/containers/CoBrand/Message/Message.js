// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './message.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';

import React from 'react'
import { Button } from 'react-bootstrap';

class Message extends React.Component {
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
                <h1>Messaging</h1>
                <form className='form'>
                    <label>User Email</label> <br></br>
                    <input className='input' placeholder=''
                       ref="email"
                    ></input>
                    <br></br>
                    <label>Subject</label> 
                    <input className='input' placeholder=''
                    ref="tempat"></input>
                    <br></br>
                    <label>Message</label> 
                    <input className='input' placeholder=''
                    ref="deskripsi"></input>
                    <br></br>
                    <label>Schedule Time</label> 
                    <input className='input' placeholder=''
                    ref="alamat"></input>
                    <br></br>
                    <label>Media Type </label> 
                    <input className='input' placeholder='Email / Device'
                    ref="status"></input>
                   
                </form>
                <Button className='btn' >Send Message</Button>
            </div>
        )
    }
}

export default Message


