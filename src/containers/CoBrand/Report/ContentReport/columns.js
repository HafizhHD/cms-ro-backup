//import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import { SelectColumnFilter, SelectArrayColumnFilter } from './../../../../components/UI/Table/TableFilter'


const Columns = [
    {
        Header: 'No.',
        id: 'rowNumber',
        disableFilters: true
    },
    {
        Header: 'Nama Artikel',
        accessor: 'contentName',
        disableFilters: true
    },
    {
        Header: 'Jenis Artikel',
        accessor: 'contentType',
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
    {
        Header: 'Topik Artikel',
        accessor: 'topics',
        Filter: SelectArrayColumnFilter,
        filter: 'arrIncludes',
        Cell: ({value, row}) => {
            if(value !== undefined) return <p>{value.join(', ')}</p>
            else {
                if(row.index % 3 === 1) return <p>Pendidikan</p>
                else return <p>Agama</p>
            }
        }
    },
    {
        Header: 'Target Pembaca',
        accessor: 'targetAudiance',
        Filter: SelectArrayColumnFilter,
        filter: 'arrIncludes',
        Cell: ({value, row}) => {
            if(value !== undefined) return <p>{value.join(', ')}</p>
            else return <p>Semua</p>
        }
    },
    {
        Header: 'Jumlah View',
        accessor: 'totalViews',
    },
    {
        Header: 'Jumlah Like',
        accessor: 'totalLikes',
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
//             },
//             setCellProps: () => ({ style: { minWidth: "10px", maxWidth: "10px" }}),
//             setCellHeaderProps: () => ({ style: { minWidth: "10px", maxWidth: "10px" }}),
//         }
//     },
//     {
//         label: 'Nama Konten',
//         name: 'contentName',
//         options: {
//             filter: false,
//             sort: true,
//         }
//     },
//     {
//         label: 'Jenis Konten',
//         name: 'contentType',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     {
//         label: 'Kategori Konten',
//         name: 'contentPurpose',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     {
//         label: 'Target Pembaca',
//         name:'contentTarget',
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