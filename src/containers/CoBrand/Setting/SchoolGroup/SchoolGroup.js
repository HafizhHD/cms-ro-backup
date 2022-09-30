import  { useState, useEffect } from 'react';
import './SchoolGroup.scss'; //ini
import TableProgram from '../../../../components/UI/Table/Table';
import columns from './columns';
import { deleteSchoolGroup } from '../../../../store/actions/dashboard';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import axios from 'axios';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import {connect} from 'react-redux';
import { getSchoolGroupList } from '../../../../components/API/filter';
import Warning from '../../../../components/UI/Warning/Warning'

// import Modal from '../../../components/UI/Modal/Modal';

function SchoolGroup({
    isCurrentlyLoading,
    onDeleteSchoolGroup
}) {
    const [showModal, setShowModal] = useState(false);

    const [isLoading, setLoading] = useState(true);
    const [schoolGroupList, setSchoolGroupList] = useState();
    const [schoolGroupDeleting, setSchoolGroupDeleting] = useState(null);
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
        getSchoolGroupList(params)
        .then(response => {
            setSchoolGroupList(response.data.Data);
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
        if(localStorage.getItem('schoolGroupDeleting')) {
            setSchoolGroupDeleting(JSON.parse(localStorage.getItem('schoolGroupDeleting')));
            setConfirmDelete(true);
            localStorage.removeItem('schoolGroupDeleting');
        }
        retrieveList();
    }, []);

    useEffect(() => {
        if(schoolGroupDeleting && confirmDelete) {
            setLoading(true);
            onDeleteSchoolGroup(userData.cobrandEmail, schoolGroupDeleting, retrieveList);
            setConfirmDelete(false);
            setSchoolGroupDeleting(null);
        }
    }, [schoolGroupDeleting, confirmDelete]);

    if(isLoading || isCurrentlyLoading) {
        return <RKLoader/>
    }

    return (
        <div className="SchoolGroup">            
            {showWarning ? <Warning setDeleting={setSchoolGroupDeleting} setConfirmDeleting={setConfirmDelete} setWarning={setShowWarning} message={"SchoolGroup"}/> : null}
            <h1>KOMUNITAS PENGGUNA</h1>
            {/* <NavLink to="/cms/program/revisilist" id="add_program">
                <FiPlus className="IconAdd" />
               <span>revisilist</span>  
            </NavLink> */}
            <NavLink to="/tools/setting/school-group/add" id="add_schoolgroup">
                <FiPlus className="IconAdd" />
               <span>Tambah SchoolGroup Baru</span>  
            </NavLink>
            <div className="SchoolGroup__table">
                <TableProgram 
                    COLUMNS={columns(setSchoolGroupDeleting, setShowWarning)} 
                    DATA={schoolGroupList}  
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
        onDeleteSchoolGroup: (email, deletingSchoolGroup, retrieveList) => dispatch(deleteSchoolGroup(email, deletingSchoolGroup, retrieveList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SchoolGroup)
