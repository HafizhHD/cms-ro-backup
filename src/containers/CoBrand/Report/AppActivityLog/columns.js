//import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import { SelectColumnFilter, NumberRangeColumnFilter } from './../../../../components/UI/Table/TableFilter'
import { FiEye } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'

const Columns = [
    {
        Header: 'No.',
        id: 'rowNumber',
        accessor: 'emailUser',
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
        Header: 'Kali Aplikasi Dibuka',
        accessor: 'appOpened',
        Filter: NumberRangeColumnFilter,
        filter: 'between'
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
//         label: 'Total Screen Time (Hours)',
//         name:'screenTime',
//         options: {
//             filter: false,
//             sort: true,
//         }
//     },
//     {
//         label: 'Social Media (Hours)',
//         name:'screenTimeSocialMedia',
//         options: {
//             filter: false,
//             sort: true,
//         }
//     },
//     {
//         label: 'Games (Hours)',
//         name: 'screenTimeGames',
//         options: {
//             filter: false,
//             sort: true,
//         }
//     },
//     {
//         label: 'Video (Hours)',
//         name: 'screenTimeVideo',
//         options: {
//             filter: false,
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