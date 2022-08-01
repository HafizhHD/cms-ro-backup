//import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import { SelectColumnFilter, SelectArrayColumnFilter } from './../../../../components/UI/Table/TableFilter'
import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'


const Columns = [
    {
        Header: 'No.',
        id: 'rowNumber',
        disableFilters: true
    },
    {
        Header: 'ID',
        accessor: '_id'
    },
    {
        Header: 'Nama Program',
        accessor: 'programName',
        disableFilters: true
    },
    {
        Header: 'Kategori Program',
        accessor: 'category',
        Filter: SelectArrayColumnFilter,
        filter: 'arrIncludes',
        Cell: ({value, row}) => {
            if(value !== undefined) return <p>{value.join(', ')}</p>
            else return <p>Semua</p>
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
    {
        Header: 'Lihat Tahap',
        id: 'action',
        Cell: ({cell}) => (
            <>
                <NavLink
                    to="/report/program/step/"
                    className="nav_btn"
                    title="Lihat Tahap"
                    onClick={() => {
                        localStorage.setItem('stepReportSelected', cell.row.values._id)
                    }}
                >
                <button 
                    className="btn_action"
                >
                    <div>
                        <FiEye className="btn_action-icon" />
                    </div>
                </button>
                </NavLink>
            </>
        )
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