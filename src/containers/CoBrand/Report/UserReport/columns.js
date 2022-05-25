//import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'


const Columns = [
    {
        name: 'No.',
        options: {
            filter: false,
            customBodyRender: (value, meta) => {
                return (
                    meta.rowIndex + 1
                );
            },
            setCellProps: () => ({ style: { minWidth: "10px", maxWidth: "10px" }}),
            setCellHeaderProps: () => ({ style: { minWidth: "10px", maxWidth: "10px" }}),
        }
    },
    {
        label: 'Nama',
        name: 'nameUser',
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        label: 'Jenis User',
        name: 'userType',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: 'Nama Orangtua',
        name: 'parentName',
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        label: 'Sekolah',
        name: 'childInfo.schoolName',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: 'Pendidikan',
        name: 'childInfo',
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value, tableMeta, updateValue) => {
                console.log(value);
                if(value != null) return value.StudyLevel;
                else return ' '
            },

            setCellProps: () => ({ style: { minWidth: "100px", maxWidth: "100px" }}),
            setCellHeaderProps: () => ({ style: { minWidth: "100px", maxWidth: "100px" }}),
        }
    },
    {
        label: 'Jenis Kelamin',
        name:'gender',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: 'Alamat',
        name:'address',
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        label: 'Mulai Berlanggan',
        name: 'startSubscription',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: 'Berlanggan Sampai',
        name: 'endSubscription',
        options: {
            filter: true,
            sort: true,
        }
    },
    // {
    //     label: 'Tgl. Registrasi',
    //     name: 'dateCreated',
    //     Cell: ({ value }) => {
    //         return <p>{value.split('T')[0]}</p>
    //     }
    // },
];

export default Columns;