//import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import { SelectColumnFilter, DateRangeColumnFilter } from './../../../../components/UI/Table/TableFilter'

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
        Header: 'Jenis User',
        accessor: 'userType',
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
    {
        Header: 'Status',
        accessor: 'status',
        Filter: SelectColumnFilter,
        filter: 'equals'

    },
    {
        Header: 'Status Berlanggan',
        accessor: 'subscriptionStatus',
        Filter: SelectColumnFilter,
        filter: 'equals'

    },
    {
        Header: 'Paket Berlangganan',
        accessor: 'subscriptionPlan',
        Filter: SelectColumnFilter,
        filter: 'equals'

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
        Header: 'Pendidikan',
        accessor: 'childInfo.StudyLevel',
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
    {
        Header: 'Jenis Kelamin',
        accessor:'gender',
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
    {
        Header: 'Alamat',
        accessor:'address',
        disableFilters: true
    },
    {
        Header: 'Tanggal Registrasi',
        accessor: 'registerDate',
        Filter: DateRangeColumnFilter,
        filter: 'dateBetween',
        sortType: (a, b) => {
            return b.values.registerDate - a.values.registerDate;
        },
        Cell: ({value}) => {
            if(value !== undefined) return value.toLocaleDateString("id-ID", dateFormat);
            else return ''
        }
    },
    {
        Header: 'Mulai Berlanggan',
        accessor: 'startSubscription',
        Filter: DateRangeColumnFilter,
        filter: 'dateBetween',
        sortType: (a, b) => {
            let x = isNaN(a.values.startSubscription) ? new Date('2099-12-31') : a.values.startSubscription;
            let y = isNaN(b.values.startSubscription) ? new Date('2099-12-31') : b.values.startSubscription;
            return y-x;
        },
        Cell: ({value}) => {
            if(value !== undefined) return value.toLocaleDateString("id-ID", dateFormat);
            else return ''
        }
    },
    {
        Header: 'Berlanggan Sampai',
        accessor: 'endSubscription',
        Filter: DateRangeColumnFilter,
        filter: 'dateBetween',
        sortType: (a, b) => {
            let x = isNaN(a.values.startSubscription) ? new Date('2099-12-31') : a.values.startSubscription;
            let y = isNaN(b.values.startSubscription) ? new Date('2099-12-31') : b.values.startSubscription;
            return y-x;
        },
        Cell: ({value}) => {
            if(value !== undefined) return value.toLocaleDateString("id-ID", dateFormat);
            else return ''
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
//                 // console.log(value);
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