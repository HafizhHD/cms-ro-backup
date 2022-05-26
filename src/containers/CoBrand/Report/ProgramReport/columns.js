//import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import { SelectColumnFilter } from './../../../../components/UI/Table/TableFilter'


const Columns = [
    {
        Header: 'No.',
        id: 'rowNumber',
        disableFilters: true
    },
    {
        Header: 'Nama Program',
        accessor: 'programName',
        disableFilters: true
    },
    {
        Header: 'Kategori Program',
        accessor: 'contentPurpose',
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
    {
        Header: 'Target Pembaca',
        accessor: 'contentTarget',
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
    {
        Header: 'Status',
        accessor: 'status',
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
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
//             }
//         }
//     },
//     {
//         label: 'Nama Program',
//         name: 'programName',
//         options: {
//             filter: false,
//             sort: true,
//         }
//     },
//     {
//         label: 'Kategori Program',
//         name: 'programCategory',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     {
//         label: 'Target Pembaca',
//         name:'programTarget',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     {
//         label: 'Status',
//         name: 'status',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     }
// ];

export default Columns;