import React from 'react'
import Spinner from '../Loader/Spinner/Spinner';
import './RKLoader.scss';

function RKLoader({ text = 'Mohon Tunggu' }) {
    return (
        <div className="LoadingFullRkSpinner">
            <Spinner />
        </div>
    )
}

export default RKLoader
