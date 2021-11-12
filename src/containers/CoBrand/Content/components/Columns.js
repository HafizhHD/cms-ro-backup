import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'



const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = (setContentDeleting) => {
    return (
    [
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
        accessor: (value) => new Date(value.startDate).toLocaleDateString("en-UK", dateFormat),
        Cell: ({value}) => (
            <>
                {new Date(value).toLocaleDateString("en-UK", dateFormat)}
            </>
        )
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
            if(value === 'active') return <p style={{ color: 'green', fontWeight: 'bold' }}>{value}</p>
            else return <p style={{ color: 'red', fontWeight: 'bold' }}>{value}</p>
        }
    },
    {
        Header: 'Action',
        accessor: '_id',
        disableSortBy: true,
        disableGlobalFilter: true,
        Cell: ({cell}) => (
            <>
                <NavLink
                    to="/content/view/"
                    className="nav_btn"
                    title="View Detail"
                    onClick={() => {
                        localStorage.setItem('contentSelected', cell.row.values._id)
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
                    onClick={() => {
                        localStorage.setItem('contentSelected', cell.row.values._id)
                    }}
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
                        setContentDeleting([cell.row.values._id, cell.row.values.contentName]);
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
]) };

export default Columns;