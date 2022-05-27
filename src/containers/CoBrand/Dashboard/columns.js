

const Columns = [
    {
        Header: 'Pendidikan',
        accessor: 'studyLevel',
        disableFilters: true
    },
    {
        Header: 'Jumlah Anak',
        accessor: 'totalChild',
        disableFilters: true
    },
    {
        Header: 'Jumlah Anak Pemakaian Anak Tak Wajar',
        accessor: 'totalChildOver',
        disableFilters: true,
        Cell: ({value}) => {
            return <p style={{ color: 'red', fontWeight: 'bold' }}>{value}</p>
        }
    },

    {
        Header: 'Rata-Rata Waktu Pemakaian',
        accessor: 'avgChildOver',
        disableFilters: true,
        Cell: ({value}) => {
            return <p style={{ color: 'red', fontWeight: 'bold' }}>{value}</p>
        }
    },

    {
        Header: 'Standar Waktu Pemakaian Wajar',
        accessor: 'standardUsage',
        disableFilters: true
    },

    {
        Header: 'Jumlah Anak Pemakaian Anak Wajar',
        accessor: 'totalChildUnder',
        disableFilters: true,
        Cell: ({value}) => {
            return <p style={{ color: 'blue', fontWeight: 'bold' }}>{value}</p>
        }
    },
    {
        Header: 'Rata-Rata Waktu Pemakaian',
        accessor: 'avgChildUnder',
        disableFilters: true,
        Cell: ({value}) => {
            return <p style={{ color: 'blue', fontWeight: 'bold' }}>{value}</p>
        }
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