import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = (setPraytimeMessageDeleting, setWarning) => {
    return ([
        {
            Header: 'ID',
            accessor: '_id'
        },
        {
            Header: 'Tanggal',
            accessor: 'prayDate',
            Cell: ({value}) => (
                <>
                    {value !== undefined ? new Date(value).toLocaleDateString("id-ID", dateFormat) : ''}
                </>
            )
        },
        {
            Header: 'Shubuh',
            accessor: 'shubuh',
            disableFilters: true
        },
        {
            Header: 'Dzuhur',
            accessor: 'dzuhur',
            disableFilters: true
        },
        {
            Header: 'Ashr',
            accessor: 'ashr',
            disableFilters: true
        },
        {
            Header: 'Maghrib',
            accessor: 'maghrib',
            disableFilters: true
        },
        {
            Header: 'Isya',
            accessor: 'isya',
            disableFilters: true
        },
        {
            Header: 'Action',
            disableSortBy: true,
            disableGlobalFilter: true,
            Cell: ({cell}) => (
                <>
                    <NavLink to="/cms/praytime-message/edit"
                        className="nav_btn"
                        title="Edit Hadits/Pesan"
                        onClick={() => {
                            localStorage.setItem('praytimeSelected', cell.row.values._id)
                        }}>
                        <button
                            className="btn_action"
                        >
                            <div>
                                <FiEdit2 className="btn_action-icon" />
                            </div>
                        </button>
                    </NavLink>
                    <NavLink to="/cms/praytime-message"
                        className="nav_btn"
                        title="Delete Hadits/Pesan"
                        onClick={() => {
                            setPraytimeMessageDeleting([cell.row.values._id, new Date(cell.row.values.prayDate).toLocaleDateString("id-ID", dateFormat)]);
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