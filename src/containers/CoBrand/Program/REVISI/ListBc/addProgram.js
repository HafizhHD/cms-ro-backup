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
import { Checkbox } from '@mui/material';

class AddProgramRev extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            send: false
        }
    }

    componentDidMount() {
        console.log(localStorage.getItem('emailTo'))
        console.log(localStorage.getItem('notifContext'))
        //cek notif dlu
    }

    handleChange(e) {
        let isChecked = e.target.checked;
        // do whatever you want with isChecked value
    }
    addMessage = () => {
        let params =
        {
            cobrandEmail: this.refs.email.value,
            programName: this.refs.name.value,
            ProgramDescription: this.refs.deskripsi.value,
            programthumnail: "",
            startDate: this.refs.start.value,
            endDate: this.refs.end.value,
            category: [this.refs.category.value],
            targetAudiance: [this.refs.target1.value, this.refs.target2.value, this.refs.target3.value]
        }
        console.log(params.targetAudience)
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/programAdd',
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
    render() {
        if (this.state.send == true) {
            return <Redirect to="/cms/program" />
        }
        return (
            <div>
                <div className='div'>
                    <h1>Add Program</h1>
                    <form className='form'>
                        <label>Cobrand email</label> <br></br>
                        <input className='input' placeholder='admin@asia.ruangortu.id'
                            ref="email" type="email"
                        ></input>
                        <br></br>
                        <label>Title</label>
                        <input className='input' placeholder=''
                            ref="name"></input>
                        <br></br>
                        <label>Program Description</label>
                        <textarea className='text' placeholder='Type here ...'
                            ref="deskripsi"></textarea>
                        <br></br>
                        <label>Start date</label>
                        <input className='input' placeholder=''
                            ref="start" type="datetime-local"></input>
                        <br></br>
                        <label>End date</label>
                        <input className='input' placeholder=''
                            ref="end" type="datetime-local"></input>
                        <br></br>
                        <label>kategory </label>
                        <select ref="category">
                            <option value="Pendidikan Agama">Pendidikan Agama</option>
                            <option value="Pengetahuan Siswa Formal">Pengetahuan Siswa Formal</option>
                            <option value="Pengetahuan Siswa Umum">Pengetahuan Siswa Umum</option>
                            <option value="Informasi & Teknologi">Informasi & Teknologi</option>
                            <option value="Program Pilihan">Program Pilihan</option>
                        </select>
                        <br></br><br></br>
                        <label>Target Audience</label> <br></br>
                        <label>Target 1</label> <br></br>
                        <select ref="target1">
                            <option value="Semua">Semua</option>
                            <option value="Orangtua">Orangtua</option>
                            <option value="Semua Anak">Semua Anak</option>
                            <option value="Siswa SD">Siswa SD</option>
                            <option value="Siswa SMP">Siswa SMP</option>
                            <option value="Siswa SMA">Siswa SMA</option>
                            <option value="Siswa Pria">Siswa Pria</option>
                            <option value="Siswa Wanita">Siswa Wanita</option>
                        </select>
                        <br></br><br></br>
                        <label>Target 2</label> <br></br>
                        <select ref="target2">
                            <option value="">Tidak ada Tambahan</option>
                            <option value="Semua">Semua</option>
                            <option value="Orangtua">Orangtua</option>
                            <option value="Semua Anak">Semua Anak</option>
                            <option value="Siswa SD">Siswa SD</option>
                            <option value="Siswa SMP">Siswa SMP</option>
                            <option value="Siswa SMA">Siswa SMA</option>
                            <option value="Siswa Pria">Siswa Pria</option>
                            <option value="Siswa Wanita">Siswa Wanita</option>
                        </select>
                        <br></br><br></br>
                        <label>Target 3</label> <br></br>
                        <select ref="target3">
                            <option value="">Tidak ada Tambahan</option>
                            <option value="Semua">Semua</option>
                            <option value="Orangtua">Orangtua</option>
                            <option value="Semua Anak">Semua Anak</option>
                            <option value="Siswa SD">Siswa SD</option>
                            <option value="Siswa SMP">Siswa SMP</option>
                            <option value="Siswa SMA">Siswa SMA</option>
                            <option value="Siswa Pria">Siswa Pria</option>
                            <option value="Siswa Wanita">Siswa Wanita</option>
                        </select>
                        {/* <Checkbox type="checkbox" value="Semua" name='Semua' ref="Semua" onChange={e => this.handleChange(e)}/>
                            <label><input type="checkbox" value="Orangtua" ref="Orangtua" onChange={e => this.handleChange(e)}/>Orangtua</label>
                            <label><input type="checkbox" value="Semua Anak" ref="Semua Anak" onChange={e => this.handleChange(e)}/>Semua Anak</label>
                            <label><input type="checkbox" value="Siswa SD"/>Siswa SD</label>
                            <label><input type="checkbox" value="Siswa SMP"/>Siswa SMP</label>
                            <label><input type="checkbox" value="Siswa SMA"/>Siswa SMA</label>
                            <label><input type="checkbox" value="Siswa Pria"/>Siswa Pria</label>
                            <label><input type="checkbox" value="Siswa Wanita"/>Siswa Wanita</label> */}
                    </form>
                    <Button className='btn' onClick={this.addMessage}>Add Program</Button>
                </div>
                <br></br><br></br>
                {/* <div className='div'>
                    <h2>Title</h2>
                    <input className='input' placeholder='Menghafal Surat Pendek'
                        ref="title" 
                    ></input>
                    <h2>Tujuan</h2>
                    <input className='input' placeholder='Siswa-siswi diharapkan dapat menghafal surat pendek di Al-Quran'
                        ref="tujuan" 
                    ></input>
                    <h2>Target Audience</h2>
                    <input className='input' placeholder='Disesuaikan dengan target audience yg sudah di tetapkan'
                        ref="audience" 
                    ></input>
                </div> */}
                <br></br><br></br>
                <div className='div'>
                    <h1>Tahap 1</h1>
                    <form className='form'>
                        <label>Tahap</label> <br></br>
                        <input className='input' placeholder='Tahap 1'
                            ref="tahap" type="email"
                        ></input>
                        <br></br>
                        <label>Nama Program</label>
                        <input className='input' placeholder='Misal : Menghafal Al-Fatihah'
                            ref="nameprogram"></input>
                        <br></br>
                        <label>Jadwal Mulai</label>
                        <input className='input' placeholder=''
                            ref="starttgl" type="datetime-local"></input>
                        <br></br>
                        <label>Jadwal Selesei</label>
                        <input className='input' placeholder=''
                            ref="endtgl" type="datetime-local"></input>
                        <br></br>
                        <label>Multimedia File</label>
                        <textarea className='text' placeholder='Type here ...'
                            ref="deskripsi"></textarea>
                        <br></br>
                        <label>Isi Program</label>
                        <textarea className='text' placeholder='Type here ... (ayat Al-Fatihah - Arabic & Latin)'
                            ref="isiprogram"></textarea>
                        <br></br>
                        <label>Respon 1</label>
                        <textarea className='text' placeholder='Type here ... (saya sudah hafal)'
                            ref="respon1"></textarea>
                        <br></br>
                        <label>Respon 2</label>
                        <textarea className='text' placeholder='Type here ... (saya kesulitan)'
                            ref="respon2"></textarea>
                        <br></br><br></br>
                        {/* <label>No Respon</label> 
                    <textarea className='text' placeholder='Type here ...'
                    ref="deskripsi"></textarea>
                    <br></br> */}
                        <Button className='btn' >Add Tahap</Button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddProgramRev


