import React, {useState, useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './RequestDeleteUser.scss';
import Logo from './../../../assets/img/Logo_4.png'
import DeviceImage from './../../../assets/img/device3.png';
import InputComponent from '../../../components/UI/Input/Input';
import RKLoader from '../../../components/UI/RKLoader/RKLoader';
import { useFormik } from 'formik';
import { validationFormLogin } from './../../../helpers/validation/validation';
import { connect } from 'react-redux';
import { auth } from './../../../store/actions/auth';
import { FiHelpCircle, FiXCircle } from 'react-icons/fi'
import LoginHelp from '../../../components/UI/Help/LoginHelp/LoginHelp';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { getUserList } from '../../../components/API/filterPublic';
import { deleteAppUser } from '../../../store/actions/dashboard';

function RequestDeleteUser({
    onDeleteUser,
    isLoading
}) {
    const [profile, setProfile] = useState(null);
    const [token, setToken] = useState(null);
    const [isProfileFound, setProfileFound] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);
    const [roProfile, setRoProfile] = useState(null);

    const history = useHistory();

    // function parseJwt (token) {
    //     return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    // }

    useEffect(() => {
        if(token) {
            const prof = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
            console.log(prof);
            setProfile(prof);
            var param = {
                whereKeyValues: {
                    emailUser: prof.email
                }
            }
            getUserList(param)
            .then(response => {
                console.log(response);
                if(response.data.users.length > 0) {
                    setProfileFound(true);
                    setRoProfile(response.data.users[0]);
                }
            })
        }
        // if(localStorage.getItem('loginMessage')) {
        //     setLoginMessage(localStorage.getItem('loginMessage'));
        //     localStorage.removeItem('loginMessage');
        // }
    }, [token])

    useEffect(() => {
        if(deleteUser){
            onDeleteUser(roProfile._id, roProfile.emailUser, googleLogout, setToken, setProfile, setRoProfile)
        }
    }, [deleteUser])

    return (
        <GoogleOAuthProvider clientId="587712446487-j1ms2ukfm0evgqpps9rgusum45l2fgil.apps.googleusercontent.com">
            {/* {showHelp ? <LoginHelp /> : null}
            {showHelp ? (
                <button 
                    className="CloseHelp"
                    onClick={() => {
                    setShowHelp(false);
                }}><FiXCircle/> </button>
            ) : null} */}
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
                                // setShowHelp(true);
                            }}><FiHelpCircle/>  Bantuan</NavLink>
                        </div>
                        <div className="Login-middle-right">
                            {!profile ? <div className="Login-middle-right-heading mb-small">
                                <h1>Silakan login dengan akun Google Anda yang dipakai pada aplikasi untuk menghapus akun.</h1>
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        setToken(credentialResponse.credential);
                                        console.log(credentialResponse);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />;
                            </div> : <div className="Login-middle-right-heading mb-small">
                                {isProfileFound && roProfile ? <>
                                    <h3>Data Akun Anda:</h3>
                                    <h4>Nama: {roProfile.nameUser}</h4>
                                    <h4>Tanggal Lahir: {roProfile.birdDate}</h4>
                                    <h4>Tipe Pengguna: {roProfile.userType}</h4>
                                    <h4>Jenis Kelamin: {roProfile.gender}</h4>
                                    <br/>
                                    <h5>Apakah Anda yakin ingin menghapus akun ini? Akun tidak dapat dipulihkan kembali setelah dihapus!</h5>
                                    <button onClick={() => {
                                        setDeleteUser(true)
                                    }}>Hapus Pengguna!</button>
                                </> : 
                                <h2>Data Anda tidak ditemukan! Silakan logout lalu login kembali dengan akun Google yang terhubung dengan aplikasi.</h2>}
                                <button onClick={() => {
                                    googleLogout();
                                    setRoProfile(null);
                                    setToken(null);
                                    setProfile(null);
                                }}>
                                    Logout
                                </button>
                            </div> }
                            <p className="Login-middle-right-joinus">Ingin bermitra dengan kami? <NavLink to="/register">Daftar Sekarang</NavLink> </p>
                        </div>
                    </div> 
                
                {isLoading && (
                    <RKLoader />
                )}
                <div className="Login-bottom"></div>
            </div>
            </div>
        </GoogleOAuthProvider>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteUser: (id, email, logout, setToken, setProfile, setRoProfile) => dispatch( deleteAppUser( id, email, logout, setToken, setProfile, setRoProfile )  )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RequestDeleteUser)
