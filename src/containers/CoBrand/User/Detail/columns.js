//import { Link } from 'react-router-dom';

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
        Cell: ({value}) => {
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
    }
];

export default Columns;