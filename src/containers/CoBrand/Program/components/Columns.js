import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Columns = [
    {
        Header: 'Title',
        accessor: 'programName'
    },
    {
        Header: 'Start Date',
        accessor: 'startDate'
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
        Cell: ({cell}) => (
            <>
                <NavLink to="/content" 
                        onClick={() => {
                            let programSelected = JSON.stringify(cell.row.values);
                            localStorage.setItem('programForContent', programSelected);
                        }}>
                    <button 
                        className="btn_action">
                        <div>
                            <FiEye className="btn_action-icon" />
                        </div>
                    </button>
                </NavLink>
                <NavLink to="/program/edit">
                    <button
                        className="btn_action"
                    >
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
]

export default Columns;