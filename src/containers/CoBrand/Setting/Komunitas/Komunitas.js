import  { useState, useEffect } from 'react';
import './Komunitas.scss'; //ini
import TableProgram from '../../../../components/UI/Table/Table';
import columns from './columns';
import { deleteCommunity } from '../../../../store/actions/dashboard';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import axios from 'axios';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import {connect} from 'react-redux';
import { getCommunityList } from '../../../../components/API/filter';
import Warning from '../../../../components/UI/Warning/Warning'

// import Modal from '../../../components/UI/Modal/Modal';

function Komunitas({
    isCurrentlyLoading,
    onDeleteCommunity
}) {
    const [showModal, setShowModal] = useState(false);

    const [isLoading, setLoading] = useState(true);
    const [communityList, setCommunityList] = useState();
    const [communityDeleting, setCommunityDeleting] = useState(null);
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
        getCommunityList(params)
        .then(response => {
            setCommunityList(response.data.Data);
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
        if(localStorage.getItem('communityDeleting')) {
            setCommunityDeleting(JSON.parse(localStorage.getItem('communityDeleting')));
            setConfirmDelete(true);
            localStorage.removeItem('communityDeleting');
        }
        retrieveList();
    }, []);

    useEffect(() => {
        if(communityDeleting && confirmDelete) {
            setLoading(true);
            onDeleteCommunity(userData.cobrandEmail, communityDeleting, retrieveList);
            setConfirmDelete(false);
            setCommunityDeleting(null);
        }
    }, [communityDeleting, confirmDelete]);

    if(isLoading || isCurrentlyLoading) {
        return <RKLoader/>
    }

    return (
        <div className="Community">            
            {showWarning ? <Warning setDeleting={setCommunityDeleting} setConfirmDeleting={setConfirmDelete} setWarning={setShowWarning} message={"Komunitas"}/> : null}
            <h1>KOMUNITAS PENGGUNA</h1>
            {/* <NavLink to="/cms/program/revisilist" id="add_program">
                <FiPlus className="IconAdd" />
               <span>revisilist</span>  
            </NavLink> */}
            <NavLink to="/tools/setting/komunitas/add" id="add_community">
                <FiPlus className="IconAdd" />
               <span>Tambah Komunitas Baru</span>  
            </NavLink>
            <div className="Community__table">
                <TableProgram 
                    COLUMNS={columns(setCommunityDeleting, setShowWarning)} 
                    DATA={communityList}  
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
        onDeleteCommunity: (email, deletingCommunity, retrieveList) => dispatch(deleteCommunity(email, deletingCommunity, retrieveList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Komunitas)
