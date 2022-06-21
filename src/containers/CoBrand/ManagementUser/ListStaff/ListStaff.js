import  { useState, useEffect } from 'react';
import './ListStaff.scss';
import TableProgram from '../../../../components/UI/Table/Table';
import columns from './columns';
import { deleteStaff } from '../../../../store/actions/dashboard';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import axios from 'axios';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import {connect} from 'react-redux';
import { getAdminList } from '../../../../components/API/filter';
import Warning from '../../../../components/UI/Warning/Warning'

// import Modal from '../../../components/UI/Modal/Modal';

function ListStaff({
    isCurrentlyLoading,
    onDeleteStaff
}) {
    const [showModal, setShowModal] = useState(false);

    const [isLoading, setLoading] = useState(true);
    const [staffList, setStaffList] = useState();
    const [staffDeleting, setStaffDeleting] = useState(null);
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
        limit: Number.MAX_SAFE_INTEGER
    };

    
    function retrieveList() {
        getAdminList(params)
        .then(response => {
            setStaffList(response.data.Data);
            console.log(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        });
    }
    
    useEffect(() => {
        setLoading(true);
        if(localStorage.getItem('staffDeleting')) {
            setStaffDeleting(JSON.parse(localStorage.getItem('staffDeleting')));
            setConfirmDelete(true);
            localStorage.removeItem('staffDeleting');
        }
        retrieveList();
    }, []);

    useEffect(() => {
        if(staffDeleting && confirmDelete) {
            setLoading(true);
            onDeleteStaff(userData.cobrandEmail, staffDeleting, retrieveList);
            setConfirmDelete(false);
            setStaffDeleting(null);
        }
    }, [staffDeleting, confirmDelete]);

    if(isLoading || isCurrentlyLoading) {
        return <RKLoader/>
    }

    return (
        <div className="Staff">            
            {showWarning ? <Warning setDeleting={setStaffDeleting} setConfirmDeleting={setConfirmDelete} setWarning={setShowWarning} message={"Admin/Staff"}/> : null}
            <h1>ADMIN &amp; STAFF</h1>
            {/* <NavLink to="/cms/program/revisilist" id="add_program">
                <FiPlus className="IconAdd" />
               <span>revisilist</span>  
            </NavLink> */}
            <NavLink to="/tools/admin-staff/add" id="add_staff">
                <FiPlus className="IconAdd" />
               <span>Tambah Admin/Staff Baru</span>  
            </NavLink>
            <div className="Staff__table">
                <TableProgram 
                    COLUMNS={columns(setStaffDeleting, setShowWarning)} 
                    DATA={staffList}  
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
        onDeleteStaff: (email, deletingStaff, retrieveList) => dispatch(deleteStaff(email, deletingStaff, retrieveList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListStaff)
