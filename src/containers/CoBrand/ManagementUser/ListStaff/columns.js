import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = (setStaffDeleting, setWarning) => {
    return ([
        {
            Header: 'ID',
            accessor: '_id'
        },
        {
            Header: 'User Name',
            accessor: 'userName',
            disableFilters: true
        },
        {
            Header: 'Email User',
            accessor: 'emailUser',
            disableFilters: true
        },
        {
            Header: 'Tipe User',
            accessor: 'userType',
        },
        {
            Header: 'Level User',
            accessor: 'userLevel',
        },
        {
            Header: 'Komunitas',
            accessor: 'cobrandComunityId'
        },
        {
            Header: 'Grup Mitra Asuh',
            accessor: 'groupMitraAsuhId'
        },
        {
            Header: 'Sekolah',
            accessor: 'sekolah'
        },
        {
            Header: 'No. Telepon',
            accessor: 'phone',
        },
        {
            Header: 'Action',
            disableSortBy: true,
            disableGlobalFilter: true,
            Cell: ({cell}) => (
                <>
                    <NavLink to="/tools/admin-staff/edit"
                        className="nav_btn"
                        title="Edit Staff"
                        onClick={() => {
                            localStorage.setItem('staffSelected', cell.row.values._id)
                        }}>
                        <button
                            className="btn_action"
                        >
                            <div>
                                <FiEdit2 className="btn_action-icon" />
                            </div>
                        </button>
                    </NavLink>
                    {cell.row.values.emailUser !== 'admin@asia.ruangortu.id' && cell.row.values.emailUser !== JSON.parse(localStorage.getItem('userData')).emailUser &&
                     (JSON.parse(localStorage.getItem('userData')).userLevel === 'Super Admin' ||
                    (JSON.parse(localStorage.getItem('userData')).userLevel === 'Admin' && ((JSON.parse(localStorage.getItem('userData')).sekolah ?? '') === cell.row.values.sekolah ||
                    (JSON.parse(localStorage.getItem('userData')).groupMitraAsuhId ?? '') === cell.row.values.groupMitraAsuhId) && cell.row.values.sekolah && cell.row.values.groupMitraAsuhId))
                     ? <NavLink to="/tools/admin-staff"
                        className="nav_btn"
                        title="Delete Staff"
                        onClick={() => {
                            setStaffDeleting([cell.row.values._id, cell.row.values.userName]);
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
                    </NavLink> : null}
                </>
            )
        }
    ]);
}

export default Columns;