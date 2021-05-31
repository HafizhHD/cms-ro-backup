import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.scss';
import Logo from './../../../assets/img/Logo_1.png'
import DeviceImage from './../../../assets/img/device.png';
import InputComponent from '../../../components/UI/Input/Input';
import RKLoader from '../../../components/UI/RKLoader/RKLoader';

function Login({
    setIsLogin
}) {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = e => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout( () => {
            setIsLoading(false);
            setIsLogin(true);
        }, 3000);
    }

    return (
        <>
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
                        </div>
                        <div className="Login-middle-right">
                            <div className="Login-middle-right-heading mb-small">
                                <h1>Mulai Kelola Pelanggan Anda Sekarang.</h1>
                            </div>
                            <form className="Login-middle-right-form" onSubmit={submitLogin}>
                                <InputComponent 
                                    placeholder="example@mail.com"
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <InputComponent 
                                    placeholder="Password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <button
                                    className="btn btn-login"
                                    type="submit"
                                >
                                    Sign in
                                </button>
                            </form>
                            <p className="Login-middle-right-joinus">Ingin bermitra dengan kami? <NavLink to="/">Daftar Sekarang</NavLink> </p>
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

export default Login
