import React, {useEffect, useState} from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './EditUser.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { editAppUser } from '../../../../store/actions/dashboard';
import { getUserList } from '../../../../components/API/filter'
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationUserEdit } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import axios from 'axios';

function EditUser({
    onEditUser,
    isLoading
}) {

    const [isPageLoading, setPageLoading] = useState(true);
    const [user, setUser] = useState();
    const [programStartDate, setProgramStartDate] = useState();

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).email;
    const _emailUser = localStorage.getItem('userSelected');

    useEffect(() => {
        setPageLoading(true);
        console.log(_emailUser);
        if(_emailUser) {
            const params = {
                whereKeyValues: {
                    emailUser: _emailUser
                }
            };

            getUserList(params)
            .then(response => {
                console.log("Response data: ", response.data);
                setUser(response.data.users[0]);
                setPageLoading(false);
            })
            .catch(error => {
                console.log(error);
                setPageLoading(false);
            });
        }
    }, []);

    if(isPageLoading || isLoading) {
        return <RKLoader/>
    }

    return (
        <>
            <Heading headingName="Manajemen Pengguna" routes={[
                { path: '/cms/user', name: 'Pengguna' },
                { path: '/cms/user/edit', name: 'Ubah Pengguna' }
            ]} />
            <Formik
                initialValues= {{
                    nameUser: user.nameUser ?? '',
                    emailUser: user.emailUser ?? '',
                    gender: user.gender ?? 'pria',
                    birdDate: user.birdDate.split('T')[0] ?? new Date().toISOString.split('T')[0],
                    address: user.address ?? '',
                    imagePhoto: '',
                    phoneNumber: user.phoneNumber ?? ''
                }}
                validationSchema = {validationUserEdit}
                validateOnChange = {true}
                onSubmit = { values => {
                    let finalPhoto = user.imagePhoto;
                    if(values.imagePhoto !== '') finalPhoto = values.imagePhoto
                    onEditUser( _emailUser, values.nameUser, values.emailUser, values.gender, values.birdDate, values.address, values.imagePhoto, values.phoneNumber, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="EditUser">
                        <h1>Ubah Pengguna Terpilih: {user.nameUser}</h1>
                        <div className="form-group">
                            <label>Nama</label>
                            <InputComponent 
                                type="text"
                                name="nameUser"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.nameUser}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.nameUser && <span className="message__error">{errors.nameUser}</span>}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <InputComponent 
                                type="text"
                                name="emailUser"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="example@example.com"
                                value={values.emailUser}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.emailUser && <span className="message__error">{errors.emailUser}</span>}
                        </div>
                        <div className="form-group">
                            <label>Jenis Kelamin</label>
                            <select
                                name="gender"
                                value={values.gender}
                                onChange={(e) => {
                                    setFieldValue('gender', e.currentTarget.value);
                                }}
                            >
                                <option value="pria">Pria</option>
                                <option value="wanita">Wanita</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Tanggal Lahir</label>
                            <InputComponent
                                type="date"
                                className="form-group__input"
                                name="birdDate"
                                value={values.birdDate}
                                min={new Date('1980-01-01')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.birdDate && <span className="message__error">{errors.birdDate}</span>}
                        </div>
                        <div className="form-group">
                            <label>Alamat</label>
                            <InputComponent 
                                type="text"
                                name="address"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Jl. Example"
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="form-group">
                            <label>Foto Profil Baru {"(Opsional)"}</label>
                            <InputComponent
                                type="file"
                                className="form-group__input"
                                name="imagePhoto"
                                onChange={(e) => {
                                    let file = e.currentTarget.files[0];
                                    if(file) {
                                        const reader = new FileReader();
                                        reader.readAsDataURL(file);
                                        reader.onloadend = function() {
                                            var base64data = reader.result;                
                                            setFieldValue('imagePhoto', base64data);
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nomor Telepon</label>
                            <InputComponent 
                                type="text"
                                name="phoneNumber"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.phoneNumber}
                                onChange={(e) => {
                                    const result = e.currentTarget.value.replace(/\D/g, '');
                                    setFieldValue("phoneNumber", result);
                                }}
                                onBlur={handleBlur}
                            />
                            {touched.phoneNumber && <span className="message__error">{errors.phoneNumber}</span>}
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit">
                                Update Pengguna
                            </button>
                        </div>
                    </div>
                </form>
            )}
            </Formik>
            {console.log(isLoading)}
            {isLoading ? <RKLoader/> : null}
        </>
    )
}

const mapStateToProps = state => {
    console.log(state.auth.isLoading);
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditUser: ( _emailUser, nameUser, emailUser, gender, birdDate, address, imagePhoto, phoneNumber, history ) =>
            dispatch(editAppUser( _emailUser, nameUser, emailUser, gender, birdDate, address, imagePhoto, phoneNumber, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditUser)