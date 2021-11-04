import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Login.scss';
import Logo from './../../../assets/img/Logo_1.png'
import DeviceImage from './../../../assets/img/device.png';
import InputComponent from '../../../components/UI/Input/Input';
import RKLoader from '../../../components/UI/RKLoader/RKLoader';
import { useFormik } from 'formik';
import { validationFormLogin } from './../../../helpers/validation/validation';
import { connect } from 'react-redux';
import { auth } from './../../../store/actions/auth';
import { FiHelpCircle, FiXCircle } from 'react-icons/fi'
import LoginHelp from '../../../components/UI/Help/LoginHelp/LoginHelp';

function Login({
    onLogin,
    isLoading
}) {
    const [showHelp, setShowHelp] = useState(false);
    const [isPasswordVisible, showPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationFormLogin,
        onSubmit: values => {
            onLogin( values.email, values.password )
        }
    })

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
            <div className="LoginBg">
            <div className="Login">
                <div className="Login-top">
                    <img src={Logo} className="Login-top-img" alt="logo top" />
                </div>
             
                <div className="Login-middle">
                        <div className="Login-middle-left">
                            <img 
                                src={DeviceImage} 
                                alt="Device " 
                                className="Login-middle-left-img"
                            />
                            <NavLink
                                to="/" 
                                className="Login-middle-left-help"
                                onClick={() => {
                                setShowHelp(true);
                            }}><FiHelpCircle/>  Bantuan</NavLink>
                        </div>
                        <div className="Login-middle-right">
                            <div className="Login-middle-right-heading mb-small">
                                <h1>Mulai Kelola Pelanggan Anda Sekarang.</h1>
                                {localStorage.getItem('loginMessage') ? <p>{localStorage.getItem('loginMessage')}</p> : null}
                            </div>
                            <form className="Login-middle-right-form" onSubmit={formik.handleSubmit}>
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
                                    type={isPasswordVisible ? "text" : "password"}
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className="Input-control Input-control__with-focus mb-tiny"
                                    isError={formik.touched.password && Boolean(formik.errors.password)}
                                    message={formik.touched.password && formik.errors.password}
                                />
                                <div className="Login-middle-right-form-checkbox">
                                    <InputComponent
                                        type="checkbox"
                                        name="showPassword"
                                        onChange={(e) => {
                                            if(e.currentTarget.checked) {
                                                showPassword(true);
                                            }
                                            else {
                                                showPassword(false);
                                            }
                                        }}
                                    />
                                    <label for="showPassword">Show Password</label>
                                </div>
                                <button
                                    className="btn btn-login"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </form>
                            <p className="Login-middle-right-joinus">Ingin bermitra dengan kami? <NavLink to="/register">Daftar Sekarang</NavLink> </p>
                        </div>
                    </div> 
                
                {isLoading && (
                    <RKLoader />
                )}
                <div className="Login-bottom"></div>
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
        onLogin: (email, password) => dispatch( auth( email, password )  )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)
