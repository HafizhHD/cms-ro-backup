//import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import { SelectColumnFilter } from './../../../../../components/UI/Table/TableFilter'


const Columns = [
    {
        Header: 'No. Urut Tahap',
        accessor: 'nomerUrutTahapan',
        disableFilters: true
    },
    {
        Header: 'Nama Tahap',
        accessor: 'contentName',
        disableFilters: true
    },
    {
        Header: 'Respon',
        accessor: 'Object.keys(respons)',
        // Filter: SelectColumnFilter,
        // filter: 'equals',

        // Cell: ({value, row}) => {
        //     if(value !== undefined) return value;
        //     else {
        //         if(row.index % 3 === 1) return <p>Pendidikan Agama</p>
        //         else return <p>Pengetahuan Siswa Umum</p>
        //     }
        // }
    }
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