import { FiX, FiCheck } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'



const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = (setCommentBlocked) => {
    return (
    [
        // {
        //     Header: 'Nomor',
        //     accessor: 'index + 1'
        // },
    {
        Header: 'ID Komentar',
        accessor: '_id'
    },
   
    {
        Header: 'Email Pengguna',
        accessor: 'emailUser'
    },
    {
        Header: 'Komentar',
        accessor: 'comment'
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
        // accessor: '_id',
        disableSortBy: true,
        disableGlobalFilter: true,
        Cell: ({cell}) => (
            <>
                <NavLink
                    to="/cms/content/view/comment"
                    className="nav_btn"
                    title={cell.row.values.status === 'active' ? "Blokir Komentar" : "Unblock Komentar"}
                    onClick={() => {
                        if(cell.row.values.status === "active") setCommentBlocked([cell.row.values._id, "blocked"]);
                        else setCommentBlocked([cell.row.values._id, "active"]);
                    }}
                >
                <button 
                    className="btn_action"
                >
                    <div>
                        {cell.row.values.status === 'active' ? <FiX className="btn_action-icon" /> : <FiCheck className="btn_action-icon" />}
                    </div>
                </button>
                </NavLink>
            </>
        )
    }
]) };

export default Columns;