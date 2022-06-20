import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = (setProgramDeleting, setWarning) => {
    return ([
        {
            Header: 'ID',
            accessor: '_id'
        },
        {
            Header: 'Nama Program',
            accessor: 'programName',
            disableFilters: true
        },
        {
            Header: 'Kategori Program',
            accessor: 'category',
            // Filter: SelectColumnFilter,
            // filter: 'equals',
    
            Cell: ({value, row}) => {
                if(value !== undefined) return value;
                else {
                    if(row.index % 3 === 1) return <p>Pendidikan Agama</p>
                    else return <p>Pengetahuan Siswa Umum</p>
                }
            }
        },
        {
            Header: 'Target Pembaca',
            accessor: 'targetAudiance',
            // Filter: SelectColumnFilter,
            // filter: 'equals',
            Cell: ({value, row}) => {
                if(value !== undefined) return value.join(', ');
                else return <p>Semua</p>
            }
        },
        {
            Header: 'Status',
            accessor: 'status',
            // Filter: SelectColumnFilter,
            // filter: 'equals'
        },
        {
            Header: 'Action',
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
                            setWarning(true);
                            document.body.style.overflow = 'hidden';
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