// import { useState, useEffect } from 'react';
// import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
// import InputComponent from '../../../../components/UI/Input/Input';
import './Redzonedd.scss'
// import { Formik } from 'formik';
import axios from 'axios';
// import { connect } from 'react-redux';

import React from 'react'
import { Button } from 'react-bootstrap';

class RedzoneAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
           

        }
    }

    componentDidMount() {
    
    }
    addRedzone = () => {
        let params =
        {
            cobrandEmail: this.refs.email.value,
            placeName: this.refs.tempat.value,
            description: this.refs.deskripsi.value,
            address: this.refs.alamat.value,
            redZoneStatus: this.refs.status.value,
            location: [this.refs.lokasi.value]
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneAdd',
            data: params,
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error + 'ini eror add redzone');
            });
    }
    render() {
        return (
            <div>
                <h1>User</h1>
                <form style={{margin:"1rem"}}>
                    <label>Email</label> <br></br>
                    <input placeholder=''
                       ref="email"
                    ></input>
                    <br></br>
                    <label>Nama Tempat</label> <br></br>
                    <input placeholder=''
                    ref="tempat"></input>
                    <br></br>
                    <label>Deskripsi</label> <br></br>
                    <input placeholder=''
                    ref="deskripsi"></input>
                    <br></br>
                    <label>Alamat</label> <br></br>
                    <input placeholder=''
                    ref="alamat"></input>
                    <br></br>
                    <label>Redzone Status</label> <br></br>
                    <input placeholder=''
                    ref="status"></input>
                    <br></br>
                    <label>Lokasi Kordinat</label> <br></br>
                    <input placeholder=''
                    ref="lokasi"></input>
                </form>
                <Button onClick={this.addRedzone}>Kirim Redzone</Button>
            </div>
        )
    }
}

export default RedzoneAdd


// function RedzoneAdd({
//     // isCurrentlyLoading,
// }) {

//     // add redzone
//     useEffect(() => {
//         let params =
//         {
//             cobrandEmail: "muhammadsyihab.te@gmail.com",
//             placeName: "Tempat Sabung ayam",
//             description: "Tempat Sabung ayam A",
//             address: "kaliideres",
//             redZoneStatus: "active",
//             location: [-6.212694432483453, 106.85043740452949]
//         }
//         axios({
//             method: 'post',
//             url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneAdd',
//             data: params,
//         })
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(error => {
//                 console.log(error + 'ini eror add redzone');
//             });
//     }, [])
//     // if (isCurrentlyLoading) {
//     //     return <RKLoader />
//     // }
//     return (
//         <div>
//             <h2>ADD REDZONE</h2>
//             <Formik
//                 initialValues= {{
//                     programName: '',
//                     programDescription: '',
//                     programThumbnail: '',
//                     startDate: new Date().toISOString().split('T')[0]
//                 }}
//                 // validationSchema = {validationProgram}
//                 // validateOnChange = {true}
//                 onSubmit = { values => {
//                     onAddProgram( cobrandEmail, values.programName, values.programDescription, values.programThumbnail, values.startDate, history)
//                 }}
//             >
//             {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
//                 <form onSubmit={handleSubmit}>
//                     <div className="AddProgram">
//                         <h1>Create New Program</h1>
//                         <div className="form-group">
//                             <label>Title</label>
//                             <InputComponent 
//                                 type="text"
//                                 name="programName"
//                                 className="form-group__input form-group__input--fullwidth" 
//                                 placeholder="Example"
//                                 value={values.programName}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             />
//                             {touched.programName && <span className="message__error">{errors.programName}</span>}
//                         </div>
//                         <div className="form-group">
//                             <label>Description</label>
//                             <InputComponent
//                                 type="textarea"
//                                 name="programDescription"
//                                 placeholder="Type Something..."
//                                 value={values.programDescription}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             />
//                            {touched.programDescription && <span className="message__error">{errors.programDescription}</span>}
//                         </div>
//                         <div className="form-group">
//                             <label>Photo</label>
//                             <InputComponent
//                                 type="file"
//                                 className="form-group__input"
//                                 name="programThumbnail"
//                                 onBlur={handleBlur}
//                                 onChange={(e) => {
//                                     let file = e.currentTarget.files[0];
//                                     if(file) {
//                                         console.log("File to upload: ", file);
//                                         setFieldValue("programThumbnail", file);
//                                     }
//                                 }}
//                             />
//                             { touched.programThumbnail && <span className="message__error">{errors.programThumbnail}</span> }
//                         </div>
//                         <div className="form-group">
//                             <label>Set Schedule</label>
//                             <InputComponent
//                                 type="date"
//                                 className="form-group__input"
//                                 name="startDate"
//                                 min={new Date().toISOString().split('T')[0]}
//                                 value={values.startDate}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             />
//                             {touched.startDate && <span className="message__error">{errors.startDate}</span>}
//                         </div>
//                         <div>
//                             <button className="btn btn-submit" type="submit">
//                                 Post Program
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             )}
//             </Formik>
            
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         // isCurrentlyLoading: state.auth.isLoading
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // onDeleteProgram: (email, deletingProgram, retrieveList) => dispatch(deleteProgram(email, deletingProgram, retrieveList))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RedzoneAdd)
