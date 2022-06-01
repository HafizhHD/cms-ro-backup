
import { Modal, Button } from 'react-bootstrap'


const Columns = [
    // {
    //     Header: 'No.',
    //     id: 'rowNumber',
    //     // disableFilters: true
    // },
    {
        Header: 'No Telepon',
        accessor: 'phoneNumber'
    },
    {
        Header: 'Tipe User',
        accessor: 'userType'
    },
    {
        Header: 'Email',
        accessor: 'emailUser'
    },
    {
        Header: 'Nama',
        accessor: 'nameUser'
    },
    {
        Header: 'Email Orang tua',
        accessor: 'parentEmail',
        // disableFilters: true,
        // disableGlobalFilter: true
    },
    {
        Header: 'Nama Orang tua',
        accessor: 'parentName',
        disableFilters: true,
        Cell: ({value}) => {
            if(value !== undefined) return value.join(', ');
            else return '';
        }
    },
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
   
    {
        Header: 'User status',
        accessor: 'status',
        Cell: ({ value }) => {
            let style = {
                color: 'green'
            };
            if (value !== 'active') {
                style = {
                    color: 'red'
                }
            }

            return <p style={style}>{value}</p>
        }
    },
    {
        Header: 'User Details',
        id: 'expander',
        Cell: ({ row }) => {
            return (
                /*<Link
                    to="/helpdesk/pengguna/detail"
                    className="link-action"
                    onClick={() => {
                        console.log(cell.row.values.emailUser);
                        localStorage.setItem('userSelected', cell.row.values.emailUser);
                    }}
                    >Detail
                </Link >*/
                <span {...row.getToggleRowExpandedProps()}>
                    {row.isExpanded ? '- Hide' : '+ Show'}
                </span>
            )
        }
    },
];

export default Columns;