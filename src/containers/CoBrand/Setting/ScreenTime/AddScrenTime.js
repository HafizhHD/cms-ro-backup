// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './addaudi.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react'
import { Button, Toast } from 'react-bootstrap';

class AddScreenTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            send: false


        }
    }

    componentDidMount() {

    }
    addMessage = () => {
        let params =
        {
            cobrandEmail : this.refs.email.value, 
            dateCreated: this.refs.date.value, 
            controlParameterName: this.refs.status.value, 
            controlParameterValue : this.refs.time.value, 
            unit: "jam"
        
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/configurationAdd',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                this.setState({ send: true })
                // alert('Add Broadcast is success')
            })
            .catch(error => {
                console.log(error + 'ini eror add screentime');
            });

    }
    render() {
        if (this.state.send == true) {
            return <Redirect to="/tools/setting-list-screentime" />
        }
        return (
            <div className='div'>
                <h1>ADD ScreenTime</h1>
                <form className='form'>
                    <label>Cobrand Email</label>
                    <input className='input' placeholder='cobrand email'
                        ref="email"
                    ></input>
                    <br></br>
                    <label>Date Create</label>
                    <input className='input' placeholder=''
                        ref="date" type='datetime-local'></input>
                    <br></br>
                    <label>Name </label> 
                    <input className='input' placeholder='SD / SMP / SMA'
                    ref="status"></input>
                    <br></br>
                    <label>Time </label> 
                    <input className='input' placeholder='10'
                    ref="time"></input>

                </form>
                <Button className='btn998' onClick={this.addMessage}>Send Data</Button>
            </div>
        )
    }
}

export default AddScreenTime


