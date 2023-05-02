
import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { SelectArrayColumnFilter, SelectColumnFilter } from '../../../components/UI/Table/TableFilter'

const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = [
    {
        Header: 'ID',
        accessor: '_id'
    },
    {
        Header: 'Judul Notifikasi',
        accessor: 'messageSubject'
    },
    {
        Header: 'Isi',
        accessor: 'messageContent'
    },
    {
        Header: 'Kategori',
        accessor: 'category'
    },
    {
        Header: 'Media',
        accessor: 'mediaType',
        // Filter: SelectColumnFilter,
        // filter: 'arrIncludes',
    },
    {
        Header: 'Tujuan',
        accessor: 'destination',
        // Filter: SelectArrayColumnFilter,
        // filter: 'arrIncludes',
        // Cell: ({value}) => {
        //     return <table>
        //         {value.map(x => {
        //             return <tr>
        //                 <td>- {x}</td>
        //             </tr>
        //         })}
        //     </table>
        // }
        Cell: ({value}) => {
            if(value.length > 50) return value.substring(0,50) + "...";
            else return value;
        }
    },
    {
        Header: 'Tanggal Dijadwalkan',
        accessor: 'scheduleTime',
        sortType: (a, b) => {
            return new Date(b.values.dateCreated) - new Date(a.values.dateCreated);
        },
        Cell: ({value}) => {
            if(value !== undefined) return new Date(value).toLocaleDateString("id-ID", dateFormat);
            else return ''
        }
    },
    // {
    //     Header: 'Action',
    //     disableSortBy: true,
    //     disableGlobalFilter: true,
    //     Cell: ({cell}) => (
    //         <>
    //             <NavLink to="/cms/user/edit"
    //                 className="nav_btn"
    //                 title="Edit User"
    //                 onClick={() => {
    //                     localStorage.setItem('userSelected', cell.row.values.emailUser)
    //                 }}>
    //                 <button
    //                     className="btn_action"
    //                 >
    //                     <div>
    //                         <FiEdit2 className="btn_action-icon" />
    //                     </div>
    //                 </button>
    //             </NavLink>
    //             {cell.row.values.userType === 'child' && (JSON.parse(localStorage.getItem('userData')).sekolah !== '' ||  JSON.parse(localStorage.getItem('userData')).userLevel === 'Super Admin') ? <NavLink to="/cms/user/child-control"
    //                 className="nav_btn"
    //                 title="Kontrol User"
    //                 onClick={() => {
    //                     localStorage.setItem('userSelected', cell.row.values.emailUser)
    //                     localStorage.setItem('userNameSelected', cell.row.values.nameUser)
    //                 }}>
    //                 <button
    //                     className="btn_action"
    //                 >
    //                     <div>
    //                         <FiEye className="btn_action-icon" />
    //                     </div>
    //                 </button>
    //             </NavLink> : null}
    //         </>
    //     )
    // }
    
    
    // {
    //     Header: 'Tgl. Registrasi',
    //     accessor: 'dateCreated',
    //     Cell: ({ value }) => {
    //         return <p>{value.split('T')[0]}</p>
    //     }
    // },
    // {
    //     Header: 'Nama Gereja',
    //     accessor: 'namaHkbp'
    // },
   
    // {
    //     Header: 'User status',
    //     accessor: 'status',
    //     Cell: ({ value }) => {
    //         let style = {
    //             color: 'green'
    //         };
    //         if (value !== 'active') {
    //             style = {
    //                 color: 'red'
    //             }
    //         }

    //         return <p style={style}>{value}</p>
    //     }
    // },
    // {
    //     Header: 'User Details',
    //     id: 'expander',
    //     Cell: ({ row }) => {
    //         return (
    //             /*<Link
    //                 to="/helpdesk/pengguna/detail"
    //                 className="link-action"
    //                 onClick={() => {
    //                     // console.log(cell.row.values.emailUser);
    //                     localStorage.setItem('userSelected', cell.row.values.emailUser);
    //                 }}
    //                 >Detail
    //             </Link >*/
    //             <span {...row.getToggleRowExpandedProps()}>
    //                 {row.isExpanded ? '- Hide' : '+ Show'}
    //             </span>
    //         )
    //     }
    // },
];

export default Columns;