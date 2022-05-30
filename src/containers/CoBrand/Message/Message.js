// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './message.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react'
import { Button, Toast } from 'react-bootstrap';

class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            send : false
           

        }
    }

    componentDidMount() {
        console.log(localStorage.getItem('emailTo'))
        console.log(localStorage.getItem('notifContext'))
        //cek notif dlu
    }
    addMessage = () => {
        let params =
        {
            destination: this.refs.email.value,
            messageSubject: this.refs.tempat.value,
            messageContent: this.refs.deskripsi.value,
            scheduleTime: this.refs.alamat.value,
            mediaType: this.refs.status.value,
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/user/broadcastAdd',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                this.setState({send : true})
                

                // alert('Add Broadcast is success')
            })
            .catch(error => {
                console.log(error + 'ini eror add BC');
            });
        
    }
    render() {
        if (this.state.send == true) {
            return <Redirect to="/cms/messaging" />
        }
        return (
            <div className='div'>
                <h1>Notification</h1>
                <form className='form'>
                    <label>Destination</label> <br></br>
                    <input className='input' placeholder=''
                       ref="email" type="email"
                    ></input>
                    <br></br>
                    <label>Subject</label> 
                    <input className='input' placeholder=''
                    ref="tempat"></input>
                    <br></br>
                    <label>Message</label> 
                    <textarea className='text' placeholder='Type here ...'
                    ref="deskripsi"></textarea>
                    <br></br>
                    <label>Schedule Time</label> 
                    <input className='input' placeholder=''
                    ref="alamat" type="datetime-local"></input>
                    <br></br>
                    <label>Media Type </label> 
                    <input className='input' placeholder='Email / Device'
                    ref="status"></input>
                   
                </form>
                <Button className='btn' onClick={this.addMessage}>Send Message</Button>
            </div>
        )
    }
}

export default Message


