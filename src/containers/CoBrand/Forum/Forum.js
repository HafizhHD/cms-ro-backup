// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './Forum.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';

import React from 'react'
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Forum extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            kirimforum : false
           

        }
    }

    componentDidMount() {
    
    }
    addForum = () => {
        let params =
        {
            userEmail: this.refs.email.value,
            cobrandEmail: this.refs.emailco.value,
            subject: this.refs.subject.value,
            comment: this.refs.comment.value,
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/forumAdd',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                alert('Kirim Pesan Berhasil')
                this.setState({kirimforum : true})
                
            })
            .catch(error => {
                console.log(error + 'ini eror addForum DISKUSI');
            });
        
    }
    render() {
        if (this.state.kirimforum == true) {
            return <Redirect to="/cms/forum-moderator" />
        }
        return (
            <div className='div'>
                <h1>Add Forum Diskusi</h1>
                <form className='form'>
                    <label>Email User</label>
                    <input className='input' placeholder=''
                       ref="email"
                    ></input>
                    <br></br>
                    <label>Email Cobrand</label> 
                    <input className='input' placeholder=''
                    ref="emailco"></input>
                    <br></br>
                    <label>Subject</label> 
                    <input className='input' placeholder=''
                    ref="subject"></input>
                    <br></br>
                    <label>Comment</label> 
                    <input className='input' placeholder=''
                    ref="comment"></input>
                </form>
                <Button className='btn' onClick={this.addForum}>Kirim Pesan Forum</Button>
            </div>
        )
    }
}

export default Forum


