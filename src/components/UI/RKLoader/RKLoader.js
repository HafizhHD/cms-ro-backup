import React from 'react'
import Spinner from '../Loader/Spinner/Spinner';
import Logo from './../../../assets/img/Logo_1.png';
import './RKLoader.scss';

function RKLoader({ text = 'Mohon Tunggu' }) {
    return (
        <div className="LoadingFullRk">
            <img src={Logo} className="Login-top-img" alt="logo top" />
            <Spinner />
            <p>{text}</p>
        </div>
    )
}

export default RKLoader
