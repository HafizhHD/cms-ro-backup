import  { useState, useEffect } from 'react';
import './PraytimeMessage.scss'; //ini
import TableProgram from '../../../../components/UI/Table/Table';
import columns from './columns';
import { deletePraytimeMessage } from '../../../../store/actions/dashboard';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import axios from 'axios';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import {connect} from 'react-redux';
import { getPraytimeMessageList } from '../../../../components/API/filter';
import Warning from '../../../../components/UI/Warning/Warning'

// import Modal from '../../../components/UI/Modal/Modal';

function PraytimeMessage({
    isCurrentlyLoading,
    onDeletePraytimeMessage
}) {
    const [showModal, setShowModal] = useState(false);

    const [isLoading, setLoading] = useState(true);
    const [praytimeMessageList, setPraytimeMessageList] = useState([]);
    const [praytimeMessageDeleting, setPraytimeMessageDeleting] = useState(null);
    const [showWarning, setShowWarning] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    /*
    const submitModal = () => {
        alert('ok')
    }
    */
    
    const userData = JSON.parse(localStorage.getItem('userData'));
    const params = {
        orderKeyValues: {
            prayDate: -1
        }
    };

    
    function retrieveList() {
        getPraytimeMessageList(params)
        .then(response => {
            setPraytimeMessageList(response.data.Data);
            // console.log(response.data);
            setLoading(false);
        })
        .catch(error => {
            // console.log(error);
            setLoading(false);
        });
    }
    
    useEffect(() => {
        setLoading(true);
        if(localStorage.getItem('praytimeMessageDeleting')) {
            setPraytimeMessageDeleting(JSON.parse(localStorage.getItem('praytimeMessageDeleting')));
            setConfirmDelete(true);
            localStorage.removeItem('praytimeMessageDeleting');
        }
        retrieveList();
    }, []);

    useEffect(() => {
        if(praytimeMessageDeleting && confirmDelete) {
            setLoading(true);
            onDeletePraytimeMessage(userData.cobrandEmail, praytimeMessageDeleting, retrieveList);
            setConfirmDelete(false);
            setPraytimeMessageDeleting(null);
        }
    }, [praytimeMessageDeleting, confirmDelete]);

    if(isLoading || isCurrentlyLoading) {
        return <RKLoader/>
    }

    return (
        <div className="PraytimeMessage">            
            {showWarning ? <Warning setDeleting={setPraytimeMessageDeleting} setConfirmDeleting={setConfirmDelete} setWarning={setShowWarning} message={"Hadits/Pesan"}/> : null}
            <h1>HADITS/PESAN UNTUK WAKTU SHOLAT</h1>
            {/* <NavLink to="/cms/program/revisilist" id="add_program">
                <FiPlus className="IconAdd" />
               <span>revisilist</span>  
            </NavLink> */}
            <NavLink to="/cms/praytime-message/add" id="add_praytimemessage">
                <FiPlus className="IconAdd" />
               <span>Tambah Hadits/Pesan Baru</span>  
            </NavLink>
            <div className="PraytimeMessage__table">
                <TableProgram 
                    COLUMNS={columns(setPraytimeMessageDeleting, setShowWarning)} 
                    DATA={praytimeMessageList}  
                />
            </div>

            {/* <button 
                onClick={() => setShowModal(true)}>
                Show Modal
            </button> */}
            
            {/* <Modal 
                isShow={showModal}
                onClose={() => setShowModal(false)} 
                onSubmit={submitModal}
                title="Modal Title"
            >
                <p>Hello Worlds</p>
            </Modal> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isCurrentlyLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeletePraytimeMessage: (email, deletingPraytimeMessage, retrieveList) => dispatch(deletePraytimeMessage(email, deletingPraytimeMessage, retrieveList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PraytimeMessage)
