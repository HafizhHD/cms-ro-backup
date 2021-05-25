import React from 'react'
import Spinner from '../Loader/Spinner/Spinner';
import './RKLoader.scss';

function RKLoader({ text = 'Mohon Tunggu' }) {
    return (
        <div className="LoadingFullRk">
            <h1 className="LoadingFullRk__heading">ruang <span>keluarga</span> </h1>
            <Spinner />
            <p>{text}</p>
        </div>
    )
}

export default RKLoader
