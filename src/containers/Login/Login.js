import React, { useState } from 'react';
import './Login.scss';
import Logo from './../../assets/img/Logo_1.png'
import DeviceImage from './../../assets/img/device.png';
import Spinner from '../../components/UI/Loader/Spinner/Spinner';

function Login({

}) {

    const [isLoading, setIsLoading] = useState(false);

    const submitLogin = e => {
        e.preventDefault();
        setIsLoading(true);
    }

    return (
        <>
            <div className="LoginBg">
            <div className="Login">
                <div className="Login-top">
                  {!isLoading && <img src={Logo} className="Login-top-img" alt="logo top" /> }  
                </div>
                {!isLoading && (
                <div className="Login-middle">
                        <div className="Login-middle-left">
                            <img 
                                src={DeviceImage} 
                                alt="Device Image" 
                                className="Login-middle-left-img"
                            />
                        </div>
                        <div className="Login-middle-right">
                            <div className="Login-middle-right-heading mb-small">
                                <h1>Mulai Kelola</h1>
                                <h1>Pelanggan Anda</h1>
                                <h1>Sekarang.</h1>
                            </div>
                            <form className="Login-middle-right-form" onSubmit={submitLogin}>
                                <input
                                    className="Input-control mb-tiny" 
                                    type="text"
                                    placeholder="example@mail.com"
                                />
                                <input 
                                    className="Input-control mb-tiny" 
                                    type="password"
                                    placeholder="Password"
                                />
                                <button
                                    className="btn btn-login"
                                    type="submit"
                                >
                                    Sign in
                                </button>
                            </form>
                            <p className="Login-middle-right-joinus">Ingin bermitra dengan kami? <a href="#">Daftar Sekarang</a> </p>
                        </div>
                    </div> 
                )}
                {isLoading && (
                <div className="Login-middle-empty">
                    <img src={Logo} className="Login-top-img" alt="logo top" />
                    <Spinner />
                </div>
                )}
                <div className="Login-bottom">
                   
                </div>
            </div>
            </div>
        </>
    )
}

export default Login
