import React from 'react'
import Spinner from '../Loader/Spinner/Spinner';
import './RKLoader.scss';

function RKLoader({ text = 'Mohon Tunggu' }) {
    return (
        <div className="LoadingFullRkInner">
            <h1 className="LoadingFullRkInner__heading"><span>Keluarga HKBP</span> </h1>
            <Spinner />
            <p>{text}</p>
        </div>
    )
}

export default RKLoader
