import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'



const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns =
    [
        // {
        //     Header: 'Nomor',
        //     accessor: 'index + 1'
        // },
        {
            Header: 'ID Content',
            accessor: '_id'
        },
        {
            Header: 'No. Urut Tahap',
            accessor: 'nomerUrutTahapan'
        },
        {
            Header: 'Nama Tahap',
            accessor: 'namaTahapan'
        },
        {
            Header: 'Judul Tahap',
            accessor: 'contentName'
        },
    // {
    //     Header: 'Topik Artikel',
    //     accessor: 'topics',
    //     Cell: ({value}) => value.join(', ')
    // },
    // {
    //     Header: 'Target Pembaca',
    //     accessor: 'targetAudiance',
    //     Cell: ({value}) => value.join(', ')
    // },
    // {
    //     Header: 'Tanggal Mulai',
    //     accessor: 'startDate',
    //     Cell: ({value}) => (
    //         <>
    //             {value !== undefined ? new Date(value).toLocaleDateString("id-ID", dateFormat) : ''}
    //         </>
    //     )
    // },
    // {
    //     Header: 'Tanggal Berakhir',
    //     accessor: 'endDate',
    //     Cell: ({value}) => (
    //         <>
    //             {value !== undefined ? new Date(value).toLocaleDateString("id-ID", dateFormat) : ''}
    //         </>
    //     )
    // },
    // {
    //     Header: 'Status',
    //     accessor: 'status',
    //     Cell: ({ value }) => {
    //         if(value === 'active') return <p style={{ color: 'green', fontWeight: 'bold' }}>{value}</p>
    //         else return <p style={{ color: 'red', fontWeight: 'bold' }}>{value}</p>
    //     }
    // },
    {
        Header: 'Action',
        // accessor: '_id',
        disableSortBy: true,
        disableGlobalFilter: true,
        Cell: ({cell}) => (
            <>
                <NavLink
                    to="/cms/program/view/step"
                    className="nav_btn"
                    title="View Detail"
                    onClick={() => {
                        localStorage.setItem('stepSelected', cell.row.values._id)
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
                {/* <NavLink
                    to="/cms/content/edit"
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
                
                <NavLink to="/cms/content"
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
                </NavLink> */}
            </>
        )
    }
];

export default Columns;