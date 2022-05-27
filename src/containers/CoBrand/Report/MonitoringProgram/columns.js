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
        Header: 'Nama',
        accessor: 'nameUser',
        disableFilters: true
    },
    {
        Header: 'Nama Orangtua',
        accessor: 'parentName',
        disableFilters: true
    },
    {
        Header: 'Tahap',
        accessor: 'stepNumber',
        Filter: SelectColumnFilter,
        filter: 'equals',
        Cell: ({row}) => {
            return <p>{row.index % 4}</p>
        }
        
    },
    {
        Header: 'Nama Tahap',
        accessor: 'stepName',
        disableFilters: true,
        Cell: ({row}) => {
            if(row.index % 4 === 0) return <p>Menghafal Surah Al-Ikhlas</p>
            else if(row.index % 4 === 1) return <p>Menyempurnakan Gerakan Sholat</p>
            else if(row.index % 4 === 2) return <p>Membaca Surah An-Nisa</p>
            else if(row.index % 4 === 3) return <p>Belajar Kaligrafi</p>
        }
    },
    {
        Header: 'Periode Tahap',
        accessor: 'stepPeriod',
        Cell: () => {
            return <p>18 Mei 2022 - 14 Juni 2022</p>
        }
    },

    {
        Header: 'Respon',
        accessor: 'response',
        Filter: SelectColumnFilter,
        filter: 'equals',
        Cell: ({row}) => {
            if(row.index % 3 === 0) return <p>Kesulitan Melaksanakannya</p>
            else if(row.index % 3 === 1) return <p>Selesai Dilaksanakan</p>
            else if(row.index % 3 === 2) return <p>Belum Dilaksanakan</p>
        }
    },
    {
        Header: 'Nama Program',
        accessor: 'programName',
        disableFilters: true,
        Cell: ({row}) => {
            if(row.index % 2 === 0) return <p>Belajar Al-Quran</p>
            else if(row.index % 2 === 1) return <p>Aktivitas yang Menenangkan Hati</p>
        }
    },
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