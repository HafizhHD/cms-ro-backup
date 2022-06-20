// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './listBc.scss'
// import { Formik } from 'formik';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Redirect } from 'react-router-dom';

class ListProgram extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            kirimforum: [],
            message: [],
            indexEdit: null,
            edit: false,
            new: null,
            dataUpdate: [],
            send: false,
            destiemail : '',
            kategori : '',

        }
    }

    componentDidMount() {
        this.daftarMessage()
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

    daftarMessage = () => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const params = {
            whereKeyValues: {
                cobrandEmail: userData.cobrandEmail
                // admin@asia.ruangortu.id
            },
            includeThumbnailData: false,
            limit: Number.MAX_SAFE_INTEGER
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter',
            data: params

        })
            .then(response => {
                console.log(response.data.programs);
                console.log(response.data);
                this.setState({ message: response.data.programs })
            })
            .catch(error => {
                console.log(error + 'ini eror program');
            });
    }

    onSave = (index) => {
        localStorage.setItem('idUser', this.state.message[index]._id)
        let idkomen = localStorage.getItem('idUser')
        console.log(idkomen)
        console.log(this.state.message[index].programName)
        let params =
        {
            whereValues:
                { _id: idkomen },
            newValues:
            {
                // ProgramDescription: this.refs.ProgramDescription.value ? this.refs.ProgramDescription.value : this.state.message[index].ProgramDescription,
                programName: this.refs.programName.value ? this.refs.programName.value : this.state.message[index].programName,
                ProgramDescription: this.refs.ProgramDescription.value ? this.refs.ProgramDescription.value : this.state.message[index].ProgramDescription,
                // programthumnail: this.refs.programthumnail.value ? this.refs.programthumnail.value : this.state.message[index].programthumnail,
                startDate: this.refs.startDate.value ? this.refs.startDate.value : this.state.message[index].startDate,
                endDate: this.refs.endDate.value ? this.refs.endDate.value : this.state.message[index].endDate,
                category: this.refs.category.value ? this.refs.category.value : this.state.message[index].category,
                targetAudiance: this.refs.targetAudiance.value ? [this.refs.targetAudiance.value] : [this.state.message[index].targetAudiance],
            
                // category: this.refs.category.value ? this.refs.category.value : this.state.message[index].category,
                // targetAudiance: this.state.destiemail ? [this.state.destiemail] : [this.state.message[index].targetAudiance],
            }
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/programUpdate',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                // alert('Add Broadcast is success')
                const userData = JSON.parse(localStorage.getItem('userData'));
                const params2 = {
                    whereKeyValues: {
                        cobrandEmail: userData.cobrandEmail
                        // admin@asia.ruangortu.id
                    },
                    includeThumbnailData: false,
                    limit: Number.MAX_SAFE_INTEGER
                }
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter',
                    data: params2

                })
                    .then(response => {
                        console.log(response.data.programs);
                        console.log(response.data);
                        this.setState({ message: response.data.programs })
                        this.setState({ new: null })
                    })
                    .catch(error => {
                        console.log(error + 'ini eror program');
                    });
            })
            .catch(error => {
                console.log(error + 'ini eror edit BC');
            });
    }

    showTableBody = () => {
        const { qty } = this.state
        return (
            <tbody>
                {this.state.message.map((item, index) => {
                    if (index == this.state.new) {
                        return (
                            <tr key={index}>
                                <td><input type="text" placeholder={item.ProgramDescription} ref="ProgramDescription"></input></td>
                                {/* <td><input placeholder={item.cobrandEmail}  ref="cobrandEmail"></input></td> */}
                                <td><input placeholder={item.programName} ref="programName"></input></td>
                                <td><input placeholder={item.startDate} type="datetime-local" ref="startDate"></input></td>
                                <td><input placeholder={item.endDate} type="datetime-local" ref="endDate"></input></td>
                                {/* <td><input placeholder={item.category} ref="category"></input></td> */}
                                <td>
                                    <select ref="category" placeholder={item.category}>
                                        <option value="Pendidikan Agama">Pendidikan Agama</option>
                                        <option value="Pengetahuan Siswa Formal">Pengetahuan Siswa Formal</option>
                                        <option value="Pengetahuan Siswa Umum">Pengetahuan Siswa Umum</option>
                                        <option value="Informasi & Teknologi">Informasi & Teknologi</option>
                                        <option value="Program Pilihan">Program Pilihan</option>
                                    </select>
                                    {/* <form ref="destinaation" className='form-radio' >
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
                                    </form> */}
                                </td>
                                <td>
                                    <input placeholder={item.targetAudiance} ref="targetAudiance"></input>
                                    {/* <form ref="destinaation" className='form-radio' >
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
                                    </form> */}
                                </td>
                                <td><Button variant="info" className='btn2' onClick={() => this.onSave(index)}>Save</Button></td>
                                <td><Button variant="danger" className='btn' onClick={() => this.setState({ new: null })}>Cancel</Button></td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            <td>{item.ProgramDescription}</td>
                            {/* <td>{item.cobrandEmail}</td> */}
                            <td>{item.programName}</td>
                            <td>{item.startDate.split('T')[0]}</td>
                            <td>{item.endDate ? item.endDate.split('T')[0] : item.endDate}</td>
                            <td>{item.category}</td>
                            <td>{item.targetAudiance}</td>
                            <td><Button variant="warning" className='btn2' onClick={() => this.onEdit(index)}>Edit</Button></td>
                            <td><Button variant="danger" className='btn' onClick={() => this.onDelete(index)}>Delete</Button></td>
                        </tr>
                    )
                })

                }
            </tbody>
        )
    }

    onDelete = (index) => {
        localStorage.setItem('idUser', this.state.message[index]._id)
        let idkomen = localStorage.getItem('idUser')
        console.log(this.state.message[index]._id)
        console.log(idkomen)
        let params =
        {
            whereValues: {
                _id: idkomen,
            }
        };
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/programRemove',
            data: params,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(params)
                console.log(response.data);
                const userData = JSON.parse(localStorage.getItem('userData'));
                const params2 = {
                    whereKeyValues: {
                        cobrandEmail: userData.cobrandEmail
                        // admin@asia.ruangortu.id
                    },
                    includeThumbnailData: false,
                    limit: Number.MAX_SAFE_INTEGER
                }
                axios({
                    method: 'post',
                    url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter',
                    data: params2

                })
                    .then(response => {
                        console.log(response.data.programs);
                        console.log(response.data);
                        this.setState({ message: response.data.programs })
                    })
                    .catch(error => {
                        console.log(error + 'ini eror program');
                    });
            })
            .catch(error => {
                console.log(error + 'ini delete program');
            });
    }

    onEdit(index) {
        this.setState({ indexEdit: index })
        this.setState({ new: index })
        console.log(this.state.indexEdit)
        console.log(index) //null
        console.log(this.state.new)
    }

    render() {
        if (this.state.edit == true) {
            return <Redirect to="/cms/notifications-edit" />
        }
        const { indexEdit } = this.state
        return (
            <div className='div'>
                <NavLink to="/cms/program/revisilist-add" id="add_content">
                    <FiPlus className="IconAdd" />
                    <span>Create New Program</span>
                </NavLink>
                <h1>List Program</h1>
                <div className='komentar'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Program Description</th>
                                {/* <th>CoBrand Email</th> */}
                                <th>Title</th>
                                <th className='h-email'>Start Date</th>
                                <th>End Date</th>
                                <th>Category Program</th>
                                <th>Target Audience</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        {this.showTableBody()}
                    </Table>
                </div>
            </div>
        )
    }
}

export default ListProgram


