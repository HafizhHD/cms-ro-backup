
import { Modal, Button } from 'react-bootstrap'


const Columns = [
    {
        Header: 'Email',
        accessor: 'emailUser'
    },
    {
        Header: 'Nama',
        accessor: 'nameUser'
    },
    {
        Header: 'No Telepon',
        accessor: 'phoneNumber'
    },
    {
        Header: 'Tgl. Registrasi',
        accessor: 'dateCreated',
        Cell: ({ value }) => {
            return <p>{value.split('T')[0]}</p>
        }
    },
    // {
    //     Header: 'Nama Gereja',
    //     accessor: 'namaHkbp'
    // },
    {
        Header: 'Tipe User',
        accessor: 'userType'
    },
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