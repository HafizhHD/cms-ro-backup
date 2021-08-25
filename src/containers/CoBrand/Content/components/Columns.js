import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'

const Columns = [
    {
        Header: 'Category',
        accessor: 'category'
    },
    {
        Header: 'Title',
        accessor: 'title'
    },
    {
        Header: 'Created Date',
        accessor: 'created_date'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Action',
        Cell: (row) => (
            <>
                <NavLink
                    to="/content/view"
                    className="action_btn"
                >
                <button 
                    className="btn_action"
                    onClick={() => console.log(row)}>
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
                <button
                    className="btn_action"
                >
                    <div>
                        <FiTrash2 className="btn_action-icon" />
                    </div>
                </button>
            </>
        )
    }
];

export default Columns;