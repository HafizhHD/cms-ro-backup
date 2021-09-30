import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Register.scss';
import Logo from './../../../assets/img/Logo_1.png'
import DeviceImage from './../../../assets/img/device.png';
import InputComponent from '../../../components/UI/Input/Input';
import RKLoader from '../../../components/UI/RKLoader/RKLoader';
import { Formik } from 'formik';
import { validationFormRegister } from './../../../helpers/validation/validation';
import { connect } from 'react-redux';
import { registerAuth } from './../../../store/actions/auth';
import LoginHelp from '../../../components/UI/Help/LoginHelp/LoginHelp';
import { FiHelpCircle, FiXCircle } from 'react-icons/fi'

function Register({
    onRegister,
    isLoading
}) {
    const [showHelp, setShowHelp] = useState(false);

    const history = useHistory();

    return (
        <>
            {showHelp ? <LoginHelp /> : null}
            {showHelp ? (
                <button 
                    className="CloseHelp"
                    onClick={() => {
                    setShowHelp(false);
                }}><FiXCircle/> </button>
            ) : null}
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
                            <NavLink
                                to="/register" 
                                className="Register-middle-left-help"
                                onClick={() => {
                                setShowHelp(true);
                            }}><FiHelpCircle/>  Bantuan</NavLink>
                        </div>
                        <div className="Register-middle-right">
                            <div className="Register-middle-right-heading mb-small">
                                <h1>Daftarkan Brand Anda.</h1>
                            </div>
                            <Formik
                                initialValues= {{
                                    email: '',
                                    password: '',
                                    confirmPassword: '',
                                    accountName: '',
                                    cobrandName: '',
                                    phoneNumber: '',
                                    address: '',
                                    thumbnail: ''
                                }}
                                validationSchema = {validationFormRegister}
                                validateOnChange = {true}
                                onSubmit = {values => {
                                    onRegister( values.email, values.accountName, values.cobrandName, values.thumbnail, values.phoneNumber,
                                        values.address, values.password, values.confirmPassword, history)
                                }}
                            >
                            {({handleChange, handleBlur, handleSubmit, setFieldValue, touched, values, errors}) => (
                                <form className="Register-middle-right-form" onSubmit={handleSubmit}>
                                    <InputComponent 
                                        placeholder="Your E-mail (example@mail.com)"
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        className="Input-control Input-control__with-focus mb-tiny"
                                        onBlur={handleBlur}
                                        isError={touched.email && Boolean(errors.email) }
                                        message={touched.email && errors.email}
                                    />
                                    <InputComponent 
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password}
                                        className="Input-control Input-control__with-focus mb-tiny"
                                        onBlur={handleBlur}
                                        isError={touched.password && Boolean(errors.password) }
                                        message={touched.password && errors.password}
                                    />
                                    <InputComponent 
                                        placeholder="Confirm Password"
                                        type="password"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        value={values.confirmPassword}
                                        className="Input-control Input-control__with-focus mb-tiny"
                                        onBlur={handleBlur}
                                        isError={touched.confirmPassword && Boolean(errors.confirmPassword) }
                                        message={touched.confirmPassword && errors.confirmPassword}
                                    />
                                    <InputComponent 
                                        placeholder="Your Name"
                                        type="text"
                                        name="accountName"
                                        onChange={handleChange}
                                        value={values.accountName}
                                        className="Input-control Input-control__with-focus mb-tiny"
                                        onBlur={handleBlur}
                                        isError={touched.accountName && Boolean(errors.accountName) }
                                        message={touched.accountName && errors.accountName}
                                    />
                                    <InputComponent 
                                        placeholder="Your Brand Name"
                                        type="text"
                                        name="cobrandName"
                                        onChange={handleChange}
                                        value={values.cobrandName}
                                        className="Input-control Input-control__with-focus mb-tiny"
                                        onBlur={handleBlur}
                                        isError={touched.cobrandName && Boolean(errors.cobrandName) }
                                        message={touched.cobrandName && errors.cobrandName}
                                    />
                                    <InputComponent 
                                        placeholder="Phone Number"
                                        type="text"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                        value={values.phoneNumber}
                                        className="Input-control Input-control__with-focus mb-tiny"
                                        onBlur={handleBlur}
                                        isError={touched.phoneNumber && Boolean(errors.phoneNumber) }
                                        message={touched.phoneNumber && errors.phoneNumber}
                                    />
                                    <InputComponent 
                                        placeholder="Address"
                                        type="textarea"
                                        name="address"
                                        onChange={handleChange}
                                        value={values.address}
                                        className="Input-control Input-control-big Input-control__with-focus mb-tiny"
                                        onBlur={handleBlur}
                                        isError={touched.address && Boolean(errors.address) }
                                        message={touched.address && errors.address}
                                    />
                                    <label>Photo</label>
                                    <InputComponent 
                                        placeholder="Photo"
                                        type="file"
                                        name="thumbnail"
                                        onChange={(e) => {
                                            let file = e.currentTarget.files[0];
                                            if(file) {
                                            console.log("File to upload: ", file);
                                            setFieldValue("thumbnail", file);
                                            }
                                        }}
                                        className="Input-control Input-control__with-focus mb-tiny"
                                        onBlur={handleBlur}
                                        isError={touched.thumbnail && Boolean(errors.thumbnail) }
                                        message={touched.thumbnail && errors.thumbnail}
                                    />
                                    <button
                                        className="btn btn-register"
                                        type="submit"
                                    >
                                        Sign up
                                    </button>
                                </form>
                            )}
                            </Formik>
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
        onRegister: ( email, accountName, cobrandName, thumbnail, phoneNumber, address, password, confirmPassword, history ) =>
            dispatch( registerAuth( email, accountName, cobrandName, thumbnail, phoneNumber, address, password, confirmPassword, history )  )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Register)
