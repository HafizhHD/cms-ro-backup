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
            schedule: false,
            media: 'device',
            useTarget: true,
            destiemail: '',
            kategori: ''


        }
    }

    //

    componentDidMount() {
        console.log(localStorage.getItem('emailTo'))
        console.log(localStorage.getItem('notifContext'))

        let allCheckBox = document.querySelectorAll('.shapes')

        allCheckBox.forEach((checkbox) => {
            checkbox.addEventListener('click', (event) => {
                if (event.target.checked) {
                    console.log(event.target.value)
                    this.setState({ media: event.target.value })
                    console.log(this.state.media)
                }
            })
        })


        let allCheckBox2 = document.querySelectorAll('.shapes2')

        allCheckBox2.forEach((radio) => {
            radio.addEventListener('click', (event) => {
                if (event.target.checked) {
                    console.log(event.target.value)
                    this.setState({ destiemail: event.target.value })
                    console.log(this.state.destiemail)
                }
            })
        })

        let allCheckBox3 = document.querySelectorAll('.shapes3')

        allCheckBox3.forEach((radio) => {
            radio.addEventListener('click', (event) => {
                if (event.target.checked) {
                    console.log(event.target.value)
                    this.setState({ kategori: event.target.value })
                    console.log(this.state.kategori)
                }
            })
        })


    }


    addMessage = () => {
        let cour = ''
        console.log(document.getElementsByName('cour'))
        document.getElementsByName('via').forEach(item => {
            if (item.checked === true) {
                cour += item.value + ' '
            }
            console.log(cour)
        })
        let email = localStorage.getItem('emailTo')
        let subject = localStorage.getItem('notifContext')
        let params =
        {
            destination: email ? email : this.refs.emailto.value || this.state.destiemail  , 
            messageSubject: subject ? subject : this.refs.tempat.value,
            messageContent: this.refs.deskripsi.value,
            scheduleTime: this.refs.alamat.value ? this.refs.alamat.value : "",
            // mediaType: this.state.media,
            mediaType: this.refs.status.value,
            category: this.state.kategori,

        }

        console.log(this.refs.emailto.value)
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/user/broadcastAdd',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                this.setState({ send: true })
                localStorage.removeItem('emailTo')
                localStorage.removeItem('notifContext')

                // alert('Add Broadcast is success')
            })
            .catch(error => {
                console.log(error + 'ini eror add BC');
            });
    }





    render() {
        if (this.state.send == true) {
            return <Redirect to="/cms/notifications" />
        }
        let email = localStorage.getItem('emailTo')
        let subject = localStorage.getItem('notifContext')
        return (

            <div className='div'>
                <h1>Notifikasi</h1>
                <form className='form'>
                    <label>Destination</label> <br></br>
                    <label><input type="checkbox" value="setting" onClick={() => this.setState({ useTarget: !this.state.useTarget })}></input> Penerima </label>
                    <br></br>
                    <textarea className='text' placeholder='Ketik email jika ingin kirim ke user tertentu'
                        ref="emailto" defaultValue={email ? email : ''} type="email"
                    ></textarea>
                    <form  className='form-radio' hidden={this.state.useTarget === true ? true : false}>
                        <input type="radio" id="html" name="fav_language" value={'Semua'} ref="destinaation" class="shapes2"
                        // onClick={() => { setRadio('internal') }}
                        />
                        <label for="internal" >Semua</label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value={'Semua Orang tua'} ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" >Semua Orang tua</label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value={'Semua Anak'} ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" >Semua Anak</label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value={'Anak SD'} ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" >Anak SD</label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value={'Anak SMP'} ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" >Anak SMP</label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value={'Anak SMA'} ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" >Anak SMA</label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value='Anak Pria' ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" >Anak Pria</label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value='Anak Wanita' ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" >Anak Wanita</label>
                        <br></br>
                    </form>

                    <br></br>
                    <label>Judul Pesan</label>
                    {subject ?
                        <input className='input' placeholder=''
                            ref="tempat" defaultValue={subject}></input>
                        :
                        <input className='input' placeholder=''
                            ref="tempat"></input>
                    }
                    <br></br>
                    <label>Pesan</label>
                    <textarea className='text' defaultValue='Kepada Yth '
                        ref="deskripsi"></textarea>
                    <br></br><br></br>
                    <form className='formset'>
                        <label><input type="checkbox" value="setting" onClick={() => this.setState({ schedule: !this.state.schedule })}></input> Pengaturan Jadwal</label>
                        <br></br>
                    </form>
                    {this.state.schedule === true ?
                        <div>
                            <input className='input' placeholder=''
                                ref="alamat" type="date"
                                defaultValue={new Date().toISOString().split('T')[0]}
                            ></input>
                            <br></br>
                        </div>
                        :
                        <div>
                            <input disabled="true" className='input' placeholder=''
                                ref="alamat" type="date"
                                defaultValue={new Date().toISOString().split('T')[0]}
                            ></input>
                            <br></br>
                        </div>

                    }

                    <br></br>
                    <label>Via </label>
                    <br></br>
                    <select ref="status" >
                        <option value="Semua" >Semua</option>
                        <option value="Email" >Email</option>
                        <option value="Device" >Device</option>
                    </select>
                    {/* <input type="checkbox" name="device" class="shapes" value="Device" id="cb-circle" /> <label for="cb-circle">Device</label> <br></br>
                    <input type="checkbox" name="email" class="shapes" value="Email" id="cb-circle" /> <label for="cb-circle">Email</label> <br></br>
                    <input type="checkbox" name="semua" class="shapes" value="Semua" id="cb-circle" /> <label for="cb-circle">Semua</label> <br></br> */}

                    {/* <input className='input' placeholder='Email / Device'
                        ref="status"></input> */}
                    <br></br><br></br>
                    <label className='label'>Kategori</label> <br></br>
                    {/* <select ref="category"> */}
                    <form ref="destinaation" className='form-radio' >
                        <input type="radio" id="html" name="fav_language" value={'Pembayaran'} ref="category" class="shapes3"
                        // onClick={() => { setRadio('internal') }}
                        />
                        <label for="internal" > Pembayaran</label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value={'Pemberitahuan'} ref="category" class="shapes3"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Pemberitahuan</label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value={'Promosi'} ref="category" class="shapes3"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Promosi</label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value={'Informasi & Teknologi '} ref="category" class="shapes3"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Informasi & Teknologi </label>
                        <br></br>
                        <input type="radio" id="html" name="fav_language" value={'Laporan'} ref="category" class="shapes3"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Laporan</label>
                    </form>
                </form>
                <Button className='btn' onClick={this.addMessage}>Send Message</Button>
            </div>
        )
    }
}

export default Message


