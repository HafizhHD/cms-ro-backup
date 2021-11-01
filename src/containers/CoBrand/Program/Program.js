import  { useState, useEffect } from 'react';
import './Program.scss';
import TableProgram from './../../../components/UI/Table/Table';
import columns from './components/Columns';
import Data from './components/MOCK_DATA.json';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import axios from 'axios';
import RKLoader from '../../../components/UI/RKLoader/RKLoader';

// import Modal from '../../../components/UI/Modal/Modal';

function Program() {
    const [showModal, setShowModal] = useState(false);

    const [isLoading, setLoading] = useState(true);
    const [programList, setProgramList] = useState();

    /*
    const submitModal = () => {
        alert('ok')
    }
    */
    
    const userData = JSON.parse(localStorage.getItem('userData'));
    const params = {
        whereKeyValues: {
            cobrandEmail: userData.email
        }
    };

    
    
    useEffect(() => {
        setLoading(true);
        function retrieveList() {
            axios({
                method: 'post',
                url: 'https://rk.defghi.biz.id:8080/api/cobrand/programFilter',
                data: params,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                setProgramList(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
        }
        if(localStorage.getItem('programDeleting')) {
            const deleting = {
                whereValues: {
                    cobrandEmail: userData.email,
                    _id: localStorage.getItem('programDeleting')
                }
            }
            axios({
                method: 'post',
                url: 'https://rk.defghi.biz.id:8080/api/cobrand/programRemove',
                data: deleting,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log(response.data);
                localStorage.removeItem('programDeleting');
                retrieveList();
            })
            .catch(error => {
                console.log(error);
                localStorage.removeItem('programDeleting');
                retrieveList();
            });
        }
        else retrieveList();
        localStorage.removeItem('programDeleting');
    }, []);

    if(isLoading) {
        return <RKLoader/>
    }

    return (
        <div className="Program">
         
            <h1>PROGRAM</h1>
            <NavLink to="/program/add" id="add_program">
                <FiPlus className="IconAdd" />
               <span>Create New Program</span>  
            </NavLink>
            <div className="Program__table">
                <TableProgram 
                    COLUMNS={columns} 
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

export default Program
