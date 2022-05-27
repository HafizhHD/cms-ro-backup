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
        Header: 'Nama Tempat',
        accessor: 'placeName',
        disableFilters: true
    },
    {
        Header: 'Status',
        accessor: 'redZoneStatus',
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
    {
        Header: 'Alamat',
        accessor: 'address',
        disableFilters: true
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
//             },
//             setCellProps: () => ({ style: { minWidth: "10px", maxWidth: "10px" }}),
//             setCellHeaderProps: () => ({ style: { minWidth: "10px", maxWidth: "10px" }}),
//         }
//     },
//     {
//         label: 'Nama Tempat',
//         name: 'placeName',
//         options: {
//             filter: false,
//             sort: true,
//         }
//     },
//     {
//         label: 'Status',
//         name: 'redZoneStatus',
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
//     }
// ];

export default Columns;