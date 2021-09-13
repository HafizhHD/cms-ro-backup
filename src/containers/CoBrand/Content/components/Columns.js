import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'



const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

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
        accessor: 'startDate',
        Cell: ({cell}) => (
            <>
                {new Date(cell.row.values.startDate).toLocaleDateString("en-UK", dateFormat)}
            </>
        )
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Action',
        accessor: '_id',
        Cell: ({cell}) => (
            <>
                <NavLink
                    to="/content/view/"
                    className="nav_btn"
                    title="View Detail"
                    onClick={() => {
                        localStorage.setItem('contentViewed', cell.row.values._id)
                    }}
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
                    title="Edit Content"
                >
                    <button 
                    className="btn_action">
                        <div>
                            <FiEdit2 className="btn_action-icon" />
                        </div>
                    </button>
                </NavLink>
                
                <NavLink to="/content"
                    className="nav_btn"
                    title="Delete Content"
                    onClick={() => {
                        localStorage.setItem('contentDeleting', cell.row.values._id);
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