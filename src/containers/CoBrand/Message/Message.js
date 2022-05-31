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
            send: false,
            schedule: ""


        }
    }

    componentDidMount() {
        console.log(localStorage.getItem('emailTo'))
        console.log(localStorage.getItem('notifContext'))
        //cek notif dlu
    }
    addMessage = () => {
        let email = localStorage.getItem('emailTo')
        let subject = localStorage.getItem('notifContext')
        let params =
        {
            destination: email ? email : this.refs.destinaation.value,
            messageSubject: subject ? subject : this.refs.tempat.value,
            messageContent: this.refs.deskripsi.value,
            scheduleTime: this.refs.alamat.value ? this.refs.alamat.value : "",
            mediaType: this.refs.status.value,
            category: this.refs.category.value,
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/user/broadcastAdd',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                this.setState({ send: true })


                // alert('Add Broadcast is success')
            })
            .catch(error => {
                console.log(error + 'ini eror add BC');
            });
    }

    // showSChedule = () => {
    //         this.state.schedule === true
    //         return (
    //             <div>
    //                 <label>Schedule Time</label>
    //                 <input className='input' placeholder=''
    //                     ref="alamat" type="datetime-local"></input>
    //                 <br></br>
    //             </div>
    //         )
    //     }
    // }

    render() {
        if (this.state.send == true) {
            return <Redirect to="/cms/messaging" />
        }
        let email = localStorage.getItem('emailTo')
        let subject = localStorage.getItem('notifContext')
        return (

            <div className='div'>
                <h1>Notification</h1>
                <form className='form'>
                    <label>Destination</label> <br></br>
                    {email ?
                        <input className='input' placeholder=''
                            ref="destinaation" value={email} type="email"
                        ></input>
                        :
                        <input className='input' placeholder=''
                            ref="destinaation" type="email"
                        ></input>
                    }

                    <br></br>
                    <label>Subject</label>
                    {subject ? 
                    <input className='input' placeholder=''
                    ref="tempat" value={subject}></input>
                    :
                    <input className='input' placeholder=''
                        ref="tempat"></input>
                    }
                    <br></br>
                    <label>Message</label>
                    <textarea className='text' placeholder='Type here ...'
                        ref="deskripsi"></textarea>
                    <br></br>
                    {/* <label>Set schedule</label> */}
                    {/* <select>
                        <option value="setting" onClick={() => this.setState({ schedule: "set" })}>Setting Schedule</option>
                        <option value="no-schedule" onClick={() => this.setState({ schedule: "notset"})}>No Setting Schedule</option>
                    </select> */}
                    <form className='formset'>
                        <label>Set schedule  <input type="radio" value="setting" onClick={() => this.setState({ schedule: "set" })}></input></label>
                        <br></br>
                        <label>No set schedule  <input type="radio" ref="alamat" value="no-schedule" onClick={() => this.setState({ schedule: "notset" })}></input></label>
                    </form>
                    {this.state.schedule === "set" ?
                        <div>
                            <label>Schedule Time</label>
                            <input className='input' placeholder=''
                                ref="alamat" type="datetime-local"></input>
                            <br></br>
                        </div>
                        : ""
                    }
                    <br></br>
                    <label>Media Type </label>
                    <select className='select' ref="status">
                        <option value="email" >Email</option>
                        <option value="device" >Device</option>
                        <option value="device & email" >All</option>
                    </select>
                    {/* <input className='input' placeholder='Email / Device'
                        ref="status"></input> */}
                    <br></br><br></br>
                    <label className='label'>Category Notification</label> <br></br>
                    <select ref="category">
                        <option value="Pembayaran">Pembayaran</option>
                        <option value="Pemberitahuan">Pemberitahuan</option>
                        <option value="Promosi">Promosi</option>
                        <option value="Informasi & Teknologi">Informasi & Teknologi</option>
                        <option value="Laporan">Laporan</option>
                    </select>
                </form>
                <Button className='btn' onClick={this.addMessage}>Send Message</Button>
            </div>
        )
    }
}

export default Message


