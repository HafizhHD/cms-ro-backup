
import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = [
    {
        Header: 'ID',
        accessor: '_id'
    },
    {
        Header: 'Nama',
        accessor: 'nameUser'
    },
    {
        Header: 'Email',
        accessor: 'emailUser'
    },
    {
        Header: 'Tipe User',
        accessor: 'userType'
    },
    {
        Header: 'No Telepon',
        accessor: 'phoneNumber'
    },
    {
        Header: 'Email Orang tua',
        accessor: 'parentEmail',
        // disableFilters: true,
        // disableGlobalFilter: true
    },
    // {
    //     Header: 'Nama Orang tua',
    //     accessor: 'parentName',
    //     // disableFilters: true,
    //     Cell: ({value}) => {
    //         if(value !== undefined) return value.join(', ');
    //         else return '';
    //     }
    // },
    {
        Header: 'Sekolah',
        accessor: 'childInfo.schoolName',
        // Filter: SelectColumnFilter,
        // filter: 'equals'
    },
    {
        Header: 'Pendidikan',
        accessor: 'childInfo.StudyLevel',
        // Filter: SelectColumnFilter,
        // filter: 'equals'
    },
    {
        Header: 'Jenis Kelamin',
        accessor:'gender',
    //     Filter: SelectColumnFilter,
    //     filter: 'equals'
    },
    {
        Header: 'Alamat',
        accessor:'address',
        // disableFilters: true
    },

    {
        Header: 'Tanggal Registrasi',
        accessor: 'dateCreated',
        sortType: (a, b) => {
            return new Date(b.values.dateCreated) - new Date(a.values.dateCreated);
        },
        Cell: ({value}) => {
            if(value !== undefined) return new Date(value).toLocaleDateString("id-ID", dateFormat);
            else return ''
        }
    },
    {
        Header: 'Mulai Berlanggan',
        accessor: 'startSubscription',
        // Filter: DateRangeColumnFilter,
        // filter: 'dateBetween'
    },
    {
        Header: 'Berlanggan Sampai',
        accessor: 'endSubscription',
        // Filter: DateRangeColumnFilter,
        // filter: 'dateBetween'
    },
    {
        Header: 'Action',
        disableSortBy: true,
        disableGlobalFilter: true,
        Cell: ({cell}) => (
            <>
                <NavLink to="/cms/user/edit"
                    className="nav_btn"
                    title="Edit User"
                    onClick={() => {
                        localStorage.setItem('userSelected', cell.row.values.emailUser)
                    }}>
                    <button
                        className="btn_action"
                    >
                        <div>
                            <FiEdit2 className="btn_action-icon" />
                        </div>
                    </button>
                </NavLink>
                {cell.row.values.userType === 'child' && (JSON.parse(localStorage.getItem('userData')).sekolah !== '' ||  JSON.parse(localStorage.getItem('userData')).userLevel === 'Super Admin') ? <NavLink to="/cms/user/child-control"
                    className="nav_btn"
                    title="Kontrol User"
                    onClick={() => {
                        localStorage.setItem('userSelected', cell.row.values.emailUser)
                        localStorage.setItem('userNameSelected', cell.row.values.nameUser)
                    }}>
                    <button
                        className="btn_action"
                    >
                        <div>
                            <FiEye className="btn_action-icon" />
                        </div>
                    </button>
                </NavLink> : null}
            </>
        )
    }
    
    
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