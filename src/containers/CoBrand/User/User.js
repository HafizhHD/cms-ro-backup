import  { useState, useEffect } from 'react';
import './User.scss';

function User(){
    return (
        <div className="Program">
            <h1>USER</h1>
            <NavLink to="/cms/user" id="add_program">
                <FiPlus className="IconAdd" />
               <span>Create New Program</span>  
            </NavLink>
            {/* <div className="Program__table">
                <TableProgram 
                    COLUMNS={columns(setProgramDeleting)} 
                    DATA={programList.programs}  
                />
            </div> */}
        </div>
    )
    }


export default User
