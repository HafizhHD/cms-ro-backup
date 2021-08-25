import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Register.scss';
import Logo from './../../../assets/img/Logo_1.png'
import DeviceImage from './../../../assets/img/device.png';
import InputComponent from '../../../components/UI/Input/Input';
import RKLoader from '../../../components/UI/RKLoader/RKLoader';
import { useFormik } from 'formik';
import { validationFormRegister } from './../../../helpers/validation/validation';
import { connect } from 'react-redux';
import { registerAuth } from './../../../store/actions/auth';

function Register({
    onRegister,
    isLoading
}) {

    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            accountName: '',
            cobrandName: '',
            phoneNumber: '',
            address: '',
            thumbnail: ''
        },
        validationSchema: validationFormRegister,
        onSubmit: values => {
            onRegister( values.email, values.accountName, values.cobrandName, values.thumbnail, values.phoneNumber,
                values.address, values.password, values.confirmPassword, history)
        }
    })

    return (
        <>
            <div className="RegisterBg">
            <div className="Register">
                <div className="Register-top">
                    <img src={Logo} className="Register-top-img" alt="logo top" />
                </div>
             
                <div className="Register-middle">
                        <div className="Register-middle-left">
                            <img 
                                src={DeviceImage} 
                                alt="Device " 
                                className="Register-middle-left-img"
                            />
                        </div>
                        <div className="Register-middle-right">
                            <div className="Register-middle-right-heading mb-small">
                                <h1>Daftarkan Brand Anda.</h1>
                            </div>
                            <form className="Register-middle-right-form" onSubmit={formik.handleSubmit}>
                                <InputComponent 
                                    placeholder="Your E-mail (example@mail.com)"
                                    type="text"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className="Input-control Input-control__with-focus mb-tiny"
                                    isError={formik.touched.email && Boolean(formik.errors.email) }
                                    message={formik.touched.email && formik.errors.email}
                                />
                                <InputComponent 
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className="Input-control Input-control__with-focus mb-tiny"
                                    isError={formik.touched.password && Boolean(formik.errors.password)}
                                    message={formik.touched.password && formik.errors.password}
                                />
                                <InputComponent 
                                    placeholder="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                    onChange={formik.handleChange}
                                    value={formik.values.confirmPassword}
                                    className="Input-control Input-control__with-focus mb-tiny"
                                    isError={formik.touched.password && Boolean(formik.errors.password)}
                                    message={formik.touched.password && formik.errors.password}
                                />
                                <InputComponent 
                                    placeholder="Your Name"
                                    type="text"
                                    name="accountName"
                                    onChange={formik.handleChange}
                                    value={formik.values.accountName}
                                    className="Input-control Input-control__with-focus mb-tiny"
                                />
                                <InputComponent 
                                    placeholder="Your Brand Name"
                                    type="text"
                                    name="cobrandName"
                                    onChange={formik.handleChange}
                                    value={formik.values.cobrandName}
                                    className="Input-control Input-control__with-focus mb-tiny"
                                />
                                <InputComponent 
                                    placeholder="Phone Number"
                                    type="text"
                                    name="phoneNumber"
                                    onChange={formik.handleChange}
                                    value={formik.values.phoneNumber}
                                    className="Input-control Input-control__with-focus mb-tiny"
                                />
                                <InputComponent 
                                    placeholder="Address"
                                    type="textarea"
                                    name="address"
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                    className="Input-control Input-control-big Input-control__with-focus mb-tiny"
                                />
                                <InputComponent 
                                    placeholder="Photo"
                                    type="file"
                                    name="thumbnail"
                                    onChange={(e) => {
                                        let file = e.currentTarget.files[0];
                                        if(file) {
                                        console.log("File to upload: ", file);
                                        formik.setFieldValue("thumbnail", file);
                                        }
                                    }}
                                    className="Input-control Input-control__with-focus mb-tiny"
                                />
                                <button
                                    className="btn btn-register"
                                    type="submit"
                                >
                                    Sign up
                                </button>
                            </form>
                            <p className="Register-middle-right-joinus">Sudah punya akun? <NavLink to="/">Klik untuk masuk</NavLink> </p>
                        </div>
                    </div> 
                
                {isLoading && (
                    <RKLoader />
                )}
                <div className="Register-bottom"></div>
            </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: ( email, accountName, cobrandName, thumbnail, phoneNumber, address, password, confirmPassword, history ) => dispatch( registerAuth( email, accountName, cobrandName, thumbnail, phoneNumber, address, password, confirmPassword, history )  )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Register)
