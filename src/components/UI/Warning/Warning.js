import React, {useState} from 'react';
import './Warning.scss';
import { FiAlertTriangle } from 'react-icons/fi';

function Warning({setDeleting = null, setConfirmDeleting, setWarning, message}) {

    return (
        <div key={message} className="warning">
            <div className="warning-content">
                <div className="warning-content-header">
                    <h2>Konfirmasi Penghapusan</h2>
                </div>
                <div className="warning-content-body">
                    <FiAlertTriangle className="warning-content-body-icon"/>
                    <div className="warning-content-body-message">
                        <p>Apakah Anda yakin ingin menghapus {message} ini?</p>
                        <div className="warning-content-body-message-button">
                            <div className="warning-content-body-message-button-delete"><button onClick={() => {
                                setConfirmDeleting(true);
                                setWarning(false);
                                document.body.style.overflow = 'unset';
                            }}>Hapus</button></div>
                            <div className="warning-content-body-message-button-cancel"><button onClick={() => {
                                if(setDeleting) setDeleting(null);
                                setWarning(false);
                                document.body.style.overflow = 'unset';
                            }}>Jangan Hapus</button></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Warning;