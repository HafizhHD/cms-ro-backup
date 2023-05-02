import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'



const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = (setScheduleDeleting, setWarning, setEditSchedule, setEditScheduleData) => {
    return (
    [
        // {
        //     Header: 'Nomor',
        //     accessor: 'index + 1'
        // },
    {
        Header: 'Nama Jadwal',
        accessor: 'scheduleName'
    },
    {
        Header: 'Deskripsi Jadwal',
        accessor: 'scheduleDescription'
    },
    {
        Header: 'Hari',
        accessor: 'deviceUsageDays',
        Cell: ({value}) => value.join(', ')
    },
    {
        Header: 'Waktu Mulai',
        accessor: 'deviceUsageStartTime',
    },
    {
        Header: 'Waktu Selesai',
        accessor: 'deviceUsageEndTime',
    },
    {
        Header: 'Action',
        // accessor: '_id',
        disableSortBy: true,
        disableGlobalFilter: true,
        Cell: ({cell}) => (
            <>
                <NavLink
                    to="/tools/school-control"
                    className="nav_btn"
                    title="Edit Jadwal"
                    onClick={() => {
                        var param = {
                            scheduleName: cell.row.values.scheduleName,
                            oldValue: cell.row.values.scheduleName,
                            scheduleDescription: cell.row.values.scheduleDescription,
                            scheduleType: 'harian',
                            deviceUsageDays: cell.row.values.deviceUsageDays,
                            deviceUsageStartTime: cell.row.values.deviceUsageStartTime,
                            deviceUsageEndTime: cell.row.values.deviceUsageEndTime,
                            status: 'aktif',
                        }
                        setEditScheduleData(param);
                        setEditSchedule(true);
                    }}
                >
                    <button 
                    className="btn_action">
                        <div>
                            <FiEdit2 className="btn_action-icon" />
                        </div>
                    </button>
                </NavLink>
                
                <NavLink to="/tools/school-control"
                    className="nav_btn"
                    title="Hapus Jadwal"
                    onClick={() => {
                        setScheduleDeleting([cell.row.values.scheduleName, cell.row.values.scheduleName]);
                        setWarning(true);
                        document.body.style.overflow = 'hidden';
                    }}
                    >
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