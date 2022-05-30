//import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import { SelectColumnFilter, NumberRangeColumnFilter } from '../../../../components/UI/Table/TableFilter'

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
        disableFilters: true
    },
    {
        Header: 'Nama',
        accessor: 'nameUser',
        disableFilters: true
    },
    {
        Header: 'Email Orangtua',
        accessor: 'parentEmail',
        disableFilters: true
    },
    {
        Header: 'Nama Orangtua',
        accessor: 'parentName',
        disableFilters: true
    },
    {
        Header: 'Nama Konten',
        accessor: 'contentName',
        disableFilters: true,
        Cell: ({value, row}) => {
            if(value !== undefined) return <p>{value}</p>
            else {
                if(row.index % 3 === 0) return <p>5 Langkah Menguasai Ujian Nasional</p>
                else if(row.index % 3 === 1) return <p>Cara Cepat Menghafal Al-Quran</p>
                else if(row.index % 3 === 2) return <p>Inilah Sosok Terkenal yang Mahir Berbahasa Arab</p>
            }
        }
    },
    {
        Header: 'Respon',
        accessor: 'response',
        Filter: SelectColumnFilter,
        filter: 'equals',
        Cell: ({value, row}) => {
            if(value !== undefined) return <p>{value}</p>
            else {
                if(row.index % 2 === 0) return <p>Dibaca</p>
                else if(row.index % 2 === 1) return <p>Disukai</p>
            }
        }
    }
    // {
    //     Header: 'Sekolah',
    //     accessor: 'childInfo.schoolName',
    //     Filter: SelectColumnFilter,
    //     filter: 'equals'
    // },
    // {
    //     Header: 'Pendidikan',
    //     accessor: 'childInfo.StudyLevel',
    //     Filter: SelectColumnFilter,
    //     filter: 'equals'
    // },
    // {
    //     Header: 'Status Lock Screen',
    //     accessor:'lockScreenStatus',
    //     Filter: SelectColumnFilter,
    //     filter: 'equals'
    // },
    // {
    //     Header: 'Status Mode Asuh',
    //     accessor:'modeAsuh',
    //     Filter: SelectColumnFilter,
    //     filter: 'equals'
    // },
    // {
    //     Header: 'Aplikasi yang Diblokir',
    //     accessor:'blockedApps',
    // },
    // {
    //     Header: 'Aplikasi yang Dibatasi',
    //     accessor:'limitedApps'
    // },
    // {
    //     Header: 'Status Jadwal Penggunaan',
    //     accessor:'usageScheduleStatus',
    //     Filter: SelectColumnFilter,
    //     filter: 'equals'
    // },
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
//                 console.log(value);
//                 if(value != null) return value.StudyLevel;
//                 else return ' '
//             },

//             setCellProps: () => ({ style: { minWidth: "100px", maxWidth: "100px" }}),
//             setCellHeaderProps: () => ({ style: { minWidth: "100px", maxWidth: "100px" }}),
//         }
//     },
//     {
//         label: 'Screen Time Status',
//         name:'screenTimeStatus',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     {
//         label: 'Status Mode Asuh',
//         name:'modeAsuh',
//         options: {
//             filter: true,
//             sort: true,
//         }
//     },
//     {
//         label: 'Aplikasi yang Diblokir',
//         name: 'blockedApps',
//         options: {
//             filter: true,
//             sort: true,
//             filterType: 'textField'
//         }
//     },
//     {
//         label: 'Aplikasi yang Dibatasi',
//         name: 'limitedApps',
//         options: {
//             filter: true,
//             sort: true,
//             filterType: 'textField'
//         }
//     },
//     {
//         label: 'Status Jadwal Penggunaan',
//         name: 'usageScheduleStatus',
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