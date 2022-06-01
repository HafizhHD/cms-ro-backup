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
const userData = JSON.parse(localStorage.getItem('userData'));

class AddProgramRev extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            send: false,  
            media: '',
            useTarget : true,
            destiemail : '',
            kategori : '',
            useTarget2 : true,
        }
    }

    componentDidMount() {
        console.log(localStorage.getItem('emailTo'))
        console.log(localStorage.getItem('notifContext'))
        //cek notif dlu

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
            category: [this.state.kategori],
            targetAudiance: [this.state.destiemail]
        }
        // console.log(params.targetAudience)
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
                    <h1>Tambah Program</h1>
                    <form className='form'>
                        <label>Email</label> <br></br>
                        <input className='input'
                            ref="email" type="email" defaultValue={userData.email}
                        ></input>
                        <br></br>
                        <label>Judul</label>
                        <input className='input' placeholder='Judul Program'
                            ref="name"></input>
                        <br></br>
                        <label>Deskripsi</label>
                        <textarea className='text' placeholder='Deskripsi program'
                            ref="deskripsi"></textarea>
                        <br></br>
                        <label>Tanggal Mulai</label>
                        <input className='input' placeholder=''
                            ref="start" type="date" defaultValue={new Date().toISOString().split('T')[0]}></input>
                        <br></br>
                        <label>Tanggal Akhir</label>
                        <input className='input' placeholder=''
                            ref="end" type="date" defaultValue={new Date().toISOString().split('T')[0]}></input>
                        <br></br>
                        <label className='label'>Kategori</label> <br></br>
                    {/* <select ref="category"> */}
                    <form  ref="destinaation" className='form-radio' >
                        <input type="checkbox" id="html" name="fav_language" value={'Pendidikan Agama'} ref="category" class="shapes3"
                        // onClick={() => { setRadio('internal') }}
                        />
                        <label for="internal" > Pendidikan Agama</label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value={'Pengetahuan Siswa Formal'} ref="category" class="shapes3"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Pengetahuan Siswa Formal</label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value={'Pengetahuan Siswa Umum'} ref="category" class="shapes3"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Pengetahuan Siswa Umum</label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value={'Informasi & Teknologi '} ref="category" class="shapes3"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Informasi & Teknologi </label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value={'Program Pilihan'} ref="category" class="shapes3"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Program Pilihan</label>
                    </form>
                        <br></br>
                        <label>Audience</label> <br></br>
                    <form  ref="destinaation" className='form-radio' >
                        <input type="checkbox" id="html" name="fav_language" value={'Semua'} ref="destinaation" class="shapes2"
                        // onClick={() => { setRadio('internal') }}
                        />
                        <label for="internal" > Semua</label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value={'Semua Orang tua'} ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Semua Orang tua</label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value={'Semua Anak'} ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Semua Anak</label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value={'Anak SD'} ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Anak SD</label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value={'Anak SMP'} ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Anak SMP</label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value={'Anak SMA'} ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Anak SMA</label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value='Anak Pria' ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Anak Pria</label>
                        <br></br>
                        <input type="checkbox" id="html" name="fav_language" value='Anak Wanita' ref="destinaation" class="shapes2"
                        // onClick={() => setRadio('url')}
                        />
                        <label for="url" > Anak Wanita</label>
                        <br></br>
                    </form>
                </form>
                    <form className='form'>
                        <label>Tahapan</label> <br></br>
                        <input className='input' placeholder='Judul Tahapan'
                            ref="tahap" type="email"
                        ></input>
                        <br></br>
                        <label>Nama Program</label>
                        <input className='input' placeholder='Misal : Menghafal Al-Fatihah'
                            ref="nameprogram"></input>
                        <br></br>
                        <label>Jadwal Mulai</label>
                        <input className='input' placeholder=''
                            ref="starttgl" type="date" defaultValue={new Date().toISOString().split('T')[0]}></input>
                        <br></br>
                        <label>Jadwal Selesei</label>
                        <input className='input' placeholder=''
                            ref="endtgl" type="date" defaultValue={new Date().toISOString().split('T')[0]}></input>
                        <br></br>
                        {/* <label>Multimedia File</label>
                        <textarea className='text' placeholder='Type here ...'
                            ref="deskripsi"></textarea>
                        <br></br> */}
                        <label>Isi Program</label>
                        <textarea className='text' placeholder='Misal : ayat Al-Fatihah - Arabic & Latin'
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
                    <label><input type="checkbox" value="setting" onClick={() => this.setState({ useTarget : !this.state.useTarget })}></input> Tambah</label>
                    <form className='form-radio' hidden={ this.state.useTarget === true ? true : false}>
                        <label>Tahapan</label> <br></br>
                        <input className='input' placeholder='Judul Tahapan'
                            ref="tahap" type="email"
                        ></input>
                        <br></br>
                        <label>Nama Program</label>
                        <input className='input' placeholder='Misal : Menghafal Al-Fatihah'
                            ref="nameprogram"></input>
                        <br></br>
                        <label>Jadwal Mulai</label>
                        <input className='input' placeholder=''
                            ref="starttgl" type="date" defaultValue={new Date().toISOString().split('T')[0]}></input>
                        <br></br>
                        <label>Jadwal Selesei</label>
                        <input className='input' placeholder=''
                            ref="endtgl" type="date" defaultValue={new Date().toISOString().split('T')[0]}></input>
                        <br></br>
                        <label>Isi Program</label>
                        <textarea className='text' placeholder='Misal : ayat Al-Fatihah - Arabic & Latin'
                            ref="isiprogram"></textarea>
                        <br></br>
                        <label>Respon 1</label>
                        <textarea className='text' placeholder='Type here ... (saya sudah hafal)'
                            ref="respon1"></textarea>
                        <br></br>
                        <label>Respon 2</label>
                        <textarea className='text' placeholder='Type here ... (saya kesulitan)'
                            ref="respon2"></textarea>
                        <br></br>
                    </form> <br></br>
                    <label><input type="checkbox" value="setting" onClick={() => this.setState({ useTarget2 : !this.state.useTarget2 })}></input> Tambah</label>
                    <form className='form-radio' hidden={ this.state.useTarget2 === true ? true : false}>
                        <label>Tahapan</label> <br></br>
                        <input className='input' placeholder='Judul Tahapan'
                            ref="tahap" type="email"
                        ></input>
                        <br></br>
                        <label>Nama Program</label>
                        <input className='input' placeholder='Misal : Menghafal Al-Fatihah'
                            ref="nameprogram"></input>
                        <br></br>
                        <label>Jadwal Mulai</label>
                        <input className='input' placeholder=''
                            ref="starttgl" type="date" defaultValue={new Date().toISOString().split('T')[0]}></input>
                        <br></br>
                        <label>Jadwal Selesei</label>
                        <input className='input' placeholder=''
                            ref="endtgl" type="date" defaultValue={new Date().toISOString().split('T')[0]}></input>
                        <br></br>
                        <label>Isi Program</label>
                        <textarea className='text' placeholder='Misal : ayat Al-Fatihah - Arabic & Latin'
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
                   </form> <br></br><br></br>
                        <Button className='btn' onClick={this.addMessage}>Add Program</Button>
                    </form>
                    
                </div>

            </div>
        )
    }
}

export default AddProgramRev


