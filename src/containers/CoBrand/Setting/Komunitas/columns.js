import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = (setCommuntiyDeleting, setWarning) => {
    return ([
        {
            Header: 'ID Komunitas',
            accessor: 'cobrandComunityId'
        },
        {
            Header: 'Nama Komunitas',
            accessor: 'cobrandComunityName',
            disableFilters: true
        },
        {
            Header: 'Sub-Komunitas dari',
            accessor: 'partComunityId',
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
                    <NavLink to="/tools/setting/komunitas"
                        className="nav_btn"
                        title="Delete Komunitas"
                        onClick={() => {
                            setCommuntiyDeleting([cell.row.values.cobrandComunityId, cell.row.values.cobrandComunityName]);
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