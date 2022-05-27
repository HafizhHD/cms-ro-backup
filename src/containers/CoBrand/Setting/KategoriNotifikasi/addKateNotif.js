// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './addkate.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react'
import { Button, Toast } from 'react-bootstrap';

class AddKategoriNotifikasi extends React.Component {
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
            category: this.refs.category.value,
            dateCreated: this.refs.tempat.value,
            description : this.refs. description.value
            // messageContent: this.refs.deskripsi.value,
            // scheduleTime: this.refs.alamat.value,
            // mediaType: this.refs.status.value,
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cms/notificationCategoryAdd',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                this.setState({ send: true })
                // alert('Add Broadcast is success')
            })
            .catch(error => {
                console.log(error + 'ini eror add KATEGORI notif');
            });

    }
    render() {
        if (this.state.send == true) {
            return <Redirect to="/tools/setting-list-kateNotif" />
        }
        return (
            <div className='div'>
                <h1>ADD Kategory Notification</h1>
                <form className='form'>
                    <label>Category Notification</label> <br></br>
                    <select ref="category">
                        <option value="Pembayaran">Pembayaran</option>
                        <option value="Pemberitahuan">Pemberitahuan</option>
                        <option value="Promosi">Promosi</option>
                        <option value="Informasi & Teknologi">Informasi & Teknologi</option>
                        <option value="Laporan">Laporan</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label>Description</label>
                    <textarea className='input' placeholder=''
                        ref="description"
                    ></textarea>
                    <br></br>
                    <label>Date Create</label>
                    <input className='input' placeholder=''
                        ref="tempat" type='datetime-local'></input>

                </form>
                <Button className='btn' onClick={this.addMessage}>Send Data</Button>
            </div>
        )
    }
}

export default AddKategoriNotifikasi


