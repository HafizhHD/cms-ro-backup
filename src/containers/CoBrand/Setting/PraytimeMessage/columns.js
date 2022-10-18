import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = (setPraytimeMessageDeleting, setWarning) => {
    return ([
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
                    {/* <NavLink to="/tools/setting/komunitas/edit"
                        className="nav_btn"
                        title="Edit Komunitas"
                        onClick={() => {
                            localStorage.setItem('communitySelected', cell.row.values.cobrandComunityId)
                        }}>
                        <button
                            className="btn_action"
                        >
                            <div>
                                <FiEdit2 className="btn_action-icon" />
                            </div>
                        </button>
                    </NavLink> */}
                    <NavLink to="/tools/setting/school-group"
                        className="nav_btn"
                        title="Delete Hadits/Pesan"
                        onClick={() => {
                            setPraytimeMessageDeleting([cell.row.values.groupMitraAsuhId, cell.row.values.groupMitraAsuhName]);
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