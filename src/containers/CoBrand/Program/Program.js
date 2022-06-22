import  { useState, useEffect } from 'react';
import './Program.scss';
import TableProgram from './../../../components/UI/Table/Table';
import columns from './components/Columns';
import Data from './components/MOCK_DATA.json';
import { deleteProgram } from '../../../store/actions/dashboard';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import axios from 'axios';
import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
import {connect} from 'react-redux';
import { getProgramList } from '../../../components/API/filter';
import Warning from '../../../components/UI/Warning/Warning'

// import Modal from '../../../components/UI/Modal/Modal';

function Program({
    isCurrentlyLoading,
    onDeleteProgram
}) {
    const [showModal, setShowModal] = useState(false);

    const [isLoading, setLoading] = useState(true);
    const [programList, setProgramList] = useState();
    const [programDeleting, setProgramDeleting] = useState(null);
    const [showWarning, setShowWarning] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    /*
    const submitModal = () => {
        alert('ok')
    }
    */
    
    const userData = JSON.parse(localStorage.getItem('userData'));
    const params = {
        whereKeyValues: {
            cobrandEmail: userData.cobrandEmail
        },
        orderKeyValues: {
            dateCreated: -1
        },
        includeThumbnailData :false,
        limit: Number.MAX_SAFE_INTEGER
    };

    
    function retrieveList() {
        getProgramList(params)
        .then(response => {
            setProgramList(response.data);
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
        if(localStorage.getItem('programDeleting')) {
            setProgramDeleting(JSON.parse(localStorage.getItem('programDeleting')));
            setConfirmDelete(true);
            localStorage.removeItem('programDeleting');
        }
        else retrieveList();
    }, []);

    useEffect(() => {
        if(programDeleting && confirmDelete) {
            setLoading(true);
            onDeleteProgram(userData.cobrandEmail, programDeleting, retrieveList);
            setConfirmDelete(false);
            setProgramDeleting(null);
        }
    }, [programDeleting, confirmDelete]);

    if(isLoading || isCurrentlyLoading) {
        return <RKLoader/>
    }

    return (
        <div className="Program">            
            {showWarning ? <Warning setDeleting={setProgramDeleting} setConfirmDeleting={setConfirmDelete} setWarning={setShowWarning} message={"Program"}/> : null}
            <h1>PROGRAM</h1>
            {/* <NavLink to="/cms/program/revisilist" id="add_program">
                <FiPlus className="IconAdd" />
               <span>revisilist</span>  
            </NavLink> */}
            <NavLink to="/cms/program/add" id="add_program">
                <FiPlus className="IconAdd" />
               <span>Buat Program Baru</span>  
            </NavLink>
            <div className="Program__table">
                <TableProgram 
                    COLUMNS={columns(setProgramDeleting, setShowWarning)} 
                    DATA={programList.programs}  
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
        onDeleteProgram: (email, deletingProgram, retrieveList) => dispatch(deleteProgram(email, deletingProgram, retrieveList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Program)
