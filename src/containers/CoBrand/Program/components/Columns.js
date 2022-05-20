import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = (setProgramDeleting) => {
    return ([
        {
            Header: 'Title',
            accessor: 'programName'
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
                return <p style={{ color: 'green', fontWeight: 'bold' }}>{value}</p>
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
                        to="/cms/program/view"
                        className="nav_btn"
                        title="View Detail"
                        onClick={() => {
                            localStorage.setItem('programSelected', cell.row.values._id)
                        }}>
                        <button 
                            className="btn_action">
                            <div>
                                <FiEye className="btn_action-icon" />
                            </div>
                        </button>
                    </NavLink>
                    <NavLink to="/cms/program/edit"
                        className="nav_btn"
                        title="Edit Program"
                        onClick={() => {
                            localStorage.setItem('programSelected', cell.row.values._id)
                        }}>
                        <button
                            className="btn_action"
                        >
                            <div>
                                <FiEdit2 className="btn_action-icon" />
                            </div>
                        </button>
                    </NavLink>
                    <NavLink to="/cms/program"
                        className="nav_btn"
                        title="Delete Program"
                        onClick={() => {
                            setProgramDeleting([cell.row.values._id, cell.row.values.programName]);
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
    ]);
}

export default Columns;