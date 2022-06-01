//import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import { SelectColumnFilter, NumberRangeColumnFilter, DateRangeColumnFilter } from '../../../../components/UI/Table/TableFilter'

const dateFormat = {
    year: 'numeric', month: 'long', day: 'numeric'
}

const Columns = [
    {
        Header: 'No.',
        id: 'rowNumber',
        disableFilters: true
    },
    {
        Header: 'Email User',
        accessor: 'emailUser',
        disableFilters: true,
        disableGlobalFilter: true
    },
    {
        Header: 'Nama',
        accessor: 'nameUser',
        disableFilters: true
    },
    {
        Header: 'Email Orang tua',
        accessor: 'parentEmail',
        disableFilters: true,
        disableGlobalFilter: true
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
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
    {
        Header: 'Jumlah Pembayaran (Rp)',
        accessor:'paymentAmount',
        disableFilters: true,
        Cell: ({value}) => {
            if(value !== undefined) return value.toLocaleString('id');
            else return '';
        }
    },
    {
        Header: 'Tanggal Pembayaran',
        accessor: 'paymentDate',
        Filter: DateRangeColumnFilter,
        filter: 'dateBetween',
        Cell: ({value}) => {
            if(value !== undefined) return value.toLocaleDateString("en-UK", dateFormat);
            else return ''
        }
    },
    {
        Header: 'Metode Pembayaran',
        accessor: 'paymentMethod',
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
    {
        Header: 'Biaya Administrasi (Rp)',
        accessor:'adminFee',
        disableFilters: true,
        Cell: ({value}) => {
            if(value !== undefined) return value.toLocaleString('id');
            else return '';
        }
    },
    {
        Header: 'PPN (Rp)',
        accessor:'taxAmount',
        disableFilters: true,
        Cell: ({value}) => {
            if(value !== undefined) return value.toLocaleString('id');
            else return '';
        }
    },
    {
        Header: 'Dasar Perhitungan Bagi Hasil (Rp)',
        accessor:'cleanAmount',
        disableFilters: true,
        Cell: ({value}) => {
            if(value !== undefined) return value.toLocaleString('id');
            else return '';
        }
    },
    {
        Header: 'Ruang Ortu (Rp)',
        accessor:'myAmount',
        disableFilters: true,
        Cell: ({value}) => {
            if(value !== undefined) return value.toLocaleString('id');
            else return '';
        }
    },
    {
        Header: 'Mitra Asuh (Rp)',
        accessor:'theirAmount',
        disableFilters: true,
        Cell: ({value}) => {
            if(value !== undefined) return value.toLocaleString('id');
            else return '';
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

// const Columns = [
//     {
//         name: 'No.',
//         options: {
//             filter: false,
//             customBodyRender: (value, meta) => {
//                 return (
//                     meta.rowIndex + 1
//                 );
//             },
//             setCellProps: () => ({ style: { minWidth: "10px", maxWidth: "10px" }}),
//             setCellHeaderProps: () => ({ style: { minWidth: "10px", maxWidth: "10px" }}),
//         }
//     },
//     {
//         label: 'Nama',
//         name: 'nameUser',
//         options: {
//             filter: false,
//             sort: true,
//         }
//     },
//     {
//         label: 'Jenis User',
//         name: 'userType',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     {
//         label: 'Nama Orangtua',
//         name: 'parentName',
//         options: {
//             filter: false,
//             sort: true,
//         }
//     },
//     {
//         label: 'Sekolah',
//         name: 'childInfo.schoolName',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     {
//         label: 'Pendidikan',
//         name: 'childInfo',
//         options: {
//             filter: true,
//             sort: true,
//             customBodyRender: (value, tableMeta, updateValue) => {
//                 console.log(value);
//                 if(value != null) return value.StudyLevel;
//                 else return ' '
//             },

//             setCellProps: () => ({ style: { minWidth: "100px", maxWidth: "100px" }}),
//             setCellHeaderProps: () => ({ style: { minWidth: "100px", maxWidth: "100px" }}),
//         }
//     },
//     {
//         label: 'Jenis Kelamin',
//         name:'gender',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     {
//         label: 'Alamat',
//         name:'address',
//         options: {
//             filter: false,
//             sort: true,
//         }
//     },
//     {
//         label: 'Mulai Berlanggan',
//         name: 'startSubscription',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     {
//         label: 'Berlanggan Sampai',
//         name: 'endSubscription',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     // {
//     //     label: 'Tgl. Registrasi',
//     //     name: 'dateCreated',
//     //     Cell: ({ value }) => {
//     //         return <p>{value.split('T')[0]}</p>
//     //     }
//     // },
// ];

export default Columns;