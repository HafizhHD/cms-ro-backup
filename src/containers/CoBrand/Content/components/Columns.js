import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'

const Columns = [
    {
        Header: 'Category',
        accessor: 'contentType'
    },
    {
        Header: 'Title',
        accessor: 'contentName'
    },
    {
        Header: 'Start Date',
        accessor: 'startDate'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Action',
        Cell: ({cell}) => (
            <>
                <NavLink
                    to="/content/view"
                    className="action_btn"
                >
                <button 
                    className="btn_action"
                >
                    <div>
                        <FiEye className="btn_action-icon" />
                    </div>
                </button>
                </NavLink>
                <NavLink
                    to="/content/edit"
                    className="nav_btn"
                >
                    <button 
                    className="btn_action">
                        <div>
                            <FiEdit2 className="btn_action-icon" />
                        </div>
                    </button>
                </NavLink>
                
                <NavLink to="/content"
                    onClick={() => {
                        localStorage.setItem('contentDeleting', cell.row.values.contentName);
                        window.location.reload();
                    }}
                    replace>
                    <button
                        className="btn_action"
                    >
                        <div>
                            <FiTrash2 className="btn_action-icon" />
                        </div>
                    </button>
                </NavLink>
            </>
        )
    }
];

export default Columns;