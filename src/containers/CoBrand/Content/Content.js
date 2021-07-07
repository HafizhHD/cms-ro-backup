import React from 'react';
import columns from './components/Columns';
import Data from './components/MOCK_DATA.json';
import TableContent from './../../../components/UI/Table/Table';
import './Content.scss';
import { FiPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

function Content() {
    return (
        <div className="Content">
            <h1>CONTENT</h1>
            <NavLink to="/content/add">
                <FiPlus className="IconAdd" />
               <span>Create New Content</span>  
            </NavLink>
            <div className="Content__table">
                <input 
                    type="text" 
                    className="Content__table__input" 
                    placeholder="Search"
                />
                <TableContent COLUMNS={columns} DATA={Data}  />
            </div>
        </div>
    )
}

export default Content
