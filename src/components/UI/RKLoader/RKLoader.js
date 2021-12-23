import React from 'react'
import Spinner from '../Loader/Spinner/Spinner';
import './RKLoader.scss';

function RKLoader({ text = 'Mohon Tunggu' }) {
    return (
        <div className="LoadingFullRk">
<<<<<<< HEAD
            <h1 className="LoadingFullRk__heading"><span>RUANG ORTU</span> </h1>
=======
            <h1 className="LoadingFullRk__heading"><span>Ruang Ortu</span> </h1>
>>>>>>> 9bf1327cb5d3f45e02c7429f185acf2faf70528b
            <Spinner />
            <p>{text}</p>
        </div>
    )
}

export default RKLoader
