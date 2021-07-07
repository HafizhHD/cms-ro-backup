import  { useState } from 'react';
import './Program.scss';
import TableProgram from './../../../components/UI/Table/Table';
import columns from './components/Columns';
import Data from './components/MOCK_DATA.json';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

// import Modal from '../../../components/UI/Modal/Modal';

function Program() {
    const [showModal, setShowModal] = useState(false);

    /*
    const submitModal = () => {
        alert('ok')
    }
    */

    return (
        <div className="Program">
         
            <h1>PROGRAM</h1>
            <NavLink to="/program/add">
                <FiPlus className="IconAdd" />
               <span>Create New Program</span>  
            </NavLink>
            <div className="Program__table">
                <input 
                    type="text" 
                    className="Program__table__input" 
                    placeholder="Search"
                />
                <TableProgram 
                    COLUMNS={columns} 
                    DATA={Data}  
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
