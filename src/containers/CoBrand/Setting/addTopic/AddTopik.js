// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './addtopik.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react'
import { Button, Toast } from 'react-bootstrap';

class AddTopik extends React.Component {
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
            topicName: this.refs.email.value,
            dateCreated: this.refs.tempat.value,
            // messageContent: this.refs.deskripsi.value,
            // scheduleTime: this.refs.alamat.value,
            // mediaType: this.refs.status.value,
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cms/contentTopicAdd',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                this.setState({ send: true })
                // alert('Add Broadcast is success')
            })
            .catch(error => {
                console.log(error + 'ini eror add topic');
            });

    }
    render() {
        if (this.state.send == true) {
            return <Redirect to="/tools/setting-topik" />
        }
        return (
            <div className='div'>
                <h1>ADD TOPIC</h1>
                <form className='form'>
                    <label>Topic Category </label> <br></br>
                    <select ref="email">
                        <option value="Topik Agama">Topik Agama</option>
                        <option value="Topik Pendidikan">Topik Pendidikan</option>
                        <option value="Topik Kesehatan">Topik Kesehatan</option>
                        <option value="Topik Keluarga">Topik Keluarga</option>
                        <option value="Topik Berita Internal">Topik Berita Internal</option>
                        <option value="Topik Berita Nasional">Topik Berita Nasional</option>
                        <option value="Topik Berita Dunia">Topik Berita Dunia</option>
                        <option value="Topik Informasi Teknologi">Topik Informasi Teknologi</option>
                        <option value="Topik Olah Raga">Topik Olah Raga</option>
                        <option value="Topik Umum">Topik Umum</option>
                    </select>
                    <br></br>
                    {/* <input className='input' placeholder=''
                        ref="email"
                    ></input> */}
                    <br></br>
                    <label>Date Create</label>
                    <input className='input' placeholder=''
                        ref="tempat" type='datetime-local'></input>
                 

                </form>
                <Button className='btn998' onClick={this.addMessage}>Send Data</Button>
            </div>
        )
    }
}

export default AddTopik


