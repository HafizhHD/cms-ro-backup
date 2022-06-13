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
        accessor: 'category',
        Filter: SelectColumnFilter,
        filter: 'equals',

        Cell: ({value, row}) => {
            if(value !== undefined) return value;
            else {
                if(row.index % 3 === 1) return <p>Pendidikan Agama</p>
                else return <p>Pengetahuan Siswa Umum</p>
            }
        }
    },
    {
        Header: 'Target Pembaca',
        accessor: 'targetAudiance',
        Filter: SelectColumnFilter,
        filter: 'equals',
        Cell: ({value, row}) => {
            if(value !== undefined) return value.join(', ');
            else return <p>Semua</p>
        }
    },
    {
        Header: 'Jumlah View',
        accessor: 'totalView',
    },
    {
        Header: 'Jumlah Tahap',
        accessor: 'contentPrograms.length',
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