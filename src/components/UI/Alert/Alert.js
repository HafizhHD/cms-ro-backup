import React from 'react';
import './Alert.scss';
import { FiXCircle, FiCheckCircle } from 'react-icons/fi';

function Alert({type, message}) {
    return (
        <div className="alert">
            <div className={type}>
                <div className="alert-header">
                    {type === 'ALERT_ERROR' ? <FiXCircle /> : <FiCheckCircle/>}
                    <span>{type === 'ALERT_ERROR' ? 'Error!' : 'Success!'}</span>
                </div>
                <div className="alert-message">
                    <span>{message}</span>
                </div>
            </div>
        </div>
    )
}

export default Alert;